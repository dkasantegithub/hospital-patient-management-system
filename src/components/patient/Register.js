import React, { Component } from 'react'
import '../static/Register.css'

class Register extends Component {
    render() {
        return (
            <div className = 'contain container-fluid border mx-center col-4'>
                <form className='' >
                    <h3 className='cont text-center'>PATIENT REGISTRATION</h3>
                    <div className='form-group form-g'>
                        <label className='text'>Last Name*</label>
                        <input type='text' name='lname' className='form-control' placeholder='Enter last name' required/>
                    </div>

                    <div className='form-group form-g'>
                        <label className='text'>Other Names*</label>
                        <input type='text' name='oname' className='form-control' placeholder='Enter other names' required/>
                    </div>

                    <div className='form-group form-g'>
                        <label className='text'>Email*</label>
                        <input type='email' name='email' className='form-control' placeholder='asanteyaa@gmail.com' required/>
                    </div>

                    <div className='form-group form-g' >
                        <label className='text'>Gender*</label>
                        <select className='custom-select' required>
                            <option selected>Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className='form-group form-g'>
                        <label className='text'>Contact*</label>
                        <input type='tel' name='contact' className='form-control' maxLength='10' placeholder='054-565-5958' required/>
                    </div>

                    <div className='form-group form-g'>
                        <label className='text'>Date-Of-Birth*</label>
                        <input type='date' name='dbirth' className='form-control' required/>
                    </div>

                    <div className='form-group form-g'>
                        <label className='text'>Residential Address*</label>
                        <input type='text' name='raddress' className='form-control' placeholder='Santase-kumasi' required/>
                    </div>

                    <div className='button'>
                        <button type="submit" className="btn btn-primary ml-5 pl-5 pr-5">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Register
