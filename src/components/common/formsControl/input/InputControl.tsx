import React from 'react';
import cl from '../textarea/TextareaControls.module.css'

export const InputControl = ({input, meta, ...props} :any) => {

    const showError = meta.touched && meta.error
    return (
        <div className={cl.formControl + ' ' + (showError? cl.error: '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    );
};