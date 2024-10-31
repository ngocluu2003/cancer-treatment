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
    if (isLoaded && user) {
      fetchUserRecords(user.emailAddresses[0].emailAddress);
    }
  }, [user, fetchUserRecords, isLoaded]);

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
    setLoading(true);
    setError("");

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
    const filteredRecords = userRecords.find((record) => record.name === name);
    navigate(`/medical-records/${name}`, { state: filteredRecords });
  };

  if (contextLoading) {
    return <div className="text-center text-[#1ec070]">Loading records...</div>;
  }

  return (
    <div className="flex flex-wrap gap-[26px] bg-[#f5f5f5] dark:bg-[#13131a]">
      {/* Global Context Loading and Error Display */}

      {/* {contextError && (
        <div className="mb-4 text-center text-red-600">{contextError}</div>
      )} */}

      {/* Folder Creation Button */}
      {!contextLoading && (
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-300 bg-[#e9e9e9] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-[#e3e3db] dark:border-neutral-700 dark:bg-[#1c1c24] dark:text-white dark:hover:bg-[#2c2f32]"
          onClick={handleOpenModal}
          disabled={contextLoading}
        >
          <IconCirclePlus className="text-[#1ec070] dark:text-[#1dc071]" />
          Create Record
        </button>
      )}

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
