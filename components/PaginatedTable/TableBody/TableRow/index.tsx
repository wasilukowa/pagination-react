import style from "./rwd.module.scss";
const { wrapper, wrapperCell } = style;

import { TPerson } from "../../types";

export const TableRow = ({id, firstName, lastName, age, email}: TPerson) => {
    return (
        <div className={wrapper}>
            <div className={wrapperCell}>{id}</div>
            <div className={wrapperCell}>{firstName}</div>
            <div className={wrapperCell}>{lastName}</div>
            <div className={wrapperCell}>{age}</div>
            <div className={wrapperCell}>{email}</div>
        </div>
    )
}