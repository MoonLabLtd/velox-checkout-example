import type { formSteps } from "@/store/useFormStore";
import type { JSX } from "react";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from '@/components/Step3';
import type { LucideIcon } from 'lucide-react';
import { CheckIcon, UserIcon, CreditCardIcon } from 'lucide-react'

export type CheckoutStep = {
  title: string;
  form: () => JSX.Element;
  step: number;
  icon: LucideIcon
};

export const CheckoutSteps: Record<formSteps, CheckoutStep> = {
    'step1': {
        step: 1,
        title: 'Step 1: Order Details',
        form: Step1, 
        icon: UserIcon
    }, 
    'step2': {
        step: 2,
        title: 'Step 2: Confirm & Pay',
        form: Step2,
         icon: CreditCardIcon
    },
    'step3': {
        step: 3,
        title: 'Step 3: Result',
        form: Step3,
         icon: CheckIcon
    }
}

export const progressIndicatorSteps: CheckoutStep[] = [
    {
        step: 1,
        title: 'Step 1: Order Details',
        form: Step1,
        icon: UserIcon
    }, 
    {
        step: 2,
        title: 'Step 2: Confirm & Pay',
        form: Step2,
        icon: CreditCardIcon
    },
    {
        step: 3,
        title: 'Step 3: Result',
        form: Step3,
        icon: CheckIcon
    }
]

