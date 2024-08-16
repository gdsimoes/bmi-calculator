import Image from "next/image";

import styles from "./Header.module.css";

import logo from "/public/images/logo.svg";

function Header() {
    return (
        <header className={styles.wrapper}>
            <Image src={logo} alt="" />
            <h1>
                Body Mass <br /> Index Calculator
            </h1>
            <p>
                Better understand your weight in relation to your height using our body mass index (BM) calculator.
                While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to
                evaluate your overall health and well-being.
            </p>
        </header>
    );
}

export default Header;
