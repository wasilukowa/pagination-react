import { TableBodyProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperCell } = style;

export const TableBody = ({data}: TableBodyProps) => {
    return (
            <div>
            {
                data.map(item => {return (
                    <div key={item.id} className={wrapper}>
                        <div className={wrapperCell}>{item.id}</div>
                        <div className={wrapperCell}>{item.firstName}</div>
                        <div className={wrapperCell}>{item.lastName}</div>
                        <div className={wrapperCell}>{item.age}</div>
                        <div className={wrapperCell}>{item.email}</div>
                    </div>)
                })
            }

            </div>
    )
}