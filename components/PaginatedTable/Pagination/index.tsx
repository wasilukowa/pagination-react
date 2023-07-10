import style from "./rwd.module.scss";
const { wrapper } = style

import { PaginationProps } from "./types";
import { PaginationPins } from "./PaginationPins";
import { ArrowsLeft } from "./ArrowsLeft";
import { ArrowsRight } from "./ArrowsRight";

export const Pagination = ({
    actualPageIndex,
    lastPageIndex,
    paginationRange,
    goToPage,
    }: PaginationProps) => {

    return (
        <div className={wrapper}>
            <ArrowsLeft actualPageIndex={actualPageIndex} goToPage={goToPage}/>
            <PaginationPins paginationRange={paginationRange} actualPageIndex={actualPageIndex} goToPage={goToPage}/>
            <ArrowsRight actualPageIndex={actualPageIndex} lastPageIndex={lastPageIndex} goToPage={goToPage}/>
        </div>
    )
};