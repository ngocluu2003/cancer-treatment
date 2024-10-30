import { IconCirclePlus } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import RecordCard from "./components/RecordCard";
import CreateRecordModal from "./components/CreateRecordModal";
import { usePrivy } from "@privy-io/react-auth";
import { useNavigate } from "react-router-dom";
import { useUserStateContext } from "../../context/User";

const handleOpenModal = () => {};

const MedicalRecord = () => {
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = usePrivy();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const createFolder = () => {};

  const {
    records,
    fetchUserRecords,
    createRecords,
    fetchUserbyEmail,
    currentUser,
  } = useUserStateContext();

  useEffect(() => {
    if (user) {
      fetchUserbyEmail(user.email.address);
      fetchUserRecords(user.email.address);
    }
  }, [user, fetchUserbyEmail, fetchUserRecords]);
  
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

      <div className="grid w-full sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {/* <RecordCard /> */}
      </div>
    </div>
  );
};

export default MedicalRecord;
