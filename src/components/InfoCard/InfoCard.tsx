import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
    icon: StaticImport;
    title: string;
    children: React.ReactNode;
};

function InfoCard({ icon, title, children }: InfoCardProps) {
    return (
        <section className={styles.wrapper}>
            <header>
                <Image src={icon} alt="" />
                <h3>{title}</h3>
            </header>
            <p>{children}</p>
        </section>
    );
}

export default InfoCard;
