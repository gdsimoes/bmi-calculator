import InfoCard from "../InfoCard";

import styles from "./InfoSection.module.css";

import fs from "fs";
import path from "path";

const FILE_PATH = "src/components/InfoSection/InfoSectionData.json";
const InfoSectionData = JSON.parse(fs.readFileSync(path.resolve(FILE_PATH), "utf8"));

function InfoSection() {
    return (
        <article className={styles.wrapper}>
            <h2>Limitations of BMI</h2>
            <p className={styles.intro}>
                Although BMI is often a practical indicator of healthy weight, it is not suited for every person.
                Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may
                not be beneficial to use.
            </p>

            {InfoSectionData.map(({ type, content }: { type: string; content: string }) => (
                <InfoCard key={type} type={type}>
                    {content}
                </InfoCard>
            ))}
        </article>
    );
}

export default InfoSection;
