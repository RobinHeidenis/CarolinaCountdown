import { Component } from "solid-js";
import { time } from "./timeSignal";

export const MinutesCounter: Component = () => {
    const minutesUntil = () => Math.ceil(time() / (1000 * 60));

    return (
        <div>
            <h2>{minutesUntil()} minutes</h2>
        </div>
    )
}