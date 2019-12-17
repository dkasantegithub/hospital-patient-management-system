import React, { Component } from 'react'
//import './App.scss';
// import Login from './components/forms/Login';
// import AdminAccount from './components/forms/AdminAccount'
import PageRoute from './components/homepage/PageRoute'
// import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isLoginActive: true,
    }
  }
  
  onChangeState = () => {
    const {isLoginActive} = this.state
    if(isLoginActive){
      this.rightSide.classList.remove('right')
      this.rightSide.classList.add('left')
    }
    else{
      this.rightSide.classList.remove('left')
      this.rightSide.classList.add('right')
    }

    this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive}))
  }



  render() {
    // const { isLoginActive } = this.state
    // const current = isLoginActive ? 'Register' : 'Login'
    //const currentActive = isLoginActive ? 'Login' : 'Register'
    return (
      <div className='App'>
        {/*<div className='login'>
          <div className='container'>
            {isLoginActive && <Login containerRef={(ref) => (this.current = ref)} />}
            {!isLoginActive && <AdminAccount containerRef={(ref) => (this.current = ref)} />}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.onChangeState}/>
    </div> */}
        <PageRoute />
      </div>
    )
  }
}

// const RightSide = props => {
//   return (<div className='right-side' ref={props.containerRef} onClick={props.onClick} >
//           <div className='inner-container'>
//             <div className='text'>{props.current}</div>
//           </div>
//   </div> )
// }

export default App
