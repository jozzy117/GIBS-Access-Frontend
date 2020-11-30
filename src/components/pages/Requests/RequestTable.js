import React from 'react';
import {Link} from 'react-router-dom';
import awaitGif from '../../../assets/img/ball.gif';

const RequestTable = (props) => {

    const userRole = 0;

    if(userRole === 0){

        return(
            <div className="card mb-4">
                <div className="card-header">
                    <i className="fas fa-table mr-1"></i>
                    Pending Requests
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead style={{textAlign: 'center'}}>
                                <tr>
                                    <th>Status</th>
                                    <th>Requested By</th>
                                    <th>Details</th>
                                    <th>Date/Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                <tr>
                                    <td><img src={awaitGif} style={{height:"25px"}} alt=""/>Awaiting approval</td>
                                    <td>Jonathan Ojakovo</td>
                                    <td><Link to="/teams-request/req-details" rel="facebox" ><li className="fas fa-eye"></li></Link></td>
                                    <td>17/11/2020 10:13am</td>
                                    <td>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <div className="form-group"><Link className="btn btn-success btn-block" to="">Approve</Link></div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"><Link className="btn btn-danger btn-block" to="">Reject</Link></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    return (null)

    
}

export default RequestTable