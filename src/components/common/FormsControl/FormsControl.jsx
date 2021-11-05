import React from 'react';
import s from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.fatal : '')}>
            <div>
                 <textarea {...props} {...input} id="" cols="30" rows="5"></textarea>
            </div>
            
           {hasError && <span>{meta.error}</span>}
            
        </div>
    )
}