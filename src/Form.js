import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();
  const handleclick=()=>{
    navigate("/VotingOptions");
  }
  return (
   
    <div className='container'>
      <form className='form'>
        <div>
              <label>Full Name: </label>
            <input type="text" />
        </div>
      
        <div>
            <label>Email Address: </label>
            <input type="text" />
        </div>
        <div>
            <lable>Phone Number: </lable>
            <input type="text" />
        </div>
        <div>
              <label>Age: </label>
            <input type="number" />
        </div>
        <div>
              <label>Zone: </label>
            <input type="text" />
        </div>
    
        {/* <button className='button' onClick={handleclick}>Go to Vote</button> */}
        <button  className="button">
          <div className="button-top" onClick={handleclick}>Submit</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div> 
        </button>
        <div>
          <p>Chief Electoral Officers of all states /UT's have developed their websites which include Statistics and information of local Interest. Latest electoral rolls with search facility are also available on these sites.</p>
            
        </div>
      </form>
    </div>
  )
}