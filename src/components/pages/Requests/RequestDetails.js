import React from 'react';
import {Link} from 'react-router-dom';


class RequestDetails extends React.Component {


    render() {

        return(
            <div className="row justify-content-center">	

                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-2">Request Details</h3></div>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <ul>
                                    <li>
                                        <span>Jonathan</span><span>First Name</span>
                                    </li>
                                    <li>
                                        <span>Ojakovo</span><span>Last Name</span>
                                    </li>
                                    
                                    <li>
                                        <span>ICT</span><span>Unit</span>
                                    </li>
                                    <li>
                                        <span>chi0220</span><span>Employee_ID</span>
                                    </li>
                                    {/* <li>
                                        <span>Stage</span><span>Completed</span>
                                    </li> */}
                                </ul> 
                            </div>
                            <div className="form-row">
                                <p><i><b>Tick all that applies for the User</b></i></p>
                            </div>
                            
                            <div className="form-row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="underwritingCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="underwritingCheck">Underwriting</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="claimsCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="claimsCheck">Claims</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="reinsuranceCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="reinsuranceCheck">Reinsurance</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="adminCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="adminCheck">Admin/Maint</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="requisitionCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="requisitionCheck">Requisition</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="reportsCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="reportsCheck">Reports</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="marketingCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="marketingCheck">Marketing</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="accountsCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="accountsCheck">Accounts/Process</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="auditCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="auditCheck">Audit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <p><b>GLOBAL RIGHTS</b></p>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="createCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="createCheck">Create</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="viewCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="viewCheck">View</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="modifyCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="modifyCheck">Modify</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="deleteCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="deleteCheck">Delete</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="approveCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="approveCheck">Approve</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="confirmCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="confirmCheck">Confirm</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="processCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="processCheck">Process</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input" id="suppressCheck" type="checkbox" />
                                            <label className="custom-control-label" htmlFor="suppressCheck">Suppress</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui large transparent input">
                                <input type="text" placeholder="Comment..." />
                            </div>
                            
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group mt-4 mb-0"><Link className="btn btn-success btn-block" to="">Save</Link></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mt-4 mb-0"><Link className="btn btn-danger btn-block" to="">Cancel</Link></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default RequestDetails