import { TableHeaderProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperHeader } = style;

export const TableHeader = ({headers}: TableHeaderProps) => {
    return (
        <div className={wrapper}>
        {
            headers.map((header, index) => <div key={`header_${index}`} className={wrapperHeader}>{header}</div>)
        }
        </div>
    )
}