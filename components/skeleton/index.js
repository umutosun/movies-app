import React from "react";
import styles from "./style.module.css";
function Skeleton({ width, height }) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export default Skeleton;
