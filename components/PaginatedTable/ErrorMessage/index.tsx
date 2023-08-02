import style from "./rwd.module.scss";
const { wrapper } = style;

import { ErrorMessageProps } from "./types";

export const ErrorMessage = ({message}: ErrorMessageProps) => {
    return (
        <div className={wrapper}>{message}</div>
    )
}