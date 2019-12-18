import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import adminImg from '../images/boss.png'
import '../static/Home.css'


class Home extends Component {
    
    onNavigate = () => {this.props.history.push('/register')}
    onNavigateLog = () => {this.props.history.push('/patient-daily-log')}
    onNavigateInfo = () => {this.props.history.push('/patient-information')}

    render() {
        return (
        <div>
            <div className ='jambotron bg-container'>
                <div className='bg-text'>Hospital Patient App</div>
            </div>

            {/**Link to patient registration */}
            <div className='mt-5 ml-5 mr-5 d-flex flex-row'>
                <div className ='container-fluid d-flex flex-column'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigate}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Patient Registration</div>
                </div>

                {/**Link to patient daily-log */}
                <div className ='container-fluid'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigateLog}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Patient Daily-Log</div>
                </div>

                {/**Link to patient Information */}
                <div className ='container-fluid'>
                    <img src={adminImg} className="rounded-circle border btn btn-info img-container"
                        alt="Admin" width='50%' height='60%' onClick={this.onNavigateInfo}/>
                    <div className='text'>Administrator</div>
                    <div className='text'>Patient Information</div>
                </div>


                {/**Link to patient... */}
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


