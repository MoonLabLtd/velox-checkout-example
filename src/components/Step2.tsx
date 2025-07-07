import { useFormActions } from "@/store/useFormStore";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import payByBank from "../assets/svgs/pay-by-bank.svg";
import debitCard from "../assets/svgs/debit-card.svg";
import VeloxLogo from "../assets/images/logo_dark.png";
import paypal from "../assets/svgs/paypal.svg";
import alipay from "../assets/svgs/alipay.svg";
import sofort from "../assets/svgs/sofort.svg";
import VeloxPay from "../assets/svgs/velox-all-black.svg";

export const Step2 = () => {
  const { setStep } = useFormActions();
  return (
    <div className="flex flex-col gap-4">
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
                  className="border-green-600 text-green-600 focus-visible:border-green-600 focus-visible:ring-green-600/20 dark:border-green-400 dark:text-green-400 dark:focus-visible:border-green-400 dark:focus-visible:ring-green-400/40 [&_svg]:fill-green-600 dark:[&_svg]:fill-green-400"
                />
                <Label htmlFor="pay-by-bank">
                  <div className="flex flex-row items-center gap-2">
                    <img src={payByBank} alt="pay-by-bank" />
                    <p>Pay by bank</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem value="debit-card" id="debit-card" />
                <Label htmlFor="debit-card">
                  <div className="flex flex-row items-center gap-2">
                    <img src={debitCard} alt="debit-card" />
                    <p>Debit Card</p>
                  </div>
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">
                  <img src={paypal} alt="paypal" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem value="pay-with-velox" id="velox" />
                <Label htmlFor="velox">
                  <img src={VeloxLogo} alt="velox-logo" className="w-[80px]" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem value="pay-with-alipay" id="alipay" />
                <Label htmlFor="alipay">
                  <img src={alipay} alt="alipay-logo" className="w-[80px]" />
                </Label>
              </div>
              <div className="flex items-center gap-3 border-[1px] border-[#E0E3E6] rounded-lg px-6 py-4">
                <RadioGroupItem value="pay-with-sofort" id="sofort" />
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
              <CardTitle>Price Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                  <p>Subtotal</p>
                  <p>$200</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Service Fee</p>
                  <p>$30</p>
                </div>
                <div className="border-b-[1px] border-[#dddddd]" />
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">$230</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Delivery Time</p>
                  <p>5 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            variant={"default"}
            className="w-full bg-[#1DBF73]"
            onClick={() => {
              console.log("trigger checkout");
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
