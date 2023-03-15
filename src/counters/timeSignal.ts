import { createSignal } from "solid-js";

export const [time, setTime] = createSignal(12);
    
setInterval(() => {
    const timeUntil = new Date("2023-04-02").getTime();
    const now = new Date().getTime();
    setTime(Math.ceil(timeUntil - now));
}, 1);