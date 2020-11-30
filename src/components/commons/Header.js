import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {


    render() {
        return (

                <nav className="sb-topnav navbar navbar-expand navbar-dark" style={{backgroundColor: '#9B2743' }}>
                    <Link className="navbar-brand" to="/">{this.props.AppName}</Link>
                    <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" to="/"><i className="fas fa-bars"></i></button>
                    {/* <!-- Navbar Search--> */}
                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-dark" type="button"><i className="fas fa-search"></i></button>
                            </div>
                            
                        </div>
                    </form>
                    {/* <!-- Navbar--> */}
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="userDropdown" to="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="/">Settings</Link>
                                <Link className="dropdown-item" to="/">Activity Log</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default Header