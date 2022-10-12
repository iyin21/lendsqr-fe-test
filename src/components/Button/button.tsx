import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'outline_red' | 'outline_blue' | 'outline_deep_blue';
    children: React.ReactNode;
}
const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={`${styles[variant]} ${className}`}>
            {children}
        </button>
    );
};
export default Button;
