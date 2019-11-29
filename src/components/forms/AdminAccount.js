import React, { Component } from 'react'
import LoginImg from '../images/laptopIcon0.svg'
import '../static/styles.scss'

const initialState = {
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
}

const initialErrorState = {
    emailError: '',
    generalError: '',
    usernameError: '',
    passwordError: '',
    confirmpasswordError: '',
}

class AdminAccount extends Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    //username function
    usernameOnChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    //email function
    emailOnChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    //password function
    passwordOnChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    //confirm password function
    confirmpasswordOnChange = event => {
        this.setState({
            confirmpassword: event.target.value
        })
    }
    //form validation
    formValidation = () => {
        const {username, email, password, confirmpassword} = this.state
        //let emailError = ''
        let generalError = ''
        let usernameError = ''
        let passwordError = ''
        let confirmpasswordError = ''

        if(!username || !email || !password || !confirmpassword){
            generalError = 'field cannot be empty'
        }
        if(usernameError || passwordError || generalError) {
            this.setState({ generalError})
            return false
        }
        if ( username.length < 5) {
            usernameError = 'username must be atleast 5 characters'
        }
        if ( password.length < 8) {
            passwordError = 'password must be atleast 8 characters'
        }
        if (password !== confirmpassword) {
            confirmpasswordError = 'passwords must match'
        }
        if(usernameError || passwordError || confirmpasswordError || generalError) {
            this.setState({usernameError, passwordError, confirmpasswordError, generalError})
            return false
        }
            return true
    }

    //submit function
    handleSubmit = event => {
        this.setState(initialErrorState)
        event.preventDefault()
        const isValid = this.formValidation()
        
        if(isValid) {
        alert(`Hello ${this.state.username}. Your Email is ${this.state.email} **${this.state.password}`)
        //clear form
        this.setState(initialState)
        this.setState(initialErrorState)
        }
    }
    
    render() {
         const {username, email, password, confirmpassword, usernameError, 
        emailError, passwordError, confirmpasswordError, generalError} = this.state

        return (
            <div className='base-container'>
                <div className='header'>Create Account</div>
                <div className='content'>
                    <div className='image'>
                        <img src={LoginImg} alt='login-img'></img>
                    </div>
                <form className='form' onSubmit={this.handleSubmit}>
                    
                    {/*Username Field */}
                    <div style={{fontSize: 12, color:'red' }}>{generalError} </div>
                    <div className='form-group'>
                        <input 
                        type='text' 
                        name='username'
                        placeholder='username'
                        value={username} 
                        onChange={this.usernameOnChange} 
                        />
                        <div style={{fontSize: 12, color:'red' }}>{usernameError} </div>
                    </div>

                    {/*Email Field */}
                    <div className='form-group'>
                        <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value={email}
                        onChange={this.emailOnChange}
                        />
                        <div style={{fontSize: 12, color:'red' }}>{emailError} </div>
                    </div>

                    {/*Password Field */}
                    <div className='form-group'>
                        <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={this.passwordOnChange}
                        />
                        <div style={{fontSize: 12, color:'red' }}>{passwordError} </div>
                    </div>

                    {/*Confirm Password Field */}
                    <div className='form-group'>
                        <input 
                        type='password'
                        name='confirmpassword'
                        placeholder='confirm password'
                        value={confirmpassword}
                        onChange={this.confirmpasswordOnChange}
                        />
                        <div style={{fontSize: 12, color:'red' }}>{confirmpasswordError} </div>
                    </div>

                    {/*Submit Field */}
                    <div className='footer' >
                        <button className='btn' type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default AdminAccount
