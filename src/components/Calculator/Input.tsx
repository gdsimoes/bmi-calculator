import React from "react";

import styles from "./Calculator.module.css";

import { unitType, setHeightType, setWeightType } from "./types";

type InputProps = {
    unit: unitType;
    setHeight: setHeightType;
    setWeight: setWeightType;
};

function Input({ unit, setHeight, setWeight }: InputProps) {
    const [cm, setCm] = React.useState("");
    const [ft, setFt] = React.useState("");
    const [inches, setInches] = React.useState("");
    const [kg, setKg] = React.useState("");
    const [st, setSt] = React.useState("");
    const [lbs, setLbs] = React.useState("");

    // Make sure a change in unit resets the calculator
    React.useEffect(() => {
        setCm("");
        setFt("");
        setInches("");
        setKg("");
        setSt("");
        setLbs("");
        setHeight(0);
        setWeight(0);
    }, [unit, setHeight, setWeight]);

    // Update height and weight when using metric units
    React.useEffect(() => {
        // Use setTimeout to prevent the result from flickering
        const timeoutId = setTimeout(() => {
            setHeight(Number(cm) / 100);
            setWeight(Number(kg));
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [cm, kg, setHeight, setWeight]);

    // Update height and weight when using imperial units
    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setHeight(Number(ft) * 0.3048 + Number(inches) * 0.0254);
            setWeight((Number(st) * 14 + Number(lbs)) * 0.453592);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [ft, inches, st, lbs, setHeight, setWeight]);

    function handleChange(type: "cm" | "ft" | "inches" | "kg" | "st" | "lbs") {
        let setter: React.Dispatch<React.SetStateAction<string>>;
        switch (type) {
            case "cm":
                setter = setCm;
                break;
            case "ft":
                setter = setFt;
                break;
            case "inches":
                setter = setInches;
                break;
            case "kg":
                setter = setKg;
                break;
            case "st":
                setter = setSt;
                break;
            case "lbs":
                setter = setLbs;
                break;
        }

        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setter(event.target.value);
        };
    }

    return (
        <div className={unit === "metric" ? styles.metricRow : undefined}>
            <fieldset>
                <legend>Height</legend>
                <div className={styles.row}>
                    {unit === "metric" ? (
                        <label>
                            <input type="number" placeholder="0" value={cm} onChange={handleChange("cm")} />
                            <span className={styles.label}>cm</span>
                        </label>
                    ) : (
                        <>
                            <label>
                                <input type="number" placeholder="0" value={ft} onChange={handleChange("ft")} />
                                <span className={styles.label}>ft</span>
                            </label>
                            <label>
                                <input type="number" placeholder="0" value={inches} onChange={handleChange("inches")} />
                                <span className={styles.label}>in</span>
                            </label>
                        </>
                    )}
                </div>
            </fieldset>
            <fieldset>
                <legend className={styles.weight}>Weight</legend>
                <div className={styles.row}>
                    {unit === "metric" ? (
                        <label>
                            <input type="number" placeholder="0" value={kg} onChange={handleChange("kg")} />
                            <span className={styles.label}>kg</span>
                        </label>
                    ) : (
                        <>
                            <label>
                                <input type="number" placeholder="0" value={st} onChange={handleChange("st")} />
                                <span className={styles.label}>st</span>
                            </label>
                            <label>
                                <input type="number" placeholder="0" value={lbs} onChange={handleChange("lbs")} />
                                <span className={styles.label}>lbs</span>
                            </label>
                        </>
                    )}
                </div>
            </fieldset>
        </div>
    );
}

export default Input;
