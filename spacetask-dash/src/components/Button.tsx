import {Button} from 'antd';
import {Action} from "../types/action.interface";

export enum ButtonType {
    primary = "primary",
    default = 'default',
    dashed = "dashed",
    text = "text",
    link = "ling"
}

interface ButtonProps {
    actionButton?: Action;
    type?: ButtonType | any;
    buttonColor?: string;
    buttonSize?: any;
}

const RGButton = (props: ButtonProps) => {
    const {actionButton, type = 'primary', buttonColor, buttonSize} = {...props};

    return (
        <Button size={buttonSize ? buttonSize: undefined } style={{background: buttonColor ? buttonColor: undefined, borderColor:buttonColor ? buttonColor: undefined, margin:2}} onClick={actionButton?.action} type={type}>{actionButton?.title ? actionButton.title : 'Im Button'}</Button>
    )
}

export default RGButton;
