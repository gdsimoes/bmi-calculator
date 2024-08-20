import { expect, test } from "vitest";
import { metricBmi, metricWeightRange } from "../src/components/Calculator/Result";

test("Test the BMI calculator", () => {
    expect(metricWeightRange(metricBmi(1.85, 80), 1.85)).toBe("63.3kg - 85.2kg");
});
