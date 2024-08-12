import styles from "./Calculator.module.css";

import { unitType } from "./types";

import VisuallyHidden from "../VisuallyHidden";

type UnitsProps = {
    unit: unitType;
    setUnit: React.Dispatch<React.SetStateAction<unitType>>;
};

function Units({ unit, setUnit }: UnitsProps) {
    return (
        <>
            <fieldset>
                <legend>
                    <VisuallyHidden>Units</VisuallyHidden>
                </legend>
                <label>
                    <input
                        type="radio"
                        name="unit"
                        value="metric"
                        checked={unit === "metric"}
                        onChange={() => setUnit("metric")}
                    />{" "}
                    Metric
                </label>
                <label>
                    <input
                        type="radio"
                        name="unit"
                        value="imperial"
                        checked={unit === "imperial"}
                        onChange={() => setUnit("imperial")}
                    />{" "}
                    Imperial
                </label>
            </fieldset>
        </>
    );
}

export default Units;
