import React from "react";

export default function UpiOptions() {
  return (
    <div className="animate__animated  animate__slideInRight">
      <div className="bg-my-yellow mt-4 flex items-center justify-between py-3 px-2 rounded-3xl w-full">
        <div className="flex items-center space-x-3">
          <div className="bg-white w-10 rounded-lg p-2">
            <img src="images/paytm.png" className="h-3 w-9" />
          </div>
          <div className="font-bold"> Paytm</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>


      <div className="bg-my-yellow mt-4 flex items-center justify-between py-3 px-2 rounded-3xl w-full">
        <div className="flex items-center space-x-3">
          <div className="bg-white w-10 rounded-lg p-2">
            <img src="images/gpay.png" className="h-3 w-9" />
          </div>
          <div className="font-bold"> Google Pay</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="bg-my-yellow mt-4 flex items-center justify-between py-3 px-2 rounded-3xl w-full">
        <div className="flex items-center space-x-3">
          <div className="bg-white w-10 rounded-lg p-2">
            <img src="images/paypal.png" className="h-3 w-3 mx-auto" />
          </div>
          <div className="font-bold"> Paypal</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="bg-my-yellow mt-4 flex items-center justify-between py-3 px-2 rounded-3xl w-full">
        <div className="flex items-center space-x-3">
          <div className="bg-white w-10 rounded-lg p-2">
            <img src="images/qrcode.png" className="h-3 w-3 mx-auto" />
          </div>
          <div className="font-bold"> Show QR Code</div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
