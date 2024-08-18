import React, { useEffect } from 'react'
import './col.css'
import { GiCash } from "react-icons/gi";
import { BsCash } from "react-icons/bs";
import { PiCashRegister } from "react-icons/pi";
function Col() {


    useEffect(()=>{
     
    },[])


  return (
    <div className="page2-navbar">
        <div className="col-left col-12">
            <div className="container">
            <h1>Multiple Ways to Use Your Earnings</h1>
            <hr />
                <div className="card">
                    <div className="container">
                        <div className="col">
                            <a href="#">
                            <GiCash />
                            </a>
                            <h6>Quick Payments</h6>
                            <hr />
                            <p>
                  Get paid quickly and easily to local receiving accounts in USD, EUR, GBP, JPY, AUD, and CAD.
                  </p>
                        </div>
                        <div className="col">
                            <a href="#">
                            <BsCash />
                            </a>
                            <h6>Bill Your Clients</h6>
                            <hr />
                            <p>
                  Request payments from your clients overseas and receive payments directly through local bank transfer, debit/credit card, or ACH bank debit.
                </p>
                        </div>
                        <div className="col">
                            <a href="#">
                            <PiCashRegister />
                            </a>
                            <h6>Marketplaces & Networks</h6>

                            <hr />
                            <p>
                  Connect with numerous marketplaces and networks to receive cross-border payments directly to your META2FX account.
                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div  id="container-page2" className="col-reght col-12">
            <div className="container-page2-slider">
                <div className="container-page2-slider text">
                <h6>Request payments from clients overseas and get paid directly through local bank transfers.</h6>
                <p>
              Connect with a variety of marketplaces and networks to receive cross-border payments directly to your META2FX account.
              Request payments from clients overseas and receive funds through local bank transfer, debit/credit card, or ACH bank debit.
              Get paid quickly and easily to local receiving accounts in USD, EUR, GBP, JPY, AUD, and CAD.
            </p>
                </div>
                <img src="http://res.cloudinary.com/dvivzto6g/image/upload/v1717588389/somsbfqi40h7vfaapx60.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Col
