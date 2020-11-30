import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../commons/Footer';
import Loader from '../commons/Loader';


class Login extends React.Component {

    state = {username: '', password: '', loader: false}

     

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.username,this.state.password);
        // this.setState({loader:this.props.load})
    }


    render(){
        return (
            <div className={`main-back`}>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <br />
                                        <h1 className="text-center font-weight-light my-4" style={{color: '#9B2743'}}><b><i>GIBS ACCESS</i></b></h1>
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <div className="tittle row">
                                                    <div className="col-md-6">
                                                        <Link className="navbar-brand js-scroll-trigger" to="">
                                        
                                                            <img src={this.props.logo} style={{width:'200px'}} alt="logo"/>
                                                            </Link>
                                                    </div>    
                                                    
                                                    
                                                    
                                                    <div className="col-md-6">
                                                            
                                                    <p style={{marginTop:'9%', textAlign: 'center'}}>Login</p>
                                                    </div> 
                                                </div>

                                            </div>
                                            
                                            <div className="card-body">
                                                <form onSubmit={this.onFormSubmit}>
                                                    <div className="" style={{color:'red', textAlign: 'center'}}>{this.props.loginError}</div> 
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputEmailAddress">Username</label>
                                                        <input className="form-control py-4" id="inputUsername"  type="text" placeholder="Enter username" required value={this.state.username} onChange= {(e)=> this.setState({username:e.target.value})}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                        <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" required value={this.state.password} onChange= {(e)=>this.setState({password:e.target.value})} />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                            <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                                    <br />
                                                    <Loader load = {this.props.load} />
                                                </form>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Login