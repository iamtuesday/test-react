import { FC, ReactNode } from "react";

interface Buttonprops {
  variant?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<Buttonprops> = ({ children, variant, onClick }) => {
  return <button className={`btn btn-${variant}`} onClick={onClick}>{children}</button>;
};
