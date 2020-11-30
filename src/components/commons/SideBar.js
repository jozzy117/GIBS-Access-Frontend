import React from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {


    render() {
        return (
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            
                            <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Request
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/request/">Make Request</Link>
                                        <Link className="nav-link" to="/request/my-request">My Request</Link>
                                    </nav>
                                    
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="/teams-request/">
                                <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                                Team's Request
                            </Link>
                            <Link className="nav-link collapsed" to="/">
                                <div className="sb-nav-link-icon"><i className="fas fa-envelope"></i></div>
                                Email Settings
                            </Link>
                            <div className="sb-sidenav-menu-heading">Error</div>
                            
                            <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/">401 Page</Link>
                                    <Link className="nav-link" to="/">404 Page</Link>
                                    <Link className="nav-link" to="/">500 Page</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
        <div className="small">Logged in as: <b style={{color:"white",fontSize:"13px"}}>{this.props.userName}</b></div>
                        
                    </div>
                </nav>
        )
    }
}

export default Sidebar