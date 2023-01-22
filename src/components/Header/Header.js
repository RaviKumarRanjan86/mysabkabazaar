import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
function Header() {
  return (
    <div style={{top:0,display:"flex",flexDirection:"rows",backgroundColor:"red",width:"100%",justifyContent:"space-between",height:"90px",position:"fixed"}}>
      <div style={{display:"flex",flexDirection:"rows",padding:"0 10px"}}>
      <image src=''>Icon</image>
      <div>Home</div>
      <div>Product</div>
      </div>  
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex"}}>
      <div>Sign In</div>
      <div>Register</div>
      </div>
      <div>
        Cart
      </div>
      </div>
    </div>
  )
}

export default Header