import React, { Component } from 'react'
import '../static/PatientInfo.css'

class PatientInfo extends Component {

     /** initial states of input-fields */
    constructor(props) {
        super(props)
        this.state = {
                disable: true,
                lastname:'',    othername:'',  email:'',    gender:'',
                contact:'',     dbirth:'',     haddress:'', cin:'',
                cout:'',        doctor:'',     ward:'',     wnumber:'',
                ailment:'',     prescription:'',            payment:'',
                }
    }

    /** Handling disabled state of patient fields*/
    handleClick = () => {
        this.setState({disable:!this.state.disable})
    }
    


    render() {
        return (
            <div  className='header row'>
                <div className='col-9 border'>
                    <form className='form-group'>

                        {/**Patient Info Label */}
                        <div> 
                            <h3 className='text-left mt-3 mb-5'>Patient Personal Info</h3> 
                        </div>

                        {/**Patient Id */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Patient ID*</label>
                            <input type='text' name='pid' value='0001' className='form-control col-3' readOnly/>
                        </div>

                        {/**Last Name */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Last Name*</label>
                            <input type='text' name='lname' className='form-control col-3' placeholder='last name'
                                   disabled={this.state.disable} value={this.state.lastname}   required/>
                        </div>

                        {/**Other Name */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Other Names*</label>
                            <input type='text' name='oname' className='form-control col-3' placeholder='other names' 
                                   disabled={this.state.disable} value={this.state.othername} required/>
                        </div>

                        {/**Email */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Email*</label>
                            <input type='email' name='email' className='form-control col-3' placeholder='asanteyaa@gmail.com' 
                                   disabled={this.state.disable} value={this.state.email} required/>
                        </div>

                        {/**Gender */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Gender*</label>
                            <select className='custom-select col-3' 
                                    disabled={this.state.disable} value={this.state.gender} required>
                                <option selected>gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>

                        {/**Contact */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Contact*</label>
                            <input type='tel' name='contact' className='form-control col-3' maxLength='10' placeholder='054-565-5958' 
                            disabled={this.state.disable} value={this.state.contact} required/>
                        </div>

                        {/**Date-Of-Birth */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>Date-Of-Birth*</label>
                            <input type='date' name='dbirth' className='form-control col-3' 
                            disabled={this.state.disable} value={this.state.dbirth} required/>
                        </div>

                        {/**Residential-Address */}
                        <div className='form-group row'>
                            <label className='col-form-label col-2'>House-Address*</label>
                            <input type='text' name='raddress' className='form-control col-3' placeholder='Santase-kumasi' 
                                    disabled={this.state.disable} value={this.state.haddress} required/>
                        </div>

                        {/**Update button */}
                        <div className='form-inline row mt-5'>
                            <button type="submit" className="btn btn-primary ml-3 mr-5 pl-2 pr-2 col-2"
                                    onClick={this.handleClick}>Update</button>
                        

                        {/**Save button */}
                            <button type="submit" className="btn btn-primary ml-3 pl-2 pr-2 col-2 ">Save</button>
                        </div>
                    </form>


                    {/**Patient Daily-Log */}
                    <div className='pcontain container-fluid mx-center'>
                        <form>
                            <h3 className='text-left mt-3 mb-5'>Patient Daily-Log</h3>
                            <div className='form-group'>
                                {/*Check-In */}
                                <div className='form-group row'>
                                    <label className='col-form-label  col-2'>Check-In*</label>
                                    <input type='date' className='form-control col-3' 
                                        disabled={this.state.disable} value={this.state.cin} required/>
                                </div>

                                {/*Check-Out */}
                                <div className='form-group row'>
                                    <label className='col-form-label  col-2'>Check-Out*</label>
                                    <input type='date' className='form-control col-3' 
                                        disabled={this.state.disable} value={this.state.cout} required/>
                                </div>

                                {/*Doctor */}
                                <div className='form-group row'>
                                    <label className='col-2 col-form-label'>Assigned-Dr.*</label>
                                    <select className='custom-select col-3' 
                                        disabled={this.state.disable} value={this.state.doctor} required>
                                        <option selected>Doctor</option>
                                        <option value='dct1'>Dr. Astu Michael</option>
                                        <option value='dct2'>Dr. Odame Elizabeth</option>
                                        <option value='dct3'>Dr. Asante Kojo David</option>
                                        <option value='dct4'>Dr. Yeboah Papa Ofori</option>
                                        <option value='dct3'>Dr. Azigizag Mustapha Illiasu</option>
                                    </select>
                                </div>
                            </div>

                            {/*Ward*/}
                            <div className='form-group row'>
                                <label className='col-2 col-form-label'>Ward*</label>
                                <select className='custom-select col-3'
                                    disabled={this.state.disable} value={this.state.ward} required>
                                    <option value='napp' selected>Not-applicable</option>
                                    <option value='cward'>Childern's ward</option>
                                    <option value='mward'>Male ward</option>
                                    <option value='fward'>Female ward</option>
                                </select>
                            </div>

                                {/*Ward Room No. */}
                            <div className='form-group row'>
                                <label className='col-2 col-form-label'>Room No.*</label>
                                    <select className='custom-select col-3' 
                                        disabled={this.state.disable} value={this.state.wnumber} required>
                                        <option value='n1' selected>1-One</option>
                                        <option value='n2'>2-Two</option>
                                        <option value='n3'>3-Three</option>
                                        <option value='n4'>4-Four</option>
                                        <option value='n5'>5-Five</option>
                                        <option value='n6'>6-Six</option>
                                        <option value='n7'>7-Seven</option>
                                        <option value='n8'>8-Eight</option>
                                        <option value='n9'>9-Nine</option>
                                        <option value='n10'>10-Ten</option>
                                    </select>
                            </div>

                            {/*Ailment */}
                            <div class="form-group">
                                <label>Ailment*</label>
                                <textarea class="form-control col-5" rows="2" 
                                    disabled={this.state.disable} value={this.state.ailment} required/>
                            </div>

                            {/*Prescription */}
                            <div class="form-group">
                                <label>Prescription*</label>
                                <textarea class="form-control col-5" rows="2"
                                    disabled={this.state.disable} value={this.state.prescription} required/>
                            </div>
                            
                            {/*Payment made by patient */}
                            <div className='form-group row'>
                                <label className='col-2'>Payment*</label>
                                        <select className='custom-select col-1'>
                                            <option value='ghc' selected>[ghc]</option>
                                            <option value='dollar'>[$]</option>
                                            <option value='euro'>[£]</option>
                                        </select>
                                        <input type='number' className='form-control col-2' min='0' placeholder='Amount'
                                            disabled={this.state.disable} value={this.state.payment} required/>
                            </div>
                                    {/**Update button */}
                                    <div className='form-inline row mt-5'>
                                        <button type="submit" className="btn btn-primary  ml-3 mr-5 pl-2 pr-2 col-2 "
                                        onClick={this.handleClick}>Update</button>

                                    {/**Save button */}
                                        <button type="submit" className="btn btn-primary ml-3 pl-2 pr-2 col-2  ">Save</button>
                                    </div>
                        </form>
                    </div>
                </div>


                <div className='col-3 border'>
                    {/**Search button */}
                    <div className='input-group mb-4 mt-4'>
                        <input type='text' className='form-control' placeholder='search for patient'/>
                        <div className='input-group-append'>
                            <button type='submit' className='btn btn-success'>search</button>
                        </div>
                    </div>

                    {/**Label */}
                    <div className='mt-3'>
                        <label className='float-left col-3'>ID</label>
                        <label className='float-left col-9'>Name</label>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PatientInfo
