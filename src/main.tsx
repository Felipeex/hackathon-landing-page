import { createRoot } from "react-dom/client";
import { Home } from "./pages/home.tsx";
import "./index.css";
import { PhoneMockup } from "./components/PhoneMockup.tsx";

createRoot(document.getElementById("root")!).render(<Home />);
{
  /* <main className="flex h-screen items-center justify-center">
    <PhoneMockup />
  </main> */
}
