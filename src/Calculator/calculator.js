import react, { useState } from 'react';

import  './calculator.css';
import Button from './button.js';
import Equal from './Equal-btn.js'
import Screen from './Screen'
let Calculator = (props)=>{

    //creating state
 
    const [value, setValue] = useState({val:0, opt:null,result:0});
    return (
  <div className='main-div'>
      <div>
          <Screen value={value.val}/>
      </div>
        <div className='first-row'>
            <div>
                <Button value={7}  state={value}
                        setValue={setValue} />
            </div>
            <div>
                <Button value={8} state={value}
                        setValue={setValue} />
            </div>
            <div>
                <Button value={9} state={value}
                        setValue={setValue} />
            </div>
            <div>
                <Button value='*' state={value}
                        setValue={setValue} />
            </div>
        </div>
        <div className='first-row'>
            <div>
                <Button value={4} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value={5} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value={6} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value='-'  state={value}
                        setValue={setValue}/>
            </div>
        </div>
        <div className='first-row'>
            <div>
                <Button value={1} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value={2} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value={3} state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value='+' state={value}
                        setValue={setValue} />
            </div>
        </div>
      
        <div className='first-row'>
            <div >
                <Button value='AC'state={value}
                        setValue={setValue}/>
            </div>
            <div>
                <Button value= '.' state={value}
                        setValue={setValue}/>
            </div>   
            <div>
                <Button value= {0} state={value}
                        setValue={setValue}/>
            </div>         
            <div>
                <Button  value='=' state={value}
                        setValue={setValue}/>
            </div>
        </div>
        </div>
    );
}

export default  Calculator;