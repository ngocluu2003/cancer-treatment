import {
  IconChevronRight,
  IconFileUpload,
  IconProgress,
} from "@tabler/icons-react";
import React, { useState } from "react";
import RecordDetailsHeader from "./components/RecordDetailsHeader";
import { useLocation, useNavigate } from "react-router-dom";
import FileUploadModal from "./components/FileUploadModal";
import { useUserStateContext } from "../../context/UserContext";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "markdown-to-jsx";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

const SingleRecordDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(
    state.analysisResults || "",
  );
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const { updateRecord } = useUserStateContext();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileType(selectedFile.type);
    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async () => {
    setUploading(true);
    setUploadSuccess(false);

    const genAI = new GoogleGenerativeAI(geminiApiKey);

    try {
      const base64Data = await readFileAsBase64(file);
      const imageParts = [
        { inlineData: { data: base64Data, mimeType: fileType } },
      ];
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      const prompt = `You are an expert cancer and any disease diagnosis analyst. Use your knowledge base to answer questions about giving personalized recommended treatments.
      give a detailed treatment plan for me, make it more readable, clear and easy to understand make it paragraphs to make it more readable
      `;

      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();

      setAnalysisResult(text);
      // state.analysisResults(text);
      await updateRecord({
        documentID: state.id,
        analysisResults: text,
        kanbanRecords: "",
      });

      setUploadSuccess(true);
      setIsModalOpen(false);
      setFileName("");
      setFile(null);
      setFileType("");
    } catch (error) {
      console.error("Error during file upload:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const processTreatmentPlan = async () => {
    if (state.kanbanRecords !== "test") {
      const text = state.kanbanRecords;
      try {
        const parsedResponse = JSON.parse(text);
        navigate("/screening-schedules", { state: parsedResponse });
      } catch (error) {
        alert("Error parsing kanbanRecords:", error);
      }
    }

    setIsProcessing(true);
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Your role is to develop a comprehensive treatment plan based on the analysis results provided: ${analysisResult}. The treatment plan should encompass the following columns:

    - To Do: Initiate essential tasks critical to the patient's care.
    - In Progress: Monitor tasks currently underway, ensuring adherence to established treatment protocols.
    - Completed: Document tasks that have been successfully finalized and are no longer active.
    - Follow-Up: Outline tasks necessitating future actions or assessments following the initial treatment phase.
    - Monitoring: Conduct continuous observations and evaluations critical to patient safety and the efficacy of the treatment plan.
    - Overdue: Identify tasks that have surpassed their designated deadlines and require immediate attention for resolution.
    - Upcoming: Highlight tasks scheduled for the near future to ensure proactive management and continuity of care.
    
    Each task must include a precise description pertinent to the patient's treatment journey, categorized accurately according to its current status.
    
    Please ensure the output adheres to the following structure for seamless front-end integration. The JSON string must be valid and presented without quotations, just the pure structure below:
    
    {
      "columns": [
        { "id": "todo", "title": "To Do" },
        { "id": "doing", "title": "In Progress" },
        { "id": "done", "title": "Completed" },
        { "id": "followup", "title": "Follow-Up" },
        { "id": "monitoring", "title": "Monitoring" },
        { "id": "overdue", "title": "Overdue" },
        { "id": "upcoming", "title": "Upcoming" }
      ],
      "tasks": [
        { "id": "1", "columnId": "todo", "content": "Perform a comprehensive patient assessment, including thorough history-taking and physical examination." },
        { "id": "2", "columnId": "todo", "content": "Order essential laboratory tests and diagnostic imaging to facilitate accurate diagnosis." },
        { "id": "3", "columnId": "doing", "content": "Administer prescribed pharmacological therapies while closely evaluating patient responses." },
        { "id": "4", "columnId": "doing", "content": "Facilitate educational sessions for patients regarding treatment protocols and anticipated outcomes." },
        { "id": "5", "columnId": "done", "content": "Finalize discharge planning, ensuring all follow-up appointments are scheduled appropriately." },
        { "id": "6", "columnId": "followup", "content": "Schedule a follow-up consultation to evaluate the effectiveness and any adjustments needed for the treatment plan." },
        { "id": "7", "columnId": "followup", "content": "Review laboratory results in detail and make necessary adjustments to the treatment regimen as required." },
        { "id": "8", "columnId": "monitoring", "content": "Continuously monitor vital signs, documenting any deviations from expected physiological ranges." },
        { "id": "9", "columnId": "monitoring", "content": "Assess and document potential adverse reactions to medications, reporting findings to the healthcare team promptly." },
        { "id": "10", "columnId": "overdue", "content": "Reassess any delayed laboratory tests that require immediate resolution." },
        { "id": "11", "columnId": "overdue", "content": "Follow up on overdue medication refills that have not been addressed, ensuring patient compliance." },
        { "id": "12", "columnId": "upcoming", "content": "Plan and schedule the next patient review meeting to discuss ongoing treatment." },
        { "id": "13", "columnId": "upcoming", "content": "Prepare for the next scheduled imaging tests required for further diagnostic evaluations." }
      ]
    }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      try {
        const parsedResponse = JSON.parse(text);
        await updateRecord({ documentID: state.id, kanbanRecords: text });
        navigate("/screening-schedules", { state: parsedResponse });
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);
        alert("Failed to parse response from the AI. Please try again.");
      }
    } catch (error) {
      console.error("Error processing treatment plan:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-[26px] bg-[#f5f5f5] dark:bg-[#13131a]">
      <button
        type="button"
        onClick={handleOpenModal}
        disabled={analysisResult !== "test"}
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-[#1c1c24] dark:text-white dark:hover:bg-neutral-800"
      >
        <IconFileUpload className="text-[#1ec070] dark:text-[#1dc071]" />
        Upload Reports
      </button>
      <FileUploadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onFileChange={handleFileChange}
        onFileUpload={handleFileUpload}
        uploading={uploading}
        uploadSuccess={uploadSuccess}
        fileName={fileName}
      />
      <RecordDetailsHeader recordName={state.recordName} />
      <div className="w-full">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="inline-block min-w-full p-1.5 align-middle">
              <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm dark:border-neutral-700 dark:bg-[#13131a]">
                <div className="border-b border-neutral-300 px-6 py-4 dark:border-neutral-700">
                  <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    Personalized AI-Driven Treatment Plan
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    A tailored medical strategy leveraging advanced AI insights.
                  </p>
                </div>
                <div className="flex w-full flex-col px-6 py-4 text-neutral-800 dark:text-white">
                  <div>
                    <h2 className="text-lg font-semibold">Analysis Result</h2>
                    <div className="space-y-2">
                      <Markdown>{analysisResult}</Markdown>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={processTreatmentPlan}
                    disabled={analysisResult === "test"}
                    className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-neutral-100 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                  >
                    View Treatment Plan{" "}
                    <IconChevronRight
                      className="text-neutral-500 dark:text-neutral-400"
                      size={20}
                    />
                    {isProcessing && (
                      <IconProgress
                        size={10}
                        className="mr-3 h-5 w-5 animate-spin"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecordDetail;
