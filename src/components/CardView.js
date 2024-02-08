import React from "react";
import { Button, Card } from "antd";
import { Input } from "antd";
const CardView = () => {
  return (
    <div className="container">
      <Card
      className="mainCard"
      >
        <div className="card">
          <div className="buttonContainer">
            <button className="buttonFirsrt">Sign Up</button>
            <button className="buttonSecond">Log In</button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: 24,color:'white' }}>Sign Up for Free</p>
          </div>
          <div className="inputCotainer">
            <div className="firstInput">
              <Input placeholder="First Name*" type="text" id="input"  style={{backgroundColor:'#123447',color:'white'}}/>
              <Input placeholder="Last Name*" type="text" id="input" style={{backgroundColor:'#123447',color:'white'}}/>
            </div>
            <div style={{marginBottom:30}}>
              <Input placeholder="Email Address*" type="email" id="input" style={{backgroundColor:'#123447',color:'white' }} />
            </div>
            <div style={{marginBottom:30}}>
              <Input placeholder="Set A Password*" type="password" id="input1" style={{backgroundColor:'#123447',color:'white'}}/>
            </div>
          </div>
          <button className="subnitButton">GET STARTED</button>
        </div>
      </Card>
    </div>
  );
};
export default CardView;
