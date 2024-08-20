import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import Explanation from "@/components/Explanation";
import Habits from "@/components/Habits";
import InfoSection from "@/components/InfoSection";

import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <Header />
            <Calculator />
            <Explanation />
            <Habits />
            <InfoSection />
        </main>
    );
}
