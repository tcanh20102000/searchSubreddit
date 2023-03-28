import React from "react";

export default function FormV2(){
    const [form, setForm] = React.useState({
        email: "",
        password: "",
        confirm_pass: "",
        isJoined: false,
    });
    
    
    //console.log(form);
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setForm(oldValue =>({
            ...oldValue,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(form);
        
        let checkPass= false;
        checkPass = form.password === form.confirm_pass ? 
            true : false;

        console.log(checkPass ? 'Successfully log in': 'Password not match');
        
        (checkPass && form.isJoined && 
            console.log('Thanks for signing up the news'));
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='email'
                placeholder='Email'
                onChange={handleChange}
                name='email'
                value = {form.email}
            />
            <input 
                type='text'
                placeholder='Password'
                onChange={handleChange}
                name='password'
                value = {form.password}
            />
            <input 
                type='text'
                placeholder='Re-enter password'
                onChange={handleChange}
                name='confirm_pass'
                value={form.confirm_pass}
            />
            <input 
                type='checkbox' 
                id='isJoined'
                checked={form.isJoined}
                name='isJoined'
                onChange={handleChange}
            />
            <label htmlFor="isJoined">
                Join the news
            </label>
            
            
            <button>Send it</button> 
        </form>
    )
}