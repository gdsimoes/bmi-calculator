import styles from "./Calculator.module.css";

import { unitType } from "./types";

type InputProps = {
    unit: unitType;
};

function Input({ unit }: InputProps) {
    return (
        <div>
            <fieldset>
                <legend>Height</legend>
                {unit === "metric" ? (
                    <label>
                        <input type="number" />
                        <span className={styles.label}>cm</span>
                    </label>
                ) : (
                    <>
                        <label>
                            <input type="number" />
                            <span className={styles.label}>ft</span>
                        </label>
                        <label>
                            <input type="number" />
                            <span className={styles.label}>in</span>
                        </label>
                    </>
                )}
            </fieldset>
            <fieldset>
                <legend>Weight</legend>
                {unit === "metric" ? (
                    <label>
                        <input type="number" />
                        <span className={styles.label}>kg</span>
                    </label>
                ) : (
                    <>
                        <label>
                            <input type="number" />
                            <span className={styles.label}>st</span>
                        </label>
                        <label>
                            <input type="number" />
                            <span className={styles.label}>lbs</span>
                        </label>
                    </>
                )}
            </fieldset>
        </div>
    );
}

export default Input;
