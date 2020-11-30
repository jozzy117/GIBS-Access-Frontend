import React from 'react';


class TeamRequest extends React.Component {


    render() {

        return(
            <div className="container-fluid">
                <h2 className="mt-4">My Team's Request</h2>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active"></li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table mr-1"></i>
                        Requests
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Requested By</th>
                                        <th>Details</th>
                                        <th>Date/Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default TeamRequest