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

export type UsePaginationReturnProps<T> = { 
    preparedData: T[],
    actualPageIndex: number, 
    lastPageIndex: number, 
    isBusy: boolean, 
    paginationRange: (number | 'DOTS')[],
    errorMessage: string,
    goToPage: (page: number) => void,
}

export type TUsePagination = <T>(data: T[], entriesOnPage: number, siblingCount: number) => UsePaginationReturnProps<T>
// export const usePagination = <T>(data: T[], entriesOnPage: any, siblingCount: any): UsePaginationReturnProps<T>  => {
// 
