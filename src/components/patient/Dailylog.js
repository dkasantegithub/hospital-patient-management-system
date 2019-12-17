import React, { Component } from 'react'
import '../static/Dailylog.css'

class Dailylog extends Component {
    render() {
        return (
            <div className='pcontain container-fluid col-10 mx-center border'>
                <form>
                    <h3 className='pcont text-center mt-3 mb-5'>PATIENT DAILY-LOG</h3>
                    <div className='form-group row'>
                        {/**Check-In Date */}
                        <label className=' col-1.5 col-form-label pl-3 pr-2'>Check-In*</label>
                        <div className='col-2.5'>
                            <input type='date' className='form-control' required/>
                        </div>

                        {/**Check-Out Date */}
                        <label className=' col-1.5 col-form-label ml-4 pr-2'>Check-Out*</label>
                        <div className='col-2.5'>
                            <input type='date' className='form-control' required/>
                        </div>

                        {/**Assigned Doctor */}
                        <label className='col-1.5 col-form-label ml-4'>Assigned-Dr*</label>
                        <div className='col-3'>
                        <select className='custom-select' required>
                            <option selected>Doctor</option>
                            <option value='dct1'>Dr. Astu Michael</option>
                            <option value='dct2'>Dr. Odame Elizabeth</option>
                            <option value='dct3'>Dr. Asante Kojo David</option>
                            <option value='dct4'>Dr. Yeboah Papa Ofori</option>
                            <option value='dct3'>Dr. Azigizag Mustapha Illiasu</option>
                        </select>
                    </div>
                    </div>

                    {/**Ailment */}
                    <div class="form-group">
                        <label >Ailment*</label>
                        <textarea class="form-control" rows="5" ></textarea>
                    </div>

                    {/**Prescription */}
                    <div class="form-group">
                        <label>Prescription*</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>

                    <div className='form-group row mt-4'>
                        {/*Ward Room No. */}
                        <label className='col-1.5 col-form-label ml-3 mr-3 pr-1'>Ward*</label>
                        <div className='col-2 ml-5'>
                        <select className='custom-select' required>
                            <option value='napp' selected>Not-applicable</option>
                            <option value='cward'>Childern's ward</option>
                            <option value='mward'>Male ward</option>
                            <option value='fward'>Female ward</option>
                        </select>
                        </div>

                        {/*Ward Room No. */}
                        <label className='col-1.5 col-form-label ml-4 pl-3'>Room No.*</label>
                        <div className='col-1'>
                        <select className='custom-select' required>
                            <option value='n1' selected>1</option>
                            <option value='n2'>2</option>
                            <option value='n3'>3</option>
                            <option value='n4'>4</option>
                            <option value='n5'>5</option>
                            <option value='n6'>6</option>
                            <option value='n7'>7</option>
                            <option value='n8'>8</option>
                            <option value='n9'>9</option>
                            <option value='n10'>10</option>
                        </select>
                        </div>
                    </div>
                    
                    {/*Payment made by patient */}
                    <div className='control-fluid form-inline mt-4'>
                        <label className='input-group pr-3'>Payment Made*</label>
                            <div class="input-group-prepend">
                                <select className='custom-select'>
                                    <option value='ghc' selected>Ghana Cedis [ghc]</option>
                                    <option value='dollar'>Dollars [$]</option>
                                    <option value='euro'>Euro[£]</option>
                                </select>
                            </div>
                                <input type='number' className='form-control' min='0' placeholder='Amount' required/>
                                
                                {/**Submit button */}
                        <div className='form-inline pbutton'>
                            <button type="submit" className="btn btn-primary ml-5 pl-5 pr-5 ">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Dailylog
