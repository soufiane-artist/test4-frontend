import { PayPalScriptProvider, PayPalButtons,FUNDING  } from "@paypal/react-paypal-js";
import './paypal.css'
import { FaSearch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Paypal({user,imgBank}) {

  const [amount,setamount] = useState(10)
  const [Coupone,setCoupone] = useState('')
  const [CouponeSucc,setCouponeSucc] = useState(false)
  const [CouponeErr,setCouponeErr] = useState(false)
  const [price,setPrice] = useState()
    const navigate = useNavigate()
    
    const createOrder = (data, actions) => {
          const userAmount = document.getElementById('userAmount')
          const valuePrice = parseFloat(userAmount.value)
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: valuePrice,
                      currency_code: 'USD'
                  }
              }]
          });
      }

      const onApprove =(data, actions) => {
        toast.success('Your account has been charged successfully');
        const userAmount = document.getElementById('userAmount')
        const valuePrice = parseFloat(userAmount.value)
        actions.order.capture().then(async()=>{
          await axios.put(`${process.env.REACT_APP_API_URL}/deposit/paypal`,{
                amount :valuePrice,
                userId : user._id
              }).then((res)=>{
              console.log(res.data);
              setCouponeSucc(false)
            }).catch((err)=>{
              console.log(err);
            })
            if(Coupone !== ""){
              
            }
        });
      }
    //http://localhost:2006/api/meta-bank/v150/coponeUser/
    const getCoupone = async()=>{
      setCouponeSucc(false)
      setCouponeErr(false)
        if(Coupone === "" ){
        return toast.error('please get coupone code')
      }
      await axios.get(`${process.env.REACT_APP_API_URL}/coponeUser/`+Coupone).then((res)=>{
        console.log(res.data);
        if(res.data[0]?.coupone){
          setCouponeSucc(true)
        }else{
        setCouponeErr(true)
        }
      })
    }

    useEffect(()=>{
      const userCoupone  =  document.getElementById('userCoupone')
      userCoupone.onkeyup = ()=>{
        setCouponeSucc(false)
        setCouponeErr(false)
      }
    },[CouponeSucc,CouponeErr])


    return (
        <div className="Account">
            <div className="Account-container text-center bg-white text-dark">
            <div className="account-btn-close  col-12">
            <h1 onClick={()=>navigate(-1)} className='text-dark'>
              <FaArrowRight/>
            </h1>
         </div>
         <img className='imgSrc' src={imgBank} alt="" />
            <div className="text">
           <p>
            perçus comme constituant un ensemble cohérent, porteur de sens et 
            </p>
            </div>
            <div className="paypal">
        <h5>
        A copy of the bank transfer
        </h5>
        <p>
          <ol>
          <li>Un texte est une série orale ou écrite de mots perçus comme</li>
          <li>Un texte est  ou écrite de mots perçus comme</li>
          </ol>
        </p>
        <div className='inp-cobone'>
          <input type="number" id="userAmount"  value={amount} onChange={(e)=>setamount(e.target.value)} placeholder='USD' /> 
        </div>        
        <p>  _ code coupon</p>
        <div className='inp-cobone'>
          <input type="text" id="userCoupone" value={Coupone} onChange={(e)=>setCoupone(e.target.value)} placeholder='Code Copone' /> <h6 ><FaSearch onClick={getCoupone}/></h6>
        </div>
        {CouponeSucc && <p><span style={{color:'green'}}><MdVerified /></span> Your coupon code has been accepted <span style={{color:'white',padding:'0px 10px',borderRadius:'3px',fontWeight:"600",background:'green'}}> + { parseFloat(amount)/20  } usd</span></p>}
       {CouponeErr && <p><span style={{color:'red'}}><MdOutlineError /></span> This coupon is invalid</p>}
         <div className="paypal_btn">
         <PayPalScriptProvider options={{ 
            "client-id": "AYNov_C6dlIhJbLxFumu-WA36PRM6jKlDZ9lbvjdmauHG2gixWKJ56s-cZcWUZ2VO8Fi3vF9LKP9BlDb", // Replace with your PayPal Client ID
            "currency": "USD" ,
           }}>
            <div className="App" style={{width:'350px'}}>
                <PayPalButtons onApprove={onApprove} createOrder={createOrder} fundingSource={FUNDING.PAYPAL}  />
            </div>
        </PayPalScriptProvider>
         </div>
       </div>
        </div>
      </div>
    );
}

export default Paypal
