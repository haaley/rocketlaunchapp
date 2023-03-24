import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles["header-container"]}>
      {router.pathname !== "/" && (
        <>
          <button
            className={styles["home-button"]}
            onClick={() => router.back()}
          >
            {"< Back"}
          </button>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </>
      )}
    </header>
  );
};
export default Header;
