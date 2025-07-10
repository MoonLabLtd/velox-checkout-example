import VeloxLogo from "../assets/svgs/velox-wallet-white.svg";
import VeloxPay from "../assets/svgs/velox-wallet-black.svg";

export function PaymentMethodCard() {
  return (
    <div className="flex flex-col gap-4 border-[1px] border-[#E0E3E6] rounded-2xl p-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold">PAYMENT METHODS</h1>
        <img src={VeloxLogo} alt="logo" className="w-[65px]" />
      </div>
      <img src={VeloxPay} alt="velox-pay-method" className="" />
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold">Velox Wallet</span> is a Web3 aggregator
          designed to provide seamless stablecoin payment technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <p className="font-bold">Step 1:</p>
          <p>
            <span className="font-bold">Click </span>Complete Payment
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <p className="font-bold">Step 2: </p>
          <p>
            Log in to your <span className="font-bold">Velox Wallet</span>{" "}
            account
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <p>
            <span className="font-bold">Step 3: </span> Scan QR and confirm your
            payment
          </p>
        </div>
      </div>
    </div>
  );
}
