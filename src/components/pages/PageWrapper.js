import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import Sidebar from '../commons/SideBar';
import Dashboard from './Dashboard';
import MakeRequest from './Requests/MakeRequest';
import MyRequest from './Requests/MyRequest';
import TeamRequest from './Requests/TeamRequest';
import RequestDetails from './Requests/RequestDetails';


class PageWrapper extends React.Component {

    state = {user:{
        name: this.props.user.name,
        role: this.props.user.role,
        dept: this.props.user.dept,
        email: this.props.user.email

    }}

    render() {
        
        return (
            <BrowserRouter>
                <div className="sb-nav-fixed">
                    <Header AppName = "GIBS ACCESS"/>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <Sidebar userName = {this.state.user.name}/>
                        </div>
                        <div id="layoutSidenav_content">
                            <main>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/request/" exact component={MakeRequest} />
                                <Route path="/request/my-request" exact component={MyRequest} />
                                <Route path="/teams-request/" exact component={TeamRequest} />
                                <Route path="/teams-request/req-details" exact component={RequestDetails} />
                            </main>
                            <Footer />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default PageWrapper