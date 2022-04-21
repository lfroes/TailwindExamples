import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";

import mainBanner from "../public/banner.png";

export default function Home() {
  const [darkMode, setMode] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!darkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [darkMode]);

  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <div className={styles.title}>TRNDY</div>
        <div className={styles.togglerContainer}>
          <div className={styles.toggler}>
            <label htmlFor="toggle" className={styles.toggleLabel}>
              <div className={styles.relative}>
                <input
                  type="checkbox"
                  id="toggle"
                  className={styles.srOnly}
                  value={darkMode}
                  onChange={() => setMode(!darkMode)}
                />
                <div className={styles.toggleOuter}></div>
                <div className={`${styles.toggleInner} dot`}></div>
              </div>
              <div className={styles.togglerText}>
                {!darkMode ? "Light Mode" : "Dark Mode"}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.mainBanner}>
          <Image
            src={mainBanner}
            alt="main-banner"
            width={2500}
            height={1400}
          />
        </div>
        <div className={styles.mainInfo}>
          <h1 className={styles.mainTitle}>
            Óculos novos em um estalar de dedos!
          </h1>
          <p className={styles.mainSubTitle}>
            Compre óculos dos mais variados com a TRNDY
          </p>
          <div className={styles.CallToAction}>
            <button className={styles.ctaButton}>Peça Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
