import react from 'react';
import './Screen.css'
let Screen = (props)=>{
    return(
        <div className='my-border'>        
        <div className='screen'>        
            <h1>{props.value}</h1>
        </div>
        </div>
    )
}

export default Screen;