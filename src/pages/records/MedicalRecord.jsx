import { IconCirclePlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import RecordCard from "./components/RecordCard";
import CreateRecordModal from "./components/CreateRecordModal";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContext";
import { useUser } from "@clerk/clerk-react";

const MedicalRecord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const {
    records,
    fetchUserRecords,
    createRecord,
    currentUser,
    loading: contextLoading,
    error: contextError,
  } = useUserStateContext();

  useEffect(() => {
    if (user) {
      fetchUserRecords(user.emailAddresses[0].emailAddress);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("userRecords", JSON.stringify(records));
  }, [records]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setError(""); // Clear any previous errors when reopening the modal
    setIsModalOpen(true);
  };

  const createFolder = async (foldername) => {
    console.log(loading);
    setLoading(true);
    setError("");
    console.log(loading);

    try {
      if (currentUser) {
        const newRecord = await createRecord({
          userId: currentUser.id,
          recordName: foldername,
          analysisResults: "test",
          kanbanRecords: "test",
          createdBy: user.emailAddresses[0].emailAddress,
        });
        if (newRecord) {
          fetchUserRecords(user.emailAddresses[0].emailAddress);
          handleCloseModal();
        }
      }
    } catch (error) {
      setError("Error creating folder. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = (name) => {
    const filteredRecords = records.find((record) => record.name === name);
    navigate(`/medical-records/${name}`, { state: filteredRecords });
  };

  // after the folder creation
  if (contextLoading && !loading) {
    return <div className="text-center text-[#1ec070]">Loading records...</div>;
  }

  return (
    <div className="flex flex-wrap gap-[26px] bg-[#f5f5f5] dark:bg-[#13131a]">
      {/* Folder Creation Button */}
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-300 bg-[#e9e9e9] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-[#e3e3db] dark:border-neutral-700 dark:bg-[#1c1c24] dark:text-white dark:hover:bg-[#2c2f32]"
        onClick={handleOpenModal}
        disabled={contextLoading}
      >
        <IconCirclePlus className="text-[#1ec070] dark:text-[#1dc071]" />
        Create Record
      </button>
      {/* Folder Creation Modal with Context Loading/Error as Props */}
      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={createFolder}
        loading={loading}
        error={error}
      />
      {/* Records List */}
      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {records.map((record, index) => (
          <RecordCard key={index} record={record} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  );
};

export default MedicalRecord;
