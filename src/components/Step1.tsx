import { useFormActions } from "@/store/useFormStore";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  //   FormMessage,
} from "./ui/form";
import { type Step1Schema, step1Schema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Step1 = () => {
  const form = useForm<Step1Schema>({
    resolver: zodResolver(step1Schema),
  });
  const { setStep } = useFormActions();
  return (
    <div className="w-3xl">
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            (data) => {
              setStep("step2");
            }
            // (onInvalid) => console.log(onInvalid)
          )}
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="test" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="test" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant="default" className="bg-[#1DBF73]">
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
};
