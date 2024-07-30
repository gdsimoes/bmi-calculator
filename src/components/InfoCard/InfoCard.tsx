import Image from "next/image";

import styles from "./InfoCard.module.css";

type InfoCardProps = {
    type: string;
    children: string;
};

async function InfoCard({ type, children }: InfoCardProps) {
    // Unfortunately the path alias doesn't work here
    const icon = await import(`../../../public/images/icon-${type}.svg`);

    return (
        <section className={`${styles.wrapper} ${styles[type]}`}>
            <header>
                {/* I had to do this JSON stringify and parsing to remove this warning:
                "Only plain objects can be passed to Client Components from Server Components.
                Module objects are not supported."" */}
                <Image src={JSON.parse(JSON.stringify(icon))} alt="" />
                <h3>{type}</h3>
            </header>
            <p>{children}</p>
        </section>
    );
}

export default InfoCard;
