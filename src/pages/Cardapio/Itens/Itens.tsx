import React, { useEffect, useState } from "react"
import { isTemplateExpression } from "typescript"
import Item from "./Item/Item"
import cardapio from './itens.json'
import styles from './Itens.module.scss'

interface props {
    busca: string
    filtro: number | null
    ordenador: string
}

export default function Itens( props: props ){
    const {busca, filtro, ordenador} = props
    const [lista, setLista] = useState(cardapio)

    function testaBusca( title: string ){
        const regex = new RegExp(busca, 'i');
        return regex.test(title)
    }

    function testaFiltro( id:number){
        if( filtro !== null ) return filtro === id
        return true
    }

    function ordenar( novalista: typeof cardapio){
        switch(ordenador) {
            case 'porcao':
                return novalista.sort((a, b) => a.size > b.size ? 1: -1);
            case 'qtdpessoas':
                return novalista.sort((a, b) => a.serving >b.serving ? 1 : -1);
            case 'preco':
                return novalista.sort( (a,b) => a.price > b.price ? 1 : -1);
            default:
                return novalista;
        }
    }
    
    useEffect(() => {
        const novaLista = cardapio.filter( (item) => testaBusca(item.title) && testaFiltro( item.category.id ))
        setLista(ordenar(novaLista))
    }, [busca, filtro, ordenador])

    
    return (
        <div className={styles.itens}>
            {lista.map( item => (
                <Item key={item.id} 
                    {...item}
                />
            ))}
        </div>
    )
}