import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GameProvider from "./GameContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GameProvider>
            <App />
        </GameProvider>
    </StrictMode>
);
