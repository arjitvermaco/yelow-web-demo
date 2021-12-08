import React, { useEffect, useState } from "react";
import CardButton from "./CardButton";
import UpiButton from "./UpiButton";
import StepWizard from "react-step-wizard";
import UpiOptions from "./UpiOptions";
import CardDetails from './CardDetails';

export default function PaymentOptions() {
  const [currentState, setCurrentState] = useState(1);
  const [showPaymentOptions, setShowPaymentOptions] = useState(true);
  const [showUpiOptions, setShowUpiOptions] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // useEffect(() => {
  //   if (currentState === 1) {
  //     setShowPaymentOptions(true);
  //     setShowUpiOptions(false);
  //     setShowCardDetails(false)
  //   }

  //   console.log(currentState)
  // });

  const handleUpiClick = ()=>{
    console.log('UPI clicked');
    console.log(showPaymentOptions)
    setShowPaymentOptions(false);
    setShowUpiOptions(true);
    setShowCardDetails(false)
  }

  const handleCardClick = ()=>{
    setShowPaymentOptions(false);
    setShowUpiOptions(false);
    setShowCardDetails(true)
  }
  return (
    <div className="p-4">
      <h2 className="font-bold">Select payment options</h2>

      <div className="inner-shadow space-y-5 p-3">
        {/* <UpiButton />
        <CardButton /> */}
        {showPaymentOptions? <div><UpiButton handleUpiClick={handleUpiClick}  /> <CardButton handleCardClick={handleCardClick} /></div>: <></>}
        {showUpiOptions? <div><UpiOptions/></div>: ''}
        {showCardDetails?<CardDetails/>:''}

      </div>
    </div>
  );
}
