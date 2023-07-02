"use client";

import { useModalStore } from "@/hooks/modal-store";
import Modal from "../ui/Modal";

const ModalStore = () => {
  const storemodal = useModalStore();
  return (
    <Modal
      title="Create New Store"
      description="add new store"
      isOpen={storemodal.isOpen}
      onClose={storemodal.onClose}
    >
      new store modal
    </Modal>
  );
};

export default ModalStore;
