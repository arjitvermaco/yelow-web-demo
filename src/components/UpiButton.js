import React from 'react'

export default function UpiButton({handleUpiClick}) {
    return (
        <div className="bg-my-yellow flex items-center justify-between py-3 px-2 rounded-3xl w-full" onClick={handleUpiClick}>
        <div className="flex items-center space-x-3">
          <div className="bg-white w-10 rounded-lg p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-my-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="font-bold"> UPI</div>
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
    )
}
