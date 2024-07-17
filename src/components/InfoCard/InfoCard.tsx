import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
    type: string;
    children: string;
};

async function InfoCard({ type, children }: InfoCardProps) {
    // Unfortunately the path alias doesn't work here
    const icon = await import(`../../../public/images/icon-${type}.svg`);

    return (
        <section className={styles.wrapper}>
            <header>
                <Image src={icon} alt="" />
                <h3>{type}</h3>
            </header>
            <p>{children}</p>
        </section>
    );
}

export default InfoCard;
