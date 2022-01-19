import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import './UsersForm.styles.css'

const UsersForm = ({getUsers, userSelected, setUserSelected}) => {


    const { register, handleSubmit, reset } = useForm();
 
    useEffect(()=>{
        if(userSelected.first_name){
            reset(userSelected)
        }
    },[userSelected,reset])
    

    const submit = (data)=>{
        if(userSelected.first_name){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,data)
                 .then(()=>getUsers())
            setUserSelected({})
            reset(defaultValues)
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/',data)
                 .then(()=>getUsers())
            reset(defaultValues)
        }
    }


    
    const defaultValues = {
                            first_name:"",
                            last_name:"",
                            email:"",
                            birthday:"",
                            password:""

                          }
    
    return (
        <div className='user-form-container'>
            
            <form onSubmit={handleSubmit(submit)} className='form-container'>
                <h1>NEW USER</h1>
                <div>
                    <label htmlFor="first-name-input"><i className="fas fa-user"></i> </label>
                    <input type="text" 
                           id="first-name-input" 
                           placeholder="first name"
                           {...register("first_name")}
                           required
                    />
                    <label htmlFor="last-name-input"></label>
                    <input type="text"
                           id="last-name-input" 
                           placeholder='last name' 
                           {...register("last_name")}
                           required/>
                </div>

                <div>
                    <label htmlFor="email-input"><i className="fas fa-envelope"></i> </label>
                    <input type="email" 
                           id="email-input" 
                           placeholder='email' 
                           {...register("email")}
                           required/>
                </div>
                <div>
                    <label htmlFor="date-input"><i className="fas fa-birthday-cake"></i> </label>
                    <input type="date" 
                           id="date-input" 
                           {...register("birthday")}
                           required/>
                </div>
                <div>
                    <label htmlFor="password-input"><i className="fas fa-lock"></i> </label>
                    <input type="password" 
                           id="password-input" 
                           placeholder='password' 
                           {...register("password")}
                           required/>
                </div>
                <div className='buttons-container'>
                    <button>Upload</button>
                    <button onClick={()=>{setUserSelected({})
                                          reset(defaultValues)}}>Cancel</button>
                </div>
                
            </form>
        </div>
    );
};

export default UsersForm;