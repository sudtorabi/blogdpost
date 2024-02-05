import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/sudi.jpg"
          alt="blogger photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sudi</h1>
      <p>
        I'm specialized in the web development, especially front-end frameworks
        such as React and Nextjs
      </p>
    </section>
  );
};

export default Hero;
