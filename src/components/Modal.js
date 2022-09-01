import styles from '../styles/modal.module.css'
const {modalStyles, modalContent} = styles
export default function Modal({modal, modalHandler, formContent}){
    return(
        <dialog open={modal} onClose={modalHandler} className={modalStyles}>
            <div className={modalContent}>
            <p>
                {JSON.stringify(formContent, null, 2)}
            </p>
            <button onClick={modalHandler}>X</button>
            </div>
        </dialog>
    )
}