import { createSignal } from "solid-js";

export const [time, setTime] = createSignal(12);
    
setInterval(() => {
    const timeUntil = new Date(import.meta.env.VITE_ARRIVAL_TIME).getTime();
    const now = new Date().getTime();
    setTime(Math.ceil(timeUntil - now));
}, 1);