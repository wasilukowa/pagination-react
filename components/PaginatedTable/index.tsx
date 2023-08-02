import { usePagination } from "./usePaginationHook";
import { PaginatedTableProps } from "./types";

import { Pagination } from "./Pagination";
import { SpinnerLoader } from "./LoadingSpinner";
import { Table } from "./Table";
import { ErrorMessage } from "./ErrorMessage";

import style from "./rwd.module.scss";
const { wrapper } = style;

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
            <Table headers={headers} data={preparedData} />
            <Pagination 
                actualPageIndex={actualPageIndex}
                lastPageIndex={lastPageIndex}
                paginationRange={paginationRange}
                goToPage={goToPage}
            />
        </div>
    )
}