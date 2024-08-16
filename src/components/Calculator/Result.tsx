import React from "react";

import styles from "./Calculator.module.css";

import { unitType } from "./types";

function metricBmi(height: number, weight: number) {
    return weight / height ** 2;
}

function metricWeightRange(bmi: number, height: number) {
    const minWeight = 18.5 * height ** 2;
    const maxWeight = 24.9 * height ** 2;

    return `${minWeight.toFixed(1)}kg - ${maxWeight.toFixed(1)}kg`;
}

function imperialWeightRange(bmi: number, height: number) {
    const minWeight = 18.5 * height ** 2;
    const maxWeight = 24.9 * height ** 2;

    const minLbs = minWeight * 2.20462;
    const maxLbs = maxWeight * 2.20462;

    return `${Math.floor(minLbs / 14)}st ${Math.floor(minLbs % 14)}lbs - ${Math.floor(maxLbs / 14)}st ${Math.floor(
        maxLbs % 14
    )}lbs`;
}

function bmiText(bmi: number) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi < 25) {
        return "a healthy weight";
    } else if (bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}

type ResultProps = {
    unit: unitType;
    height: number;
    weight: number;
};

function Result({ unit, height, weight }: ResultProps) {
    if (height === 0 || weight === 0) {
        return (
            <section className={styles.result}>
                <p className={styles.welcome}>Welcome!</p>
                <p>Enter your height and weight and you&apos;ll see your BMI result here</p>
            </section>
        );
    }

    const bmi = metricBmi(height, weight);

    return (
        <section className={styles.result}>
            <div>
                <p className={styles.intro}>Your BMI is...</p>
                <p className={styles.bmi}>{bmi.toFixed(1)}</p>
            </div>
            <p className={styles.content}>
                Your BMI suggests you&apos;re {bmiText(bmi)}. Your ideal weight is between{" "}
                <span>{unit === "metric" ? metricWeightRange(bmi, height) : imperialWeightRange(bmi, height)}</span>.
            </p>
        </section>
    );
}

export default Result;
