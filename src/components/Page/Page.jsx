import React from 'react';
import style from './Page.module.scss'

export function Page({ children }) {
    return (
        <div className={style.page}>
            {children}
        </div>
    )
}