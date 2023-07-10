export type PaginationProps = ({
    actualPageIndex: number,
    lastPageIndex: number,
    paginationRange: (number|'DOTS')[],
    goToPage: (page: number) => void,
})