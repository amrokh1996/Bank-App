import React, { useState } from 'react';
import profile from "../Images/profile.png"
import bg from "../Images/bg5.jpg"

import jsonData from '../data.json';
import AccountForm from './accountform';

export default function TableData() {
const accounts = JSON.parse(localStorage.getItem("accounts"))
const handleClick = event => {
  accounts.splice(event.currentTarget.value, 1);
  localStorage.setItem("accounts",JSON.stringify(accounts))
  

};

const account = accounts.map((info) => {
	return (
		<>
    <div  class="card testimonial-card mt-2 mb-3" style={{width:'200px',height:'350px'}}>
      <div className="card-up aqua-gradient"></div>
      <div className="avatar mx-auto white">
        <img src={profile}  className="rounded-circle img-fluid"
          alt="woman avatar"/>
      </div>
      <div className="card-body text-center">
        <h4 className="card-title font-weight-bold">{info.customerName}</h4>
        <hr/>
        <p><i className="fas fa-quote-left"></i>{info.accountNumber}</p>
		
        <p><i className="fas fa-quote-left"></i>{info.accountType}</p>
        <button  value={info.id} href="#" onClick={handleClick} class="btn btn-primary bg-danger" >delete</button>
      </div>
    </div>

</>

	);
});

return (
	<>
<div style={{display:'flex',backgroundImage:  `url(${bg})`,flexWrap:'wrap',padding:'100px',justifyContent:'space-between'}}>{account}</div>
</>
);
}

