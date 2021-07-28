import React from 'react'
import Square from '../Square'
import './index.css'

const Board = (props) => {
    return (
        <>
        <div className='square-wrapper'>
            <Square value={props.value}/>
            <Square value={props.value}/>
            <Square value={props.value}/>
        </div>
        <div className='square-wrapper'>
            <Square value={props.value}/>
            <Square value={props.value}/>
            <Square value={props.value}/>
        </div>
        <div className='square-wrapper'>
            <Square value={props.value}/>
            <Square value={props.value}/>
            <Square value={props.value}/>
        </div>
        </>
    )
}

export default Board
