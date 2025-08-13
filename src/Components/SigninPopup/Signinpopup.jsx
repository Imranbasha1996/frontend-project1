import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'
const Signinpopup = ({ setShowlogin }) => {
    let { url, token, setToken } = useContext(StoreContext);




    let [current, setCurrent] = useState('SignUp')

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    let onlogin = async (e) => {
        e.preventDefault()
        // console.log('data')
        let newurl = url;
        if (current === 'Login') {
            newurl += "/api/login"
        }
        else {
            newurl += "/api/register"
        } const resp = await axios.post(newurl, data);
        console.log(resp);
        if (resp.data.success) {
            setToken(resp.data.token);
            localStorage.setItem('token', resp.data.token);
            setShowlogin(false)
        }

        else {
            alert(resp.data.message)
        }
    }
    return (
        <div className='login-popup'>
            <form onSubmit={onlogin} action="" className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{current}</h2>

                    <div className='login-popup-inputs'>

                        <img className='crossicon' onClick={() => setShowlogin(false)} src='' alt="" />

                        {current === 'SignUp' ? <input type="text" name='name' placeholder='Enter your name' onChange={onChangeHandler} value={data.name} required /> : <></>}

                        <br />
                        <br />
                        <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Enter your email' id="email" required />
                        <br />
                        <br />
                        <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Enter your password' id='password' required />
                        <br />
                        <br />
                        <button type='submit'>{current === 'SignUp' ? 'Register' : 'Login'}</button>
                        {current === 'Login' ? <p>Create a new account?
                            <span onClick={() => setCurrent('Sign Up')}>click here</span></p> :
                            <p>Already have an account?
                                <span onClick={() => setCurrent('Login')}>Login here</span></p>
                        }
                    </div>
                </div>


            </form>

        </div>
    )
}

export default Signinpopup
