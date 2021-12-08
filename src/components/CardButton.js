import React from 'react'

export default function CardButton({handleCardClick}) {
    return (
        <div className="bg-my-yellow mt-4 flex items-center justify-between py-3 px-2 rounded-3xl w-full" onClick={handleCardClick}>
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <div className="font-bold"> Credit/Debit card</div>
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
