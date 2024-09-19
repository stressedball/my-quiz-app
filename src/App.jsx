import "./App.css";
import { StartGame } from "./StartGame";
import { Game } from "./Game";
import { EndGame } from "./EndGame";

function App() {
    return (
        <>
            <h1 className="py-5 text-5xl">My quizz app!</h1>

            <section className="
            flex-1 px-5 w-full max-w-[720px] flex flex-col items-center justify-center">
                <StartGame />
                <Game />
                <EndGame />
            </section>
        </>
    );
}

export default App;
