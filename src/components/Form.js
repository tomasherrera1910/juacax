import { useState } from 'react'
import { Formik } from 'formik'
import Modal from './Modal'
import validate from '../utils/validationForm'
import styles from '../styles/form.module.css'
const {container, formStyle, requiredInput} = styles

export function Form(){
    const [data, setData] = useState({})
    const [modal,setModal] = useState(false)
    const modalHandler = () => setModal(!modal)
    const submitForm = (values) => {
        setData(values)
        modalHandler()                            
    }
    return(
        <div className={container}>
            <Formik
                initialValues={{name: '', email: '', password: '', textarea: ''}}
                validate= {values => validate(values)}
                onSubmit={values => submitForm(values)}
            >
                {
                    ({handleSubmit, handleChange, errors}) => (
                        <form className={formStyle} onSubmit={handleSubmit}>
                            <h2>Form</h2>
                            <label id="name" className={errors.name && requiredInput}>Name *
                                <input 
                                type="text" 
                                placeholder='Woody Allen'
                                name='name'
                                onChange={handleChange}
                                />
                            </label>
                            <label id="email" className={errors.email && requiredInput}>Email *
                                <input 
                                type="email" 
                                placeholder='contoso@domain.com'
                                name='email'
                                
                                onChange={handleChange}
                                />
                            </label>
                            <label id="password" className={errors.password && requiredInput}>Password *
                                <input 
                                type="password" 
                                placeholder='Provide a password'
                                name='password'
                                onChange={handleChange}
                                />
                            </label>
                            <label>Text Area
                                <textarea
                                name='textarea'
                                onChange={handleChange}
                                />
                            </label>    
                            <button type='submit'>Submit</button>
                        </form>          
                    )
                }
            </Formik>
            <Modal modal={modal} modalHandler={modalHandler} formContent={data}/>
        </div>
    )
}