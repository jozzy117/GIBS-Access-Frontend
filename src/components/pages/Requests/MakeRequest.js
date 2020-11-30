import React from 'react';
import axios from 'axios'
// import {Link} from 'react-router-dom';


class MakeRequest extends React.Component {
    state= {Loader: false, loginError: ''}
    makeRequest = async()=>{

        try{
            const response = await axios.get('http://test.chiplc.com/CoreRest/api/Security/ActiveDirectoryAuthentication', {
                params: {
                    displayName: 'Jonathan Ojakovo',
                    url: 'localhost:3000',
                    unit: 'ict'
                }
            })
            console.log(response)
            if(response.data.ResponseCode === "110"){
                this.setState({Loader:false})
            }else if(response.data.ResponseCode === "108"){
                this.setState({loginError: 'Could not send request', Loader:false})
            }

        } catch(error){
            console.log(error)
            this.setState({loginError: 'Could not send request', Loader:false})
        }
    }

    onSubmit = (event)=>{
        event.preventDefault();
        this.makeRequest();
        
    }


    render() {

        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-3">Make Request</h3></div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">Employee_No</label>
                                        <input className="form-control py-4" id="employeeNumber" name="employeeNumber" type="text" placeholder="Enter Employee Number" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Make Request</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default MakeRequest