import React from 'react';
import {Link} from 'react-router-dom';
import RequestTable from './Requests/RequestTable';

class Dashboard extends React.Component {


    render() {

        return (
            <div className="container-fluid">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active"></li>
                </ol>
                
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-white mb-4" style={{backgroundColor: '#9B2743' }}>
                            <div className="card-body">Make Request <strong></strong></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/request/">Request</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-white mb-4" style={{backgroundColor: '#2196F3'}} >
                            <div className="card-body">My Request <strong></strong></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/request/my-request">View Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-white mb-4" style={{backgroundColor:'#4CAF50'}} >
                            <div className="card-body">Team's Request <strong></strong></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="/teams-request/">View Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6">
                        <div className="card text-white mb-4" style={{backgroundColor: '#f44336'}} >
                            <div className="card-body">Declined Request <strong></strong></div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <Link className="small text-white stretched-link" to="">View Details</Link>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <RequestTable />
            
            </div>     
        )
    }
}

export default Dashboard