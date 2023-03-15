import { Component } from "solid-js";
import { time } from "./timeSignal";

export const HoursCounter: Component = () => {
    const hoursUntil = () => Math.ceil(time() / (1000 * 60 * 60));
    return (
        <div>
            <h2>{hoursUntil()} hours</h2>
        </div>
    )
}