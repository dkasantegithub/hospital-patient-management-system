import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from '../homepage/Home'
import Register from '../patient/Register'
import Dailylog from '../patient/Dailylog'
import PatientInfo from '../patient/PatientInfo'
//import '../static/home.css'


class PageRoute extends Component {


    render() {
        return (
            <Router>
                <div> 
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <ul className='navbar-nav'>
                        <li className='nav-item'><NavLink to={'/'} className='nav-link' exact activeStyle={{color:'white'}}>Home</NavLink></li>
                        <li className='nav-item'><NavLink to={'/about'} className='nav-link' exact activeStyle={{color:'white'}}>About</NavLink></li>
                    </ul>
                    </nav>
                    <Switch>
                        <Route exact strict path='/' component={Home}/>
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/patient-daily-log' component={Dailylog}/>
                        <Route exact path='/patient-information' component={PatientInfo}/>
                        {/*<Route exact path='/' component={About}/>*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default PageRoute
