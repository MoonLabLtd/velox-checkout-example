import { create } from "zustand";
import { combine } from "zustand/middleware";

export type formSteps = "step1" | "step2" | "step3";

const useFormStore = create(
  combine(
    {
      step: "step2" as formSteps,
      externalId: "",
    },
    (set) => ({
      actions: {
        setStep: (step: formSteps) => set({ step }),
        setExternalId: (externalId: string) => set({ externalId }),
      },
    })
  )
);

export const useFormStep = () => useFormStore((state) => state.step);
export const useExternalId = () => useFormStore((state) => state.externalId);
export const useFormActions = () => useFormStore((state) => state.actions);
