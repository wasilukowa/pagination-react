import { Pagination } from "./Pagination";
import { usePagination } from "./usePaginationHook";

import { PaginatedTableProps } from "./types";
import { SpinnerLoader } from "./LoadingSpinner";

import style from "./rwd.module.scss";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { ErrorMessage } from "./ErrorMessage";
const { wrapper, wrapperTable } = style;

export const PaginatedTable = ({headers, entriesOnPage, siblingCount, data}: PaginatedTableProps) => {

    const { 
        actualPageIndex,
        lastPageIndex,
        isBusy, 
        paginationRange,
        goToPage,
        errorMessage,
        preparedData
    } = usePagination(data, entriesOnPage, siblingCount)

    const isError = errorMessage.length !== 0;

    return (
        <div className={wrapper}>
            { isError && <ErrorMessage message={errorMessage}/>}
            { isBusy && <SpinnerLoader/>}
            <div className={wrapperTable}>
            <TableHeader headers={headers}/>
            <TableBody data={preparedData}/>
            </div>
            <Pagination 
                actualPageIndex={actualPageIndex}
                lastPageIndex={lastPageIndex}
                paginationRange={paginationRange}
                goToPage={goToPage}
            />
        </div>
    )
}