import React from 'react';
import useRate from './useRate.js';
const ProgressDIY=(props)=>{

  const percent=useRate(props.value);
  
  return(
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
      </div>
      目前比率: {percent}%
      <button value={90} onClick={props.onClick}>增加比率至90</button>
      <button value={10} onClick={props.onClick}>減少比率至10</button>
    </div>
  )
}

export default ProgressDIY;