import React from "react";

function metricBmi(height: number, weight: number) {
    console.log({ height, weight });

    return weight / height ** 2;
}

type ResultProps = {
    height: number;
    weight: number;
};

function Result({ height, weight }: ResultProps) {
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
            <p>{bmi}</p>
            <p>Your BMI suggests you&apos;re a healthy weight. Your ideal weight is between 9st 6lbs - 12st 10lbs.</p>
        </section>
    );
}

export default Result;
