import Habits from "@/components/Habits";
import InfoSection from "@/components/InfoSection";

import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <h1>Body Mass Index Calculator</h1>
            <Habits />
            <InfoSection />
        </main>
    );
}
