import { useFormActions } from "@/store/useFormStore";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import payByBank from "../assets/svgs/pay-by-bank.svg";
import debitCard from "../assets/svgs/debit-card.svg";
import VeloxLogo from "../assets/images/logo_dark.png";
import paypal from "../assets/svgs/paypal.svg";
import alipay from "../assets/svgs/alipay-new.svg";
import sofort from "../assets/svgs/sofort.svg";
import VeloxPay from "../assets/svgs/velox-all-black.svg";
import { useMutation } from "@tanstack/react-query";

export const Step2 = () => {
  const { setStep, setExternalId } = useFormActions();
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
        `https://checkout-velox.web.app?externalId=${data.externalId}`,
        "_blank",
        "width=600,height=600,resizable=yes,scrollbars=yes,popup=yes"
      );
      setExternalId(data?.externalId);
      setStep("step3");
    },
  });

  return (
    <div className="flex flex-col gap-4 w-4xl">
      <div className="flex flex-row justify-between gap-12">
        <div className="flex flex-col gap-7">
          <div>
            <p>
              I will design professional web and mobile app UI/UX for your brand
            </p>
            <p>$200</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Select Payment Method</p>
            <RadioGroup
              defaultValue="pay-with-velox"
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="pay-by-bank"
                  id="pay-by-bank"
                  disabled
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="pay-by-bank">
                  <div className="flex flex-row items-center gap-2">
                    <img src={payByBank} alt="pay-by-bank" />
                    <p>Pay by bank</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="debit-card"
                  id="debit-card"
                  disabled
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="debit-card">
                  <div className="flex flex-row items-center gap-2">
                    <img src={debitCard} alt="debit-card" />
                    <p>Debit Card</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  disabled
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="paypal">
                  <img src={paypal} alt="paypal" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="pay-with-velox"
                  id="velox"
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="velox">
                  <img src={VeloxLogo} alt="velox-logo" className="w-[80px]" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="pay-with-alipay"
                  id="alipay"
                  disabled
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="alipay">
                  <img src={alipay} alt="alipay-logo" className="w-[80px]" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem
                  value="pay-with-sofort"
                  id="sofort"
                  disabled
                  className="border-[#BBBDC0] text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-[#BBBDC0] dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="sofort">
                  <img src={sofort} alt="sofort-logo" className="w-[70px]" />
                </Label>
              </div>
            </RadioGroup>
            <div className="flex flex-col gap-4 border-[1px] border-[#E0E3E6] rounded-2xl p-4">
              <div className="flex flex-row items-center gap-4">
                <h1 className="font-bold">PAYMENT METHODS</h1>
                <img src={VeloxLogo} alt="logo" className="w-[65px]" />
              </div>
              <p>
                <span className="font-bold">Velox Wallet</span> is a Web3
                aggregator designed to provide seamless stablecoin payment
                technology.
              </p>
              <div className="flex flex-row gap-4">
                <img src={VeloxPay} alt="velox-pay-method" />
                <div>
                  <p>
                    <span className="font-bold">Step 1: </span>Click{" "}
                    <span className="font-bold">"Complete Payment"</span>
                  </p>
                  <p>
                    <span className="font-bold">Step 2: </span>Log in to your{" "}
                    <span className="font-bold">Velox Wallet</span> account
                  </p>
                  <p>
                    <span className="font-bold">Step 3: </span> Scan QR and
                    confirm your payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Card className="border-white p-5 w-[300px]">
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
            Complete Order
          </Button>
        </div>
      </div>
      <Button
        variant={"default"}
        className="bg-[#1DBF73]"
        onClick={() => setStep("step1")}
      >
        Back
      </Button>
    </div>
  );
};
