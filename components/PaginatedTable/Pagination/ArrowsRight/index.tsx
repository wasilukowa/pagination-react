import Image from "next/image";
import { ArrowRightProps } from "./types";

import style from "./rwd.module.scss";
const { wrapper, wrapperImage, wrapperButton } = style

export const ArrowsRight = ({
    actualPageIndex,
    lastPageIndex,
    goToPage,
    }: ArrowRightProps) => {

    const isLastPage = actualPageIndex === lastPageIndex;

    return (
        <div className={wrapper}>

            <button className={wrapperButton} disabled={isLastPage} onClick={() => goToPage(actualPageIndex + 1)}>                
                <Image
                    className={wrapperImage}
                    width={12}
                    height={12}
                    src="/pagination/arrow.png"
                    alt="Go to next page button"
                />
            </button>
            <button className={wrapperButton} disabled={isLastPage} onClick={() => goToPage(lastPageIndex)}>
                <Image
                    className={wrapperImage}
                    width={12}
                    height={12}
                    src="/pagination/double-arrow.png"
                    alt="Go to last page button"
                />
            </button>
        </div>
    )
};