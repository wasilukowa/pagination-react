import style from "./rwd.module.scss";
const { wrapper, wrapperImage, left, wrapperButton } = style

import Image from "next/image";

import { ArrowLeftProps } from "./types";

export const ArrowsLeft = ({
    actualPageIndex,
    goToPage,
    }: ArrowLeftProps) => {

    const isFirstPage = actualPageIndex === 0;

    return (
        <div className={wrapper}>

            <button className={wrapperButton} disabled={isFirstPage} onClick={() => goToPage(0)}>
                <Image
                    className={wrapperImage}
                    width={12}
                    height={12}
                    src="/pagination/double-arrow.png"
                    alt="Go to first page button"
                />
            </button>
            <button className={wrapperButton} disabled={isFirstPage} onClick={() => goToPage(actualPageIndex - 1)}>             
                <Image
                    className={`${wrapperImage} ${left}`}
                    width={12}
                    height={12}
                    src="/pagination/arrow.png"
                    alt="Go to previous page button"
                />
            </button>
        </div>
    )
};