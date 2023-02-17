import { ButtonHTMLAttributes, FC, ReactNode, CSSProperties } from "react";

interface ButtosProps {
    children: ReactNode;
    styles: CSSProperties
}

export const Button: FC<
    ButtosProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, styles, ...rest }) => {
    return <button style={styles} {...rest}>{children}</button>;
};
