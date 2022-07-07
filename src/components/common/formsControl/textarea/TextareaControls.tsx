import React from 'react';
import cl from './TextareaControls.module.css'

export const TextareaControl = ({input, meta, ...props} :any) => {

    const showError = meta.touched && meta.error
    return (
        <div className={cl.formControl + ' ' + (showError? cl.error: '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    );
};
