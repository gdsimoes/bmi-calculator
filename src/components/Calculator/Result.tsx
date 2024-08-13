import React from "react";

import { unitType } from "./types";

function metricBmi(height: number, weight: number) {
    console.log({ height, weight });

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

type ResultProps = {
    unit: unitType;
    height: number;
    weight: number;
};

function Result({ unit, height, weight }: ResultProps) {
    if (height === 0 || weight === 0) {
        return (
            <section>
                <p>Welcome!</p>
                <p>Enter your height and weight and you&apos;ll see your BMI result here</p>
            </section>
        );
    }

    const bmi = metricBmi(height, weight);

    return (
        <section>
            <p>Your BMI is...</p>
            <p>{bmi.toFixed(1)}</p>
            <p>
                Your BMI suggests you&apos;re a healthy weight. Your ideal weight is between{" "}
                {unit === "metric" ? metricWeightRange(bmi, height) : imperialWeightRange(bmi, height)}.
            </p>
        </section>
    );
}

export default Result;
