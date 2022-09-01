import { Link } from "react-router-dom";
import styles from '../styles/navbar.module.css'
const {navbar} = styles
export default function Navbar(){
    return(
        <header className={navbar}>
            <div>
                <p><span>juacax</span>Exercises</p>
                <nav>
                    <Link to='/'>FORM</Link>
                    <Link to='/card'>BINGO CARD</Link>
                </nav>
            </div>
        </header>

    )
}