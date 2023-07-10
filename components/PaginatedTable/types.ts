export type TPerson = {
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    email: string
}

export type PaginatedTableProps = {
    entriesOnPage: number,
    siblingCount: number,
    headers: string[],
    data: TPerson[]
}

export type usePaginationReturnProps = { 
    actualPageIndex: number, 
    lastPageIndex: number, 
    isBusy: boolean, 
    paginationRange: (number | 'DOTS')[],
    preparedData: TPerson[],
    errorMessage: string,
    goToPage: (page: number) => void,
}

export type TUsePagination = (data: TPerson[], entriesOnPage: number, siblingCount: number) => usePaginationReturnProps
