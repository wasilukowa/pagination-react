export type PaginationPinsProps = {
    paginationRange: (number | 'DOTS')[],
    actualPageIndex: number,
    goToPage: (page: number) => void
}