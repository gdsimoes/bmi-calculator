import InfoCard from "../InfoCard";

import styles from "./InfoSection.module.css";

// Icons
import genderIcon from "@/../public/images/icon-gender.svg";
import ageIcon from "@/../public/images/icon-age.svg";
import muscleIcon from "@/../public/images/icon-muscle.svg";
import pregnancyIcon from "@/../public/images/icon-pregnancy.svg";
import raceIcon from "@/../public/images/icon-race.svg";

function infoSection() {
    return (
        <article className={styles.wrapper}>
            <h2>Limitations of BMI</h2>
            <p className={styles.intro}>
                Although BMI is often a practical indicator of healthy weight, it is not suited for every person.
                Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may
                not be beneficial to use.
            </p>

            <InfoCard icon={genderIcon} title="Gender">
                The development and body fat composition of girls and boys vary with age. Consequently, a child&apos;s
                age and gender are considered when evaluating their BMI.
            </InfoCard>

            <InfoCard icon={ageIcon} title="Age">
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat
                content.
            </InfoCard>

            <InfoCard icon={muscleIcon} title="Muscle">
                BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t differentiate muscle
                from fat.
            </InfoCard>

            <InfoCard icon={pregnancyIcon} title="Pregnancy">
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy
                BMI is advisable to minimise health risks for both mother and child.
            </InfoCard>

            <InfoCard icon={raceIcon} title="Race">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than
                others. To learn more, it is advised to discuss this with your GP or practice nurse.
            </InfoCard>
        </article>
    );
}

export default infoSection;
