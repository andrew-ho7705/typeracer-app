"use client"
import useNewPrompt from "@/hooks/useNewPrompt";
import { ChangeEvent, useState } from "react";

function Game() {
    const [currChar, setCurrChar] = useState(0);
    const [correctChar, setCorrectChar] = useState(0);
    const [score, setScore] = useState(0);
    const prompt = useNewPrompt();
    const INCORRECT = "red";
    const CORRECT = "green";

    function handleUserInput(e: ChangeEvent<HTMLTextAreaElement>) {
        const currCharElement = document.getElementById(`char-${currChar}`)!;
        if (e.target.value[currChar] === currCharElement?.innerHTML) {
            currCharElement.style.color = "white";
            currCharElement.style.backgroundColor = CORRECT;
            setScore(score + 1);
            setCurrChar(currChar + 1);
            setCorrectChar(correctChar + 1);
        } else {
          if ((e.nativeEvent as InputEvent).inputType === "deleteContentBackward") {
            const prevCharElement = document.getElementById(`char-${currChar - 1}`)!;
            prevCharElement.style.color = "black";
            prevCharElement.style.backgroundColor = "white";
            setCurrChar(currChar - 1);
          } else {
            currCharElement.style.color = "white";
            currCharElement.style.backgroundColor = INCORRECT;
            setScore(score - 1);
            setCurrChar(currChar + 1);
          }
        }
    }

    return (
        <>
            <div className="flex-row mx-10 border border-black overflow-auto my-4">
                {Array.from(prompt).map((char, i) => (
                    <span
                        className="whitespace-break-spaces"
                        id={`char-${i}`}
                        key={`char-${i}`}
                    >
                        {char}
                        {i === currChar - 1 && (
                            <span className="blinking-cursor"></span>
                        )}
                    </span>
                ))}
            </div>
            <form>
                <textarea
                    className={`${prompt ? "border border-black" : ""}`} 
                    id="user-input"
                    onChange={handleUserInput}
                />
            </form>
        </>
    );
}

export default Game;