import React, { ForwardedRef } from "react";
import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  suffix?: JSX.Element;
}
const Input = ({ suffix, className, ...rest }: InputProps) => {
    return (
      <div className={`${styles["input_container"]} ${className}`}>
        <input className={styles["input"]} {...rest}  />
        <span>{suffix}</span>
      </div>
    )
  }

export default Input;
