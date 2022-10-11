import styles from "./button.module.scss";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary"|"outline_red"|"outline_blue"|"outline_deep_blue";
    size?: "small"|"normal";
    type?: "button"|"submit";
    children: React.ReactNode;

}
const Button =({variant,size, type, children, className, ...rest}:ButtonProps)=>{
    return(
        <button {...rest} className={`${styles[variant]} ${className }`}>
            {children}
        </button>
    )
}
export default Button;