import React from "react";
import { useStyles } from "./useStyle";
import classNames from "classnames";

export default function Footer(props) {
  const classes = useStyles(props);
  return (
    <div className={classNames(classes.footer, classes.bigText)}>Footer</div>
  );
}
