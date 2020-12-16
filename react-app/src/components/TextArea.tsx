import React from 'react';
import PropTypes from 'prop-types';

// TODO: Create a text area component


interface TextAreaProp {
    value: string;
    className: string;
    placeholder: string;
    onChange: () => void;
    height: number;
    width: number;
}

const TextArea = ( props: TextAreaProp ) => {

    return (
        <div className="field">
            <form className="text-area">
                <textarea
                    className={props.className}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    style={{
                        resize: 'none',
                        width: props.width,
                        height: props.height
                    }}
                />
            </form>
        </div>
    )
}

export default TextArea;
