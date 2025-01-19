import React, { useState } from "react";
import Modal from "./Modal";

const CreateRecordModal = ({ isOpen, onClose, onCreate, error, loading }) => {
  const [foldername, setFoldername] = useState("");

  const handleCreate = () => {
    onCreate(foldername);
    setFoldername("");
  };

  return (
    <Modal
      title="Tạo Hồ Sơ"
      isOpen={isOpen}
      onClose={onClose}
      onAction={handleCreate}
      actionLabel="Tạo Thư Mục"
      error={error}
      loading={loading}
    >
      <div className="grid gap-y-4">
        <div>
          <label
            htmlFor="folder-name"
            className="mb-2 block text-sm text-gray-800 dark:text-white"
          >
            Tên Hồ Sơ
          </label>
          <div className="relative">
            <input
              type="text"
              id="folder-name"
              disabled={loading}
              value={foldername}
              onChange={(e) => setFoldername(e.target.value)}
              required
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-[#1ec070] focus:outline-none dark:border-neutral-800 dark:bg-[#1c1c24] dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600"
              placeholder="Nhập tên hồ sơ"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateRecordModal;
