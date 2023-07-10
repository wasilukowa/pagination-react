import style from "./rwd.module.scss";
const { wrapper, ldsDefault } = style;

export const SpinnerLoader = () => {
    return (
        <div className={wrapper}>
            <div className={ldsDefault}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}