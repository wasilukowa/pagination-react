import { PaginationPinsProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperPageNumber, wrapperPageNumberActive } = style;

export const PaginationPins = ({paginationRange, actualPageIndex, goToPage}: PaginationPinsProps) => {
    
    return (
        <div className={wrapper}>
            {
                paginationRange.map((element, index) => {
                    if (actualPageIndex + 1 === element) {
                        return <span 
                            key={`paginationPin_${index}`}
                            className={`${wrapperPageNumber} ${wrapperPageNumberActive}`} 
                            onClick={() => goToPage(element - 1)}>{element}</span>};
                    if (element === 'DOTS') return <span key={`paginationPin_${index}`} className={wrapperPageNumber}>...</span>
                    return <span key={`paginationPin_${index}`} className={wrapperPageNumber} onClick={() => goToPage(element -1)}>{element}</span>
                })
            }
        </div>
    )
}