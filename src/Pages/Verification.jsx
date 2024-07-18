import React, { useState } from 'react';
import "./Verification.css";
import OTPInput from 'react-otp-input';

const Verification = () => {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 d-flex justify-center text-center'>
          <div className="App">
            <h1>Enter Verification Code</h1>
            <OTPInput
              value={code}
              onChange={handleChange}
              numInputs={6}
              renderSeparator={<span style={{ width: "8px" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid transparent",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue"
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none"
              }}
            />
            <h2>Start editing to see some magic happen!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;


{/* <div className='form_box'>
                    <h4>OTP Verification</h4>
                    <p>A 6 digit code has been sent to your register email</p>
                    <h5>Enter Code To Verify</h5>
                    <form action="">
                        <div className='d-flex gap-5 flex-wrap'>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />                            
                        </div>                    
                     <button>Verify and Proceed</button>
                    </form>
                </div>                 */}