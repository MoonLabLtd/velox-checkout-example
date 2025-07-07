// import { StepOneData, StepTwoData } from "@/lib/form";
import { create } from "zustand";
import { combine } from "zustand/middleware";

// const stepVariant = {
//   1: "stepOne",
//   2: "stepTwo",
// };

export type formSteps = "step1" | "step2";

// type setDataType =
//   | { step: 1; data: StepOneData }
//   | { step: 2; data: StepTwoData };

const useFormStore = create(
  combine(
    {
      step: "step1" as formSteps,
    },
    (set) => ({
      actions: {
        setStep: (step: formSteps) => set({ step }),
      },
    })
  )
);

export const useFormStep = () => useFormStore((state) => state.step);
export const useFormActions = () => useFormStore((state) => state.actions);
