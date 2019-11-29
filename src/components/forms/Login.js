import React, { Component } from 'react'
import LoginImg from '../images/laptopIcon0.svg'
import '../static/styles.scss'

const initialState = {
    username: '',
    password: '',
    loginError: '',
}

class Login extends Component {
    constructor(props){
        super(props)
        this.state = initialState
    }
    //username function
    usernameOnChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    //password function
    passwordOnChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    //validate function
    formValidation = () => {
        let loginError = ''

        if(!this.state.username || !this.state.password) {
            loginError = 'fill-in username/password'
            this.setState({loginError})
            return false
        }
        else if(this.state.username.length < 5 || this.state.password.length < 8 ){
            loginError = 'username/password is too short'
            this.setState({loginError})
            return false
        }   
        return true

    }
    //submit function
    handleSubmit = event => {
        event.preventDefault()
        const isValid = this.formValidation()

        //display if valid
        if(isValid) {
            alert(`Welcome ${this.state.username} **${this.state.password}`)
            //clear form
            this.setState(initialState)
        }
    }
    

    render() {

        const {username, password, loginError} = this.state

        return (
            <div className='base-container'>
                <div className='header'><h3>Login</h3></div>
                <div className='content'>
                    <div className='image'>
                        <img src={LoginImg}></img>
                    </div>
                    
                    <form className='form' onSubmit={this.handleSubmit}>
                        {/*Username Field */}
                        <div  className='form-group'>
                            {/*<label>Username </label>*/}
                            <div style={{fontSize: 12, color: 'red'}}>{loginError}</div>
                            <input 
                            type='text'
                            name='username'
                            placeholder='username'
                            value={username}
                            onChange={this.usernameOnChange}
                            />
                        </div>

                        {/*Password Field */}
                        <div  className='form-group'>
                            {/*<label>Password </label> */}
                            <input 
                            type='password'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={this.passwordOnChange}
                            />
                        </div>

                        {/*Login Field */}
                        <div className='footer'>
                            <button className='btn' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
        </div>
        )
    }
}

export default Login
