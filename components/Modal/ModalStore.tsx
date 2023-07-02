"use client";

import { useModalStore } from "@/hooks/modal-store";
import Modal from "../ui/Modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormField } from "../ui/form";

const ModalStore = () => {
  const storemodal = useModalStore();

  const FormData = z.object({
    name: z.string().min(2, "name must be at least 2 characters"),
  });

  type FormDataschema = z.infer<typeof FormData>;

  const form = useForm<FormDataschema>({
    resolver: zodResolver(FormData),
    defaultValues: {
      name: "",
    },
  });
  const Onsubmit = async (data: FormDataschema) => {
    console.log(data);
    // create store
  };

  return (
    <Modal
      title="Create New Store"
      description="add new store"
      isOpen={storemodal.isOpen}
      onClose={storemodal.onClose}
    >
      {/* add a form here */}
      <div>
        <div className="py-2 pb-4 space-y-4 ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit{Onsubmit}}>
              <FormField>

              </FormField>

            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalStore;
