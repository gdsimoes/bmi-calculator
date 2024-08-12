"use client";

import React from "react";

import styles from "./Calculator.module.css";

import Units from "./Units";
import Input from "./Input";

import { unitType } from "./types";

function Calculator() {
    const [unit, setUnit] = React.useState<unitType>("metric");

    return (
        <section className={styles.wrapper}>
            <h2>Enter your details below</h2>
            <form>
                <Units unit={unit} setUnit={setUnit} />
                <Input unit={unit} />
            </form>
            <section></section>
        </section>
    );
}

export default Calculator;
