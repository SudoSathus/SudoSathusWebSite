import React,{useState} from "react";
const LoginForm=()=>{
    const [account,setAccount]=useState("請輸入資料");
    const [nowSelect,setNowSelect]=useState("789");
    
    return (
        <div>
            {/* <input type="text"  disabled={true} defaultValue={account} value={account} onChange={(e)=>{setAccount(e.target.value)}}/> */}

            <select value={nowSelect} onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option value="456">456</option>
            </select>
            <div>
                目前account:{nowSelect}
            </div>
            {/* <button onClick={()=>{setAccount("")}}>用按鍵取得新的account</button> */}
            
            <button onClick={(e)=>{setNowSelect("789")}}>改變為789</button>
        </div>
    )
}
export default LoginForm;