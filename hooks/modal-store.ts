import  {create} from "zustand";


interface ModalStoretypes {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void; 
}

export const useModalStore = create<ModalStoretypes>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({isOpen: true})),
    onClose: () => set((state) => ({isOpen: false})),
    onToggle: () => set((state) => ({isOpen: !state.isOpen})),
}));