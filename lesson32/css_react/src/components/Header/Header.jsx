import React from "react";
import styles from "./Header.module.css";
import classnames from "classnames";

export default function Header() {
  console.log(styles);
  return (
    <div className={classnames(styles.header, styles.bigText)}>Header</div>
  );
}
