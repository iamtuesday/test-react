import { CSSProperties, FC, ReactNode } from "react"

interface BoxProps {
    children: ReactNode
}

export const Box: FC<BoxProps & CSSProperties> = ({ children, ...styles }) => {
    return (
        <div style={styles}>{children}</div>
    )
}

