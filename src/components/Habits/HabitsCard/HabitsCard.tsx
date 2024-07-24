import Image from "next/image";

import styles from "./HabitsCard.module.css";

type HabitsCardProps = {
    type: string;
    title: string;
    children: string;
};

async function HabitsCard({ type, title, children }: HabitsCardProps) {
    // Unfortunately the path alias doesn't work here
    const icon = await import(`../../../../public/images/icon-${type}.svg`);

    return (
        <article>
            <header>
                <Image src={JSON.parse(JSON.stringify(icon))} alt="" />
                <h3>{title}</h3>
            </header>
            <p>{children}</p>
        </article>
    );
}

export default HabitsCard;
