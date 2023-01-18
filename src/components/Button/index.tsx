import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
    render(): React.ReactNode {
        const { type = "button", onClick } = this.props;
        return (
            <button className={style.botao} type={type} onClick={onClick}>
                {this.props.texto}
            </button>
        );
    }
}
export default Button;