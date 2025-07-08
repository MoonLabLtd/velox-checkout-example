import SuccessIcon from "../assets/svgs/success.svg";
import FailedIcon from "../assets/svgs/error.svg";
import LoadingIcon from "../assets/svgs/loading-green.svg";
import VeloxLogo from "../assets/svgs/velox-wallet-white.svg";
import { cn, dateFormat, formatBigint } from "@/lib/utils";
import { useCheckoutInfoQuery } from "@/actions/checkout";
import { useExternalId } from "@/store/useFormStore";

type Status = "completed" | "pending" | "failed" | "processing";

const statusIcons = (status: Status) => {
  switch (status) {
    case "completed":
      return SuccessIcon;
    case "pending":
      return LoadingIcon;
    case "processing":
      return LoadingIcon;
    case "failed":
      return FailedIcon;
    default:
      return FailedIcon; // Fallback icon
  }
};

const statusText = (status: Status) => {
  switch (status) {
    case "completed":
      return "Payment Success";
    case "pending":
      return "Payment Pending";
    case "failed":
      return "Payment Failed";
    case "processing":
      return "Processing Payment;";
    default:
      return "Unknown Status"; // Fallback text
  }
};

export const Step3 = () => {
  const externalId = useExternalId();
  const getCheckoutQuery = useCheckoutInfoQuery(externalId);
  const subpayments =
    getCheckoutQuery.data && getCheckoutQuery.data?.payments?.subPayments;

  const status: Status = !subpayments
    ? "processing"
    : subpayments?.every((p) => p.status === "done")
    ? "completed"
    : subpayments?.some((p) => p.status === "pending" || p.status === "created")
    ? "pending"
    : "failed";

  const logo = statusIcons(status);

  return (
    <div className="w-2xl flex flex-col gap-4">
      {getCheckoutQuery.isSuccess && !getCheckoutQuery.data?.payments && (
        <div className="flex flex-col gap-3 items-center justify-center">
          <p className="font-bold">Processing Payment</p>
          <img
            src={logo}
            alt="Payment Status"
            className={cn("size-24", status === "processing" && "animate-spin")}
          />
        </div>
      )}
      {getCheckoutQuery.isSuccess && getCheckoutQuery.data?.payments && (
        <>
          <div className="flex flex-row justify-center">
            <img
              src={logo}
              alt="Payment Status"
              className={cn("size-24", status === "pending" && "animate-spin")}
            />
          </div>
          <p className="font-bold text-h4 text-hi-emphasis text-center">
            {statusText(status)}
          </p>
          <div className="flex flex-col gap-3 rounded-[12px] border-[1px] p-3 text-b3">
            <div className="flex flex-row justify-between">
              <p className="text-start text-md-emphasis">
                Transaction date / time
              </p>
              <p className="text-end font-bold">
                {dateFormat(new Date(getCheckoutQuery.data?.createdTime))}
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Payment Method</p>
              <img src={VeloxLogo} className="w-[120px]" />
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-start text-md-emphasis">Payment Amount</p>
              <p className="text-end font-bold text-b1">
                ${formatBigint(getCheckoutQuery.data?.payments?.totalAmount)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
