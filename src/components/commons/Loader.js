import React from 'react';


const Loader = (props) => {
    if (props.load){
        return (
            <div className="ui active centered inline loader"></div>
            )
            
    }else {
            return null
    }
    
}

// Loader.defaultProps = {
//     message: 'Loading...'
// }


export default Loader