import React from 'react'

export default function ModalHeader() {
    return (
        <div className="flex p-4 justify-between items-center">
           <div className="flex space-x-3 items-center">
               <div>
                   <img src="https://placeimg.com/640/480/people" className="w-16 h-16 rounded-md"/>
               </div>
               <div>
                   <h3 className="font-bold text-2xl">Merchant</h3>
                   <p>ID: 83459834535</p>
               </div>
           </div>
           <div>
               <div className="font-bold">Amount</div>
               <div className="text-2xl text-my-yellow font-bold">Rs 400 </div>
           </div>
        </div>
    )
}
