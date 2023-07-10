import { TPerson } from "../components/PaginatedTable/types";

import { TOptions } from "./types";


const isValidPageNumber = (pageNumber: number): boolean => {
    const isPositiveNumber = pageNumber >= 0;
    const isInteger = Number.isInteger(pageNumber);

    return (isPositiveNumber || isInteger);
}

const isValidNumberOfEntries = (numberOfEntries: number): boolean => {
    const isPositiveNumber = numberOfEntries > 0;
    const isInteger = Number.isInteger(numberOfEntries);

    return (isPositiveNumber || isInteger);
}

export const getLastIndex = (dataEntries: TPerson[], entriesOnPage: number) => {
    
    const isEntriesNumberValid = isValidNumberOfEntries(entriesOnPage);
    const isDataEmpty = dataEntries.length === 0;

    if (!isEntriesNumberValid || isDataEmpty) return 0;
    
    const dataLength = dataEntries.length;
    const noOfPages = Math.ceil(dataLength / entriesOnPage);

    const lastIndex = noOfPages - 1;
    return lastIndex;
}

export const getPieceOfData = (dataEntries: TPerson[], options: TOptions) => {

    const { actualPageIndex, lastPageIndex, entriesOnPage } = options;

    const arePageNumbersValid = isValidPageNumber(actualPageIndex) && isValidPageNumber(lastPageIndex)
    const areEntriesNumberValid = isValidNumberOfEntries(entriesOnPage)

    if (!arePageNumbersValid || !areEntriesNumberValid) return [];
    const indexToStart = (actualPageIndex * entriesOnPage);

    const isLastPageShown = actualPageIndex === lastPageIndex;
    if (isLastPageShown) return dataEntries.slice(indexToStart);

    return dataEntries.slice(indexToStart, indexToStart + entriesOnPage);
};

export const getArrayInRange = (start: number, end: number) => {

    if (start > end) return [];
    
    const length = end - start + 1;
    return Array.from({ length }, (val, index) => index + start);
}




