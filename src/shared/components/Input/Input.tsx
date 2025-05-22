import { Input as AntdInput, InputProps } from "antd";
import style from "./style.module.scss";

type TProps = InputProps & {
  placeholder: string;
}
export const Input = (props: TProps) => {
  const { className, ...rest } = props;
  return <AntdInput
    className={`${className} ${style.input}`}
    {...rest}
  />
}
