import { useCallback, useMemo, useState } from "react";

import { getArrayInRange, getLastIndex, getPieceOfData } from "../../utils"; 
import { TUsePagination } from "./types";

export const usePagination: TUsePagination = (data, entriesOnPage, siblingCount)  => {

    const [ actualPageIndex, setActualPageIndex] = useState(0);
    const [isBusy, setIsBusy] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const lastPageIndex = getLastIndex(data, entriesOnPage);

    const totalNumberOfEntries = data.length;

    const paginationRange = useMemo(() => {

        const currentPage = actualPageIndex + 1;
        const numberOfPages = Math.ceil(totalNumberOfEntries / entriesOnPage);
    
        const numberOfPinsInPagination = 1 + siblingCount + 1 + siblingCount + 1;
        if (numberOfPages < numberOfPinsInPagination) return getArrayInRange(1, numberOfPages);
    
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, numberOfPages);
    
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < numberOfPages - 2;
    
        const firstPageNumber = 1;
        const dots = 'DOTS' as const
    
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = getArrayInRange(1, leftItemCount);
      
            return [...leftRange, dots, numberOfPages];
        }
      
        if (shouldShowLeftDots && !shouldShowRightDots) {
          
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = getArrayInRange(numberOfPages - rightItemCount + 1, numberOfPages);
            return [firstPageNumber, dots, ...rightRange];
        }

        const middleRange = getArrayInRange(leftSiblingIndex, rightSiblingIndex);
        return [firstPageNumber, dots, ...middleRange, dots, numberOfPages];

    }, [actualPageIndex, entriesOnPage, siblingCount, totalNumberOfEntries])

    const options = {
        actualPageIndex, 
        entriesOnPage, 
        lastPageIndex
    }

    const preparedData = useMemo(() => {
        return getPieceOfData(data, options)
    },[actualPageIndex, lastPageIndex, entriesOnPage]);

    const goToPage = useCallback((pageIndex: number) => {
        setIsBusy(true);

        apiMockup(pageIndex)
            .then(() => {setIsBusy(false)})
            .catch((error) => {setErrorMessage("Something went wrong. Error: " + error)})
        
    }, [actualPageIndex])

    const apiMockup = (pageIndex: number) => {

        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
                if (pageIndex < 0) {
                    setActualPageIndex(0);
                }
                
                if (pageIndex > lastPageIndex) {
                    setActualPageIndex(lastPageIndex)
                };
                
                setActualPageIndex(pageIndex);
                resolve(true);
                // reject('test')
            }, 333)
        })
    }

    return { 
        actualPageIndex, 
        lastPageIndex,
        preparedData,
        isBusy, 
        paginationRange,
        errorMessage,
        goToPage
    }
}