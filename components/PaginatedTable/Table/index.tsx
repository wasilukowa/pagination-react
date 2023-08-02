import { TableBody } from "../TableBody";
import { TableHeader } from "../TableHeader";

import style from "./rwd.module.scss";
const { wrapperTable } = style;

import { TableProps } from "./types";

export const Table = ({headers, data}: TableProps) => {
    return (
        <div className={wrapperTable}>
            <TableHeader headers={headers}/>
            <TableBody data={data}/>
        </div>
    )
}