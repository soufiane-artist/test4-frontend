import { PayPalScriptProvider, PayPalButtons,FUNDING  } from "@paypal/react-paypal-js";
import './paypal.css'
import { FaSearch } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";

function MasterCard({imgBank}) {

    const navigate = useNavigate()
    const [CouponeSucc,setCouponeSucc]= useState(false)
    const [CouponeErr,setCouponeErr]= useState(false)
    const [amount,setAmount]= useState(10)
    const [Coupone,setCoupone]= useState()
    const {user} = useSelector(state => state.auth)

    const createOrder = (data, actions) => {
      const userAmount = document.getElementById('userAmountMasterCad')
      const valuePrice = parseFloat(userAmount.value)
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: valuePrice,
                    currency_code: 'USD'
                }
            }],
            application_context: {
              shipping_preference: "NO_SHIPPING", // تعطيل الشحن
              user_action: "PAY_NOW" // التوجيه مباشرة للدفع
            },
                payer: {
                 
                  address: {
                    country_code: 'MA' // يمكنك تغيير رمز الدولة حسب الحاجة
                  },
                  email_address: "customer@example.com"
                }
        });
    }
    const onApprove =(data, actions) => {
        return actions.order.capture().then((details)=>{
          toast.success('Your account has been charged successfully');
          const userAmount = document.getElementById('userAmountMasterCad')
          const valuePrice = parseFloat(userAmount?.value)
          actions.order.capture().then(async()=>{
            await axios.put(`${process.env.REACT_APP_API_URL}/deposit/paypal`,{
                  amount : valuePrice,
                  userId : user._id
                }).then((res)=>{
                console.log(res.data);
                toast.success('Your account has been charged successfully');
              }).catch((err)=>{
                console.log(err);
              })
              if(CouponeSucc){
                
              }
          });
        });
    }


    const getCoupone = async()=>{
      if(user?.coupone === Coupone){
        return toast.error('Not useful to you')
      }
      setCouponeSucc(false)
      setCouponeErr(false)
      if(!amount){
        return toast.warning('please get amount')
      }
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



    return (
        <div className="Account">
            <div className="Account-container text-center bg-white text-dark">
            <div className="account-btn-close  col-12">
            <h1 onClick={()=>navigate(-1)} className='text-dark'>
              <FaArrowRight/>
            </h1>
         </div>
         <img className='imgSrc' src={imgBank} alt="" />
           
         <div className="paypal">
        <h5>
        Bank Transfer Confirmation
        </h5>
        <p>
          <ol>
          <li>Ensure all required fields are filled accurately.</li>
          <li>Double-check the transfer details before submitting.</li>
          </ol>
        </p>
        <div className='inp-cobone'>
          <input id="userAmountMasterCad" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='USD' /> 
        </div>        
        <p>  _ code coupon</p>
        <div className='inp-cobone'>
          <input type="text" value={Coupone} onChange={(e)=>setCoupone(e.target.value)} placeholder='Code Copone' /> <h6 onClick={getCoupone}><FaSearch /></h6>
        </div>
        {CouponeSucc && <p><span style={{color:'green'}}><MdVerified /></span>   Your coupon code has been successfully applied. 
        <span style={{color:'white',padding:'0px 5px',borderRadius:'3px',fontWeight:"600",background:'green'}}>{ parseFloat(amount)/20  }  usd</span></p>}
        {CouponeErr && <p><span style={{color:'red'}}><MdOutlineError /></span> Invalid coupon code. Please try again.</p>}
         <div className="paypal_btn">
         <PayPalScriptProvider options={{ 
            "client-id": "AYNov_C6dlIhJbLxFumu-WA36PRM6jKlDZ9lbvjdmauHG2gixWKJ56s-cZcWUZ2VO8Fi3vF9LKP9BlDb", // Replace with your PayPal Client ID
            "currency": "USD" ,
           }}>
            <div className="App" style={{width:'350px'}}>
                <PayPalButtons onApprove={onApprove} createOrder={createOrder} fundingSource={FUNDING.CARD}  />
            </div>
        </PayPalScriptProvider>
         </div>
         </div>
      </div>
     </div>
       
    );
}

export default MasterCard
