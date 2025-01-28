import { useEffect, useState } from "react";

type ResBody = {
    word: string;
    id: number;
}

function useNewPrompt() {
    const [prompt, setPrompt] = useState<string>("");

    useEffect(() => {
        let isCancelled = false;

        async function getWord() {
            console.log(process.env.API_KEY)
            const response = await fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=46aam4ypmmxcapo06wd75lkckz5z9c6oxyod65chujd5ugh52`);
            const data = await response.json();
            if (!isCancelled) {
                data.map((obj: ResBody) => setPrompt((prev) => prev === "" ? obj.word : prev + " " + obj.word))
                console.log(prompt)
            }
        }

        getWord();

        return () => {
            isCancelled = true;
        };
    }, []);

    return prompt;
}

export default useNewPrompt;