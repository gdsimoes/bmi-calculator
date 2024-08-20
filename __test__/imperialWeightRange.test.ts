import { expect, test } from "vitest";
import { metricBmi, imperialWeightRange } from "../src/components/Calculator/Result";

test("Test the BMI calculator", () => {
    expect(
        imperialWeightRange(metricBmi(5 * 0.3048 + 11 * 0.0254, (11 * 14 + 4) * 0.453592), 5 * 0.3048 + 11 * 0.0254)
    ).toBe("9st 6lbs - 12st 10lbs");
});
