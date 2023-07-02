"use client";

import { useModalStore } from "@/hooks/modal-store";
import Modal from "../../components/ui/Modal";
import { useEffect } from "react";

export default function SetUpPage() {

    const onOpen=useModalStore((state)=>state.onOpen);
    const isOpen=useModalStore((state)=>state.isOpen);
    useEffect(()=>{
        if(!isOpen){
            onOpen();
        }

    },[isOpen,onOpen]);
  return (
    <main className="flex">
    
      <div className="flex items-center justify-center">
        root page
      </div>
    </main>
  );
}
