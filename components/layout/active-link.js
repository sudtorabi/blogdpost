import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = (props) => {
  const router = useRouter();
  const isActive = props.href === router.pathname;

  return (
    <Link
      className={props.className}
      href={props.href}
      style={{ color: isActive ? "red" : "black" }}
    >
      {props.children}
    </Link>
  );
};

export default ActiveLink;
