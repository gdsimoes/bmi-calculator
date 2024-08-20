import { expect, test } from "vitest";
import { metricBmi } from "../src/components/Calculator/Result";

test("Test the BMI calculator", () => {
    expect(metricBmi(1.7, 70)).toBeCloseTo(24.2, 1);
    expect(metricBmi(1.85, 80)).toBeCloseTo(23.4, 1);
});
