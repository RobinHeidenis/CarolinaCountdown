import {Component} from "solid-js";
import {time} from "./timeSignal";

export const SecondsCounter: Component = () => {
    const secondsUntil = () => Math.ceil(time() / (1000));

    return (
        <div>
            <h2>{secondsUntil()} seconds</h2>
        </div>
    )
}