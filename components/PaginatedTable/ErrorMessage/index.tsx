import style from "./rwd.module.scss";
const { wrapper } = style;

export const ErrorMessage = ({message}) => {
    return (
        <div className={wrapper}>{message}</div>
    )
}