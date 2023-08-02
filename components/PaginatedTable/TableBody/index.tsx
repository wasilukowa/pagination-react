import { TableBodyProps } from "./types";

import { TableRow } from "./TableRow";

import style from "./rwd.module.scss";
const { wrapper } = style;

export const TableBody = ({data}: TableBodyProps) => {
    return (
            <div className={wrapper}>
                {   data.map(item => 
                        <TableRow key={item.id} {...item} />
                    ) 
                }
            </div>
    )
}