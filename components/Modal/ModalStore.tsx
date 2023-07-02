"use client";

import { useModalStore } from "@/hooks/modal-store";
import Modal from "../ui/Modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
            <form onSubmit={form.handleSubmit(Onsubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (



                  <FormItem>
                    <FormLabel>Nmae</FormLabel>
                    <FormControl>
                      <Input placeholder="eaxample  e-com store" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>




                )}
              />

              <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
                <Button variant="outline" onClick={storemodal.onClose}>cancel</Button>
                <Button type="submit">continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalStore;
