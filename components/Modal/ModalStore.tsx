"use client";

import { useModalStore } from "@/hooks/modal-store";
import Modal from "../ui/Modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ModalStore = () => {
  const storemodal = useModalStore();
  const [loading, setloading] = useState(false);

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
    try {
      setloading(true);
      const response= await axios.post("/api/store",data);
     
      toast.success("store created successfully");


      
    } catch (error) {
      console.log(error);
      toast.error("store creation failed");
      
      
    }finally{
      setloading(false);
    }
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
                      <Input
                        disabled={loading}
                        placeholder="eaxample  e-com store"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant="outline"
                  onClick={storemodal.onClose}
                >
                  cancel
                </Button>
                <Button disabled={loading} type="submit">
                  continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalStore;
