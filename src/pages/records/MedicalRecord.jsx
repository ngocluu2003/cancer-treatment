import { IconCirclePlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import RecordCard from "./components/RecordCard";
import CreateRecordModal from "./components/CreateRecordModal";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/UserContext";
const handleOpenModal = () => {};

const MedicalRecord = () => {
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user, ready } = usePrivy();

  const {
    records,
    fetchUserRecords,
    createRecord,
    fetchUserByEmail,
    currentUser,
  } = useUserStateContext();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (user) {
      fetchUserRecords(user.email?.address);
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
          createdBy: user.email.address,
        });
        if (newRecord) {
          fetchUserRecords(user.email.address);
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
    <div className="flex flex-wrap gap-[26px]">
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-neutral-700 bg-[#13131a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
        onClick={handleOpenModal}
      >
        <IconCirclePlus /> Create Record
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
