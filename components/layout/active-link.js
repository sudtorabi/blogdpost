import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./active-link.module.css";

const ActiveLink = (props) => {
  const router = useRouter();
  const isActive = props.href === router.pathname;

  return (
    <Link
      className={`${props.className ? props.className : ""} ${
        isActive ? styles.active : ""
      }`}
      href={props.href}
      // style={{ color: isActive ? "red" : "black" }}
    >
      {props.children}
    </Link>
  );
};

export default ActiveLink;
