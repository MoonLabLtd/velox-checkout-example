import { useFormActions, useFormIndex } from "@/store/useFormStore";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { PaymentOptionsRadio } from "./PaymentOptionsRadio";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { useMutation } from "@tanstack/react-query";

export const Step2 = () => {
  const { setStep, setStepIndex, setExternalId } = useFormActions();
  const stepIndex = useFormIndex();
  const serverUrl = import.meta.env.VITE_PUBLIC_SERVER_URL;

  const createCheckoutQuery = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${serverUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: "10000",
          orderId: "ORD-12345-XYZ",
          message: "Please handle with care.",
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: (data) => {
      window.open(
        `https://sandbox-checkout.veloxwallet.com/?externalId=${data.externalId}`,
        "_blank",
        "width=600,height=600,resizable=yes,scrollbars=yes,popup=yes"
      );
      setExternalId(data?.externalId);
      setStepIndex(2);
      setStep("step3");
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-7 auto-rows-min sm:grid sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p>
              I will design professional web and mobile app UI/UX for your brand
            </p>
            <p>$200</p>
          </div>
          <div className="flex flex-col gap-4">
            <PaymentOptionsRadio />
            <PaymentMethodCard />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="border-white p-5">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p>Payment Amount</p>
                  <p>$0.01</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Platform Fee</p>
                  <p>$0.00</p>
                </div>
                <div className="border-b-[1px] border-[#dddddd]" />
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">$0.01</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            variant={"default"}
            className="w-full bg-[#1DBF73] z-[1]"
            onClick={() => {
              createCheckoutQuery.mutate();
            }}
          >
            Pay
          </Button>
        </div>
      </div>
      <Button
        variant={"default"}
        className="bg-[#1DBF73] w-full"
        onClick={() => {
          setStep("step1");
          if (stepIndex > 0) {
            setStepIndex(stepIndex - 1);
          }
        }}
      >
        Back
      </Button>
    </div>
  );
};
