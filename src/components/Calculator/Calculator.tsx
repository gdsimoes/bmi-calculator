"use client";

import React from "react";

import styles from "./Calculator.module.css";

import Units from "./Units";
import Input from "./Input";
import Result from "./Result";

import { unitType } from "./types";

function Calculator() {
    const [unit, setUnit] = React.useState<unitType>("metric");

    // Height is in meters and weight is in kilograms
    const [height, setHeight] = React.useState<number>(0);
    const [weight, setWeight] = React.useState<number>(0);

    return (
        <section className={styles.wrapper}>
            <h2>Enter your details below</h2>
            <form>
                <Units unit={unit} setUnit={setUnit} />
                <Input unit={unit} setHeight={setHeight} setWeight={setWeight} />
            </form>
            <Result unit={unit} height={height} weight={weight} />
        </section>
    );
}

export default Calculator;
