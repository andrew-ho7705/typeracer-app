import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time])
    return <>{time}</>
}

export default Timer;