import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import adminImg from '../images/boss.png'
import '../static/Home.css'


class Home extends Component {

    onNavigate = () => {this.props.history.push('/register')}
    onNavigateLog = () => {this.props.history.push('/patient-daily-log')}

    render() {
        return (
        <div>
            <div className ='jambotron bg-container'>
                <div className='bg-text'>Hopital Patient App</div>
            </div>

            <div className='mt-5 ml-5 mr-5 d-flex flex-row'>
                <div className ='container-fluid d-flex flex-column'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigate}/>
                
                    <div className='text'>Administrator</div>
                    <div className='text'>Patient Registration</div>
                </div>

                <div className ='container-fluid'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigateLog}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Patient Daily-Log</div>
                </div>

                <div className ='container-fluid'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigate}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Register Patient</div>
                </div>

                <div className ='container-fluid'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigate}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Register Patient</div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Home)


