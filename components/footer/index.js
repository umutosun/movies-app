import React from "react";
import Link from "next/link";

import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/umutosunnn" target="_blank">
        Umut Tosun
      </Link>
    </footer>
  );
}

export default Footer;
