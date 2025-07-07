import "./App.css";
import { formData } from "./lib/form";
import { useFormStep } from "./store/useFormStore";
import VeloxLogo from "./assets/svgs/logo-all-white.svg";
import VeloxOutlined from "./assets/images/velox-outlined.png";

function App() {
  const step = useFormStep();
  const { title, form: Form } = formData[step];

  return (
    <div className="relative z-[1] min-h-screen flex flex-col gap-4">
      {/* Header */}
      <div className="p-4">
        <img src={VeloxLogo} className="w-[100px]" alt="logo" />
      </div>
      <div className="max-w-4xl mx-auto flex flex-col gap-4 pb-16">
        <h1 className="font-bold">{title}</h1>
        <Form key={step} />
      </div>
      <img src={VeloxOutlined} className="absolute bottom-0 right-0 z-[1]" />
    </div>
  );
}

export default App;
