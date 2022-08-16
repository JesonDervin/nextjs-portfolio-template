import styles from "../styles/Home.module.css";
import Link from "next/link";
import { userinfo, ctaTexts, headings } from "../Constants/userinfo";

const Skills = ({ currentTheme }) => {
  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.skills}
      </h1>
      <div className={styles.skills} style={{ color: currentTheme.subtext }}>
        {userinfo.skills &&
          userinfo.skills.map((value) => (
            <div key={value.category}>
              <ul
                className={styles.skillList}
                data-aos="fade-up"
                key={value.category}
              >
                <h1
                  className={styles.skillHeading}
                  style={{ color: currentTheme.text }}
                >
                  {value.category}
                </h1>
                {value.skills
                  ? value.skills.map((skill, key2) => {
                      return <h2 key={key2}>{skill}</h2>;
                    })
                  : null}
              </ul>
              {userinfo.skills.indexOf(value) !==
                userinfo.skills.length - 1 && (
                <div
                  className={styles.line}
                  style={{ backgroundColor: currentTheme.subtext }}
                  data-aos="fade-up"
                ></div>
              )}
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <Link href="/contact">
          <a
            className={styles.cta3}
            style={{
              background: "transparent",
              border: `2px solid ${currentTheme.accent}`,
            }}
          >
            {ctaTexts.capabCTA} <span>&gt;</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Skills;
