import React, { useState } from "react";
import Modal from "./Modal";

const CreateRecordModal = ({ isOpen, onClose, onCreate }) => {
  const [foldername, setFoldername] = useState("");

  const handleCreate = () => {
    onCreate(foldername);
    setFoldername("");
  };

  return (
    <Modal
      title={"Create Record"}
      isOpen={isOpen}
      onClose={onClose}
      onAction={handleCreate}
      actionLabel="Create Folder"
    >
      <div className="grid gap-y-4">
        <div>
          <label
            htmlFor="folder-name"
            className="mb-2 block text-sm text-gray-800 dark:text-white"
          >
            Record Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="folder-name"
              value={foldername}
              onChange={(e) => setFoldername(e.target.value)}
              required
              className="block w-full rounded-lg border-2 px-4 py-3 text-sm focus:border-[#1ec070] focus:outline-none dark:border-neutral-800 dark:bg-[#1c1c24] dark:text-white dark:placeholder-neutral-500"
              placeholder="Enter record name"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateRecordModal;
