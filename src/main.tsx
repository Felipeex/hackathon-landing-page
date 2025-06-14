import { createRoot } from "react-dom/client";
import { Home } from "./pages/home.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<Home />);
