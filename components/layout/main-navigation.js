import Link from "next/link";
import ActiveLink from "./active-link";
import Logo from "./logo";
import styles from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      {/* we wrap the Logo component by a Link component to make in clickable */}
      <Link href="/">
        <Logo />
      </Link>
      <navbar>
        <ul>
          <li>
            <ActiveLink href="/">Home Page</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/posts">All Posts</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contact">Contact Me</ActiveLink>
          </li>
        </ul>
      </navbar>
    </header>
  );
};

export default MainNavigation;
