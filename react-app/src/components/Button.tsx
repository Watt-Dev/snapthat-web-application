import React from 'react';

interface ButtonProp {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className: string;
    buttonText: string;
}

const Button = (props: ButtonProp) => {
    return (
        <button type="submit" className={props.className} onClick={props.onClick}>
            {props.buttonText}
        </button>
    )
}
