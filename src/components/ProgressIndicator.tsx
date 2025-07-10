import { CheckoutSteps, progressIndicatorSteps } from "@/lib/form";
import { useFormIndex, useFormStep } from "@/store/useFormStore";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function ProgressIndicator() {
  const step = useFormStep();
  const stepIndex = useFormIndex();
  const { step: currentStep } = CheckoutSteps[step];

  console.log("step index", stepIndex);
  console.log("test", Object.keys(CheckoutSteps).length);

  return (
    <div className="flex items-center w-full justify-center p-4">
      <div className="w-full">
        <div className="relative flex justify-between">
          {/* Progress Line */}
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200">
            <motion.div
              className="h-full bg-[#58EC93]"
              initial={{ width: "0%" }}
              animate={{
                width: `${
                  (stepIndex / (Object.keys(CheckoutSteps).length - 1)) * 100
                }%`,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          {/* Steps */}
          {progressIndicatorSteps.map((step) => {
            const isCompleted = stepIndex > step.step - 1;
            const isCurrent = stepIndex === step.step - 1;

            return (
              <div key={step.step} className="relative z-10">
                <motion.button
                  className={`flex size-16 items-center justify-center rounded-full ${
                    isCompleted
                      ? "bg-[#308251] text-white"
                      : isCurrent
                      ? "bg-[rgb(88,236,147)] text-white"
                      : "border-primary bg-[#2c2c2d] text-gray-400"
                    // isCompleted || isCurrent
                    //   ? "border-primary bg-[#2c2c2d] text-white"
                    //   : "border-gray-200 bg-white text-gray-400"
                  }`}
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    transition: { type: "spring", stiffness: 500, damping: 30 },
                  }}
                >
                  {isCompleted ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </motion.button>
                <div
                  className={`absolute left-1/2 mt-2 -translate-x-1/2 text-sm font-medium ${
                    isCompleted || isCurrent ? "text-primary" : "text-gray-500"
                  }`}
                />
              </div>
            );
          })}
        </div>
        {/* Screen reader progress */}
        <div className="sr-only" role="status" aria-live="polite">
          {`Step ${currentStep} of ${Object.keys(CheckoutSteps).length}`}
        </div>
      </div>
    </div>
  );
}
