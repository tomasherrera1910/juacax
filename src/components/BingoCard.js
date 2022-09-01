import {useState} from 'react'
import getCard from '../utils/getBingoCard'
import styles from '../styles/bingo.module.css'
const {table, container} = styles
export function BingoCard(){
    //primer paramatro columnas a llenar, segundo filas, tercero columnas
    const [card, setCard] = useState(getCard(5, 3, 9)) 
    const newCard = () => {
        setCard(getCard(5, 3, 9))
    }
    return(
        <div className={container}>
            <table className={table}>
                <tbody>
                    {card.map((row, i) => (
                        <tr key={i}>
                            {row.map((number, j) => (
                                <td key={j}>{number}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={newCard}>
                Change card
            </button>
        </div>
    )
}