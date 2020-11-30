import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/style.css';

class Footer extends React.Component {


    render(){
        return (
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; CHI 2020</div>
                            <div>
                                <Link to="/">Privacy Policy</Link>
                                &middot;
                                <Link to="/">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer