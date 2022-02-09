import { useState, useEffect } from "react";
// eslint-disable-next-line
const useForm = (validate) => { 
    const initialValues = {email: ''}
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({}); 
    const [message, setMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            setMessage(true);
            setTimeout(() => {
                setMessage(false);
            }, 2000);
        }
    }, [errors]);

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }


    const handleChange = event => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}))
    }

    return {
        handleChange,
        handleSubmit,
        values,
        message,
        errors
    }
}

export default useForm;