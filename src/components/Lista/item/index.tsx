import React from 'react';
import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item({ tarefa, tempo, selecionado, id, completado, selecionaTarefa }: Props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionaTarefa({
            tarefa, tempo, selecionado, id, completado
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa concluida"></span>}
        </li>

    )
}

export default Item;