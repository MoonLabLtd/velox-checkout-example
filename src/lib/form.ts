import type { formSteps } from "@/store/useFormStore";
import type { JSX } from "react";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from '@/components/Step3';

export type FormStep = {
  title: string;
  form: () => JSX.Element;
  step: number;
};

export const formData: Record<formSteps, FormStep> = {
    'step1': {
        step: 1,
        title: 'Step 1: Order Details',
        form: Step1,
    }, 
    'step2': {
        step: 2,
        title: 'Step 2: Confirm & Pay',
        form: Step2
    },
    'step3': {
        step: 3,
        title: 'Step 3: Result',
        form: Step3
    }
}

