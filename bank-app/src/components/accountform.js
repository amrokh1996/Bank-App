import React, { useEffect, useState } from 'react';
import bg from "../Images/bg5.jpg"
import logo from "../Images/logoo.png"


function AccountForm(props) {
const d=JSON.parse(localStorage.getItem('accounts'))
const [customerName, setcustomerName] = useState('');
const [accountNumber, setaccountNumber] = useState('');
const [accountType, setaccountType] = useState('');
const [accounts, setItems] = useState([]);
const currentid=accounts.length



useEffect(() => {
  localStorage.setItem('accounts', JSON.stringify(accounts));
  clearState();
},[accounts]);

useEffect(() => {
  const accounts = d;
  console.log(d)
  if (accounts ==null) {
   setItems([]);
  }else{setItems(d)}
}, []);


const changecustomerName = (event) => {
	setcustomerName(event.target.value);
};

const changeaccountNumber = (event) => {
	setaccountNumber(event.target.value);
};

const changeaccountType = (event) => {
	setaccountType(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	 
	 
	const accounts = {
		id:currentid,
        customerName:customerName,
        accountNumber:accountNumber,
        accountType:accountType
	};
	setItems(current => [...current, accounts]);
	

};

const clearState = () => {
	setcustomerName('');
	setaccountNumber('');
	setaccountType('');
};

return (
	<>
<section
  className="hero-section"
  style={{
    paddingTop: "10rem",
    width: "100%",
	height:'680px',
    backgroundImage:  `url(${bg})`
  }}
>
  <div
    className="container position-relative"
  >
	<div className='row'>
		<div className='col-8'style={{marginTop:'100px'}}>
    <h1 style={{backgroundColor:'unset',color:'blue'}}>
      Bank System
    </h1>

    <a href="" className="btn-get-started">
      Get Started
    </a>
  </div>
  <div className='col'>
  <div
    className="form-body p-2 pt-4 mb-5 rounded-3"
    style={{
      backgroundColor: "#ffffff",
      boxShadow: "7px 7px 12px rgba(0, 0, 0, 0.559)"
    }}
  >
    <div className="row">
      <div className="form-holder">
        <div className="form-content">
          <div className="form-items text-center">
			<img src={logo} width={'100px'} height={'100px'} />
            <h2>Create aNew Account</h2>
            <h6>Fill in the data below.</h6>
            <form id="student-form" onSubmit={transferValue}>
              <div className="col-md-12">
                <input
                  className="form-control"
                  type="text"
                  value={customerName} onChange={changecustomerName}
                  placeholder="customer Name"
                  required=""
                />
              </div>

              <div className="col-md-12">
                <input
                  className="form-control"
                  type="text"
				  value={accountNumber} onChange={changeaccountNumber} 
                  placeholder="account Number"
                  required=""
                />
              </div>
			  <div className="col-md-12">
                <input
                  className="form-control"
                  type="text"
				   value={accountType} onChange={changeaccountType}
                  placeholder="account Type"
                  required=""
                />
              </div>
              <div className="form-button mt-3 mb-5">
                <button id="submit" type="submit" className="btn-submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
  </div>

  </div>
</section>

	



	</>
);
}

export default AccountForm;
