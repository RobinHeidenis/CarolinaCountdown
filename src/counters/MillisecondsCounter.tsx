import { Component, createSignal, onCleanup } from "solid-js";
import { time } from "./timeSignal";

export const MillisecondsCounter: Component = () => {
    return (
        <div>
            <h2>{time()} milliseconds</h2>
        </div>
    )
}