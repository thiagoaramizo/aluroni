import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import { useState } from 'react'
import classNames from 'classnames'

export default function Ordenador() {
    const [aberto, setAberto] = useState(false)

    return (
        <button className={styles.ordenador}
        onClick={ () => setAberto(true) }
        >
            <span>Ordenar por</span>
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto === true
            })}>
                {opcoes.map( (opcao) => (
                    <div className={styles.ordenador__option} key={opcao.value}>
                        {opcao.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}