import { FC } from "react";

interface ComponentTestProps {
  name: string;
}

export const ComponentTest: FC<ComponentTestProps> = ({ name }) => {
  return <div>{name.toLowerCase()}</div>;
};
