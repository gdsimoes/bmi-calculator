import Image from "next/image";

import styles from "./Explanation.module.css";

import manEating from "/public/images/image-man-eating.webp";
import curve from "/public/images/pattern-curved-line-left.svg";

function Explanation() {
    return (
        <section className={styles.wrapper}>
            <Image src={manEating} alt="" width={564} height={533} className={styles.manEating} />
            <div className={styles.content}>
                <h2>What your BMI result means</h2>
                <p>
                    A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a healthy weight
                    may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes.
                    Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and
                    vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for
                    five days a week.
                </p>
            </div>
            <Image src={curve} alt="" className={styles.curve} />
        </section>
    );
}

export default Explanation;
