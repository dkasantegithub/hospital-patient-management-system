import React, { Component } from 'react'
import '../static/Dailylog.css'

class Dailylog extends Component {
    render() {
        return (
            <div className='pcontain container-fluid col-10 mx-center border'>
                <form>
                    <h3 className='pcont text-center mt-3 mb-5'>PATIENT DAILY-LOG</h3>
                    <div className='form-group row'>
                        <label className=' col-1.5 col-form-label pl-3 pr-2'>Date-Admitted*</label>
                        <div className='col-2.5'>
                            <input type='date' className='form-control' required/>
                        </div>

                        <label className=' col-1.5 col-form-label ml-4 pr-2'>Date-Discharged*</label>
                        <div className='col-2.5'>
                            <input type='date' className='form-control' required/>
                        </div>

                        <label className='col-1.5 col-form-label ml-4'>Doctor-Assigned*</label>
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

                    <div class="form-group">
                        <label >Ailment*</label>
                        <textarea class="form-control" rows="5" ></textarea>
                    </div>

                    <div class="form-group">
                        <label>Prescription*</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>

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
