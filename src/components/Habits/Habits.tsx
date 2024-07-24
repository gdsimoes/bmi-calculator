import HabitsCard from "./HabitsCard";

import styles from "./Habits.module.css";

import fs from "fs";
import path from "path";

const FILE_PATH = "src/components/Habits/data.json";
const HabitsCardData = JSON.parse(fs.readFileSync(path.resolve(FILE_PATH), "utf8"));

function Habits() {
    return (
        <article>
            {HabitsCardData.map(({ type, title, content }: { type: string; title: string; content: string }) => (
                <HabitsCard key={type} type={type} title={title}>
                    {content}
                </HabitsCard>
            ))}
        </article>
    );
}

export default Habits;
