import { Component } from "solid-js";
import { time } from "./timeSignal";

export const Counter: Component = () => {
    const daysUntil = () => Math.ceil(time() / (1000 * 60 * 60 * 24));

    return (
        <div>
            <h1>{daysUntil}</h1>
        </div>
    )
}