import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import axios from 'axios';
// import Dashboard from './components/pages/Dashboard';
import PageWrapper from './components/pages/PageWrapper';
import Login from './components/pages/Login';
import logo from './assets/img/chi-logo.png';
import './assets/css/style.css';
import './assets/css/approve.css';
// import './assets/js/jquery-3.5.1';
// import './assets/js/scripts';
// import './assets/css/facebox.css';
// import './assets/js/facebox';


class App extends React.Component {

    state = {DisplayName:'', dept:'', role: null, email:'', redirect: false, loginError:'', Loader: false}

    onLoginSubmit = async(username,password)=>{
        this.setState({Loader: true})
        
        try{
            const response = await axios.get('http://test.chiplc.com/CoreRest/api/Security/ActiveDirectoryAuthentication', {
                params: {
                    username,
                    password
                }
            });
            console.log(response);
            if(response.data.ResponseCode === "110"){
                this.setState({DisplayName: response.data.UserDisplayName, redirect: true, Loader:false})
            }else if(response.data.ResponseCode === "108"){
                this.setState({loginError: 'Wrong Username or Password', Loader:false})
            }
            
            
        } catch (error) {
            console.log(error)
            this.setState({loginError: 'Check your network connection and try again !!', Loader:false})
            
        }
    }

    render(){
        const {redirect} = this.state;
        const user = {
            name: this.state.DisplayName,
            role: this.state.role,
            dept: this.state.dept,
            email: this.state.email
        }

        if(redirect) {
            return (
                <PageWrapper user = {user}>
                    <div>
                    <Redirect to='/' />
                    </div>
                    
                </PageWrapper>
            )
        }

        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/login" exact component={Login} />
                        <Login 
                        logo= {logo}
                        loginError= {this.state.loginError}
                        load = {this.state.Loader}
                        onSubmit = {this.onLoginSubmit}
                        />
                    </div>
                </BrowserRouter> 
                
            </div>
        )
    }
}

export default App