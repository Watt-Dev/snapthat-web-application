import React from 'react';
import PropTypes from 'prop-types';

// TODO: Create a text area component

const TextArea = ( props ) => {

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

TextArea.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number
}


export default TextArea;