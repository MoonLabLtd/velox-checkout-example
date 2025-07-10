import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import payByBank from "../assets/svgs/pay-by-bank.svg";
import debitCard from "../assets/svgs/debit-card.svg";
import paypal from "../assets/svgs/paypal.svg";
import alipay from "../assets/svgs/alipay-new.svg";
import sofort from "../assets/svgs/sofort.svg";
import VeloxLogo from "../assets/svgs/velox-wallet-white.svg";

export function PaymentOptionsRadio() {
  return (
    <>
      <p className="font-bold">Select Payment Method</p>
      <RadioGroup
        defaultValue="pay-with-velox"
        className="flex flex-col sm:grid sm:grid-cols-2 gap-3"
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
    </>
  );
}
