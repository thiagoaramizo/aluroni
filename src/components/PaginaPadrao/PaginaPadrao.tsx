import React from 'react'
import styles from './PaginaPadrao.module.scss'
import tema from 'styles/Tema.module.scss'
import { Outlet } from 'react-router-dom'


export default function PaginaPadrao( {children} : {children?: React.ReactNode }) {

    return (
        <>
            <header className={styles.header}>
                        <div className={styles.header__text}>
                            <h1>A casa da massa</h1>
                        </div>
            </header>
            <div className={tema.container}>
                <Outlet/>
                {children}
            </div>
        </>
    )
}