import React from "react";

export default function Form(){
    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isRemembered: false,
        employment: "",
        favColor: "",
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
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                name='firstName'
                value = {form.firstName}
            />
            <input 
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value = {form.lastName}
            />
            <input 
                type='email'
                placeholder='Email'
                onChange={handleChange}
                name='email'
                value={form.email}
            />
            <textarea 
                value={form.comments}
                placeholder= 'Comment'
                onChange={handleChange}
                name='comments'
            />
            <input 
                type='checkbox' 
                id='isRemembered'
                checked={form.isRemembered}
                name='isRemembered'
                onChange={handleChange}
            />
            <label htmlFor="isRemembered">
                Remember form
            </label>
            <fieldset>
                <legend>Current employment state</legend>

                <input
                    type="radio"
                    id="unemployment"
                    name="employment"
                    value="unemployment"
                    onChange={handleChange}
                    checked={form.employment === "unemployment"}
                />
                <label htmlFor="unemployment">
                    Unemployment
                </label>

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={form.employment === "part-time"}
                />
                <label htmlFor="part-time">
                    Part-time
                </label>

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={form.employment === "full-time"}
                />
                <label htmlFor="full-time">
                    Full-time
                </label>

            </fieldset>
            <label htmlFor="favColor">
                Your favorite color
            </label>
            <select 
                id="favColor"
                value={form.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">--Choose--</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
            </select>

            <button>Send it</button> 
        </form>
    )
}