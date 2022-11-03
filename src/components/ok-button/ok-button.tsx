import React, { FC } from "react";
import styles from './ok-button.module.scss'

interface OkButtonProps {
    text: string;
}

export const OkButton: FC<OkButtonProps> = ({text="ok"}) => (
    <button className={styles.button}>{text}</button>
)