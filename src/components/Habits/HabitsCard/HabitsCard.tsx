import Image from "next/image";

import styles from "./HabitsCard.module.css";

type HabitsCardProps = {
    type: string;
    title: string;
    children: string;
};

async function HabitsCard({ type, title, children }: HabitsCardProps) {
    const icon = await import(`/public/images/icon-${type}.svg`);

    return (
        <article className={styles.wrapper}>
            <Image src={JSON.parse(JSON.stringify(icon))} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </article>
    );
}

export default HabitsCard;
