import { IconCirclePlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import RecordCard from "./components/RecordCard";
import CreateRecordModal from "./components/CreateRecordModal";

import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContext";
import { useUser } from "@clerk/clerk-react";

const MedicalRecord = () => {
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { records, fetchUserRecords, createRecord, currentUser } =
    useUserStateContext();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isLoaded && user) {
      fetchUserRecords(user.emailAddresses[0].emailAddress);
    }
  }, [user, fetchUserRecords]);

  useEffect(() => {
    setUserRecords(records);
    localStorage.setItem("userRecords", JSON.stringify(records));
  }, [records]);

  const createFolder = async (foldername) => {
    try {
      if (currentUser) {
        const newRecord = await createRecord({
          userId: currentUser.id,
          recordName: foldername,
          analysisResults: "test",
          kanbanRecords: "test",
          createdBy: user.email?.address || user.google?.email,
        });
        if (newRecord) {
          fetchUserRecords(user.email?.address || user.google?.email);
          handleCloseModal();
        }
      }
    } catch (error) {
      console.error(error);
      handleCloseModal();
    }
  };

  const handleNavigate = (name) => {
    const filteredRecords = userRecords.filter(
      (record) => record.name === name,
    );
    navigate(`/medical-records/${name}`, { state: filteredRecords[0] });
  };

  return (
    <div className="flex flex-wrap gap-[26px] bg-[#f5f5f5] dark:bg-[#13131a]">
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-300 bg-[#e9e9e9] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-[#e3e3db] dark:border-neutral-700 dark:bg-[#1c1c24] dark:text-white dark:hover:bg-[#2c2f32]"
        onClick={handleOpenModal}
      >
        <IconCirclePlus className="text-[#1ec070] dark:text-[#1dc071]" />
        Create Record
      </button>

      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={createFolder}
      />

      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {userRecords.map((record, index) => (
          <RecordCard key={index} record={record} onNavigate={handleNavigate} />
        ))}
      </div>
    </div>
  );
};

export default MedicalRecord;
