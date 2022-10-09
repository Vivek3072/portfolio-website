import {useState} from 'react'

const UseForm=validate=>{

    const [values,setValues]=useState({
        username : '',
        email :'',
        phone:'',
        message : '',
    });

    
    const [errors,setErrors]=useState({});
    
    
    const handleChange=e=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };
    
    const handleSubmit = e => {
        // console.log(values);
        setErrors(validate(values));
    
        fetch("https://getform.io/f/a2829b9d-2d95-4b75-9a80-9574e75f8384", {
          method: "post",
          body: JSON.stringify({
            username : values.username,
            email :values.email,
            phone:values.phone,
            message : values.message,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
    };
    
    return {handleChange,values,handleSubmit,errors};
};

export default UseForm;
