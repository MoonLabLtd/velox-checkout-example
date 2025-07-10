import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckoutSteps } from "./lib/form";
import { useFormStep } from "./store/useFormStore";
import VeloxLogoIcon from "./assets/svgs/velox-logo-icon.svg";
import VeloxLogoText from "./assets/svgs/velox-logo-text.svg";
import VeloxOutlined from "./assets/images/velox-outlined.png";
import { ProgressIndicator } from "./components/ProgressIndicator";

function App() {
  const queryClient = new QueryClient();
  const step = useFormStep();
  const { title, form: Form } = CheckoutSteps[step];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col gap-4 w-full sm:max-w-[900px] sm:mx-auto">
        <div className="flex items-center gap-2 p-4">
          <img
            src={VeloxLogoIcon}
            className="pointer-events-none w-[36px]"
            alt="logo"
          />
          <img src={VeloxLogoText} className="w-[84px]" alt="velox-logo-text" />
        </div>
        <div className="relative z-[1] p-4">
          <h1 className="font-bold">Velox Merchant Checkout</h1>
          <ProgressIndicator />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">{title}</h1>
            <Form key={step} />
          </div>
        </div>
        <img src={VeloxOutlined} className="absolute bottom-0 right-0 z-[0]" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
