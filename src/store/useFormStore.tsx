import { create } from "zustand";
import { combine } from "zustand/middleware";

export type formSteps = "step1" | "step2" | "step3";

const useFormStore = create(
  combine(
    {
      // index check for progress indicator
      stepIndex: 0,
      step: "step1" as formSteps,
      externalId: "",
    },
    (set) => ({
      actions: {
        setStep: (step: formSteps) => set({ step }),
        setStepIndex: (stepIndex: number) => set({ stepIndex }),
        setExternalId: (externalId: string) => set({ externalId }),
      },
    })
  )
);

export const useFormStep = () => useFormStore((state) => state.step);
export const useFormIndex = () => useFormStore((state) => state.stepIndex);
export const useExternalId = () => useFormStore((state) => state.externalId);
export const useFormActions = () => useFormStore((state) => state.actions);
