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
            <fieldset className={styles.unit}>
                <legend>
                    <VisuallyHidden>Units</VisuallyHidden>
                </legend>
                <input
                    type="radio"
                    name="unit"
                    value="metric"
                    id="metric"
                    checked={unit === "metric"}
                    onChange={() => setUnit("metric")}
                />{" "}
                <label htmlFor="metric" className={styles.marginRight}>
                    Metric
                </label>
                <input
                    type="radio"
                    name="unit"
                    value="imperial"
                    id="imperial"
                    className={styles.inputImperial}
                    checked={unit === "imperial"}
                    onChange={() => setUnit("imperial")}
                />{" "}
                <label htmlFor="imperial" className={styles.labelImperial}>
                    Imperial
                </label>
            </fieldset>
        </>
    );
}

export default Units;
