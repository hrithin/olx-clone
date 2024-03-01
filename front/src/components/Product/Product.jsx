import React from 'react'


function Product() {
  return (
<>

    <div className=' bg-white container w-[80%] h-[80%] rounded-sm shadow-md'  >
      <div className="container px-5 py-24 mx-auto" style={{ cursor: 'auto' }}>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://stackdiary.com/140x100.png"
            style={{ cursor: 'auto' }}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ cursor: 'auto' }}>
          
          <div class="badge badge-secondary px-2">suni mon</div>
            <h2 className="text-sm title-font text-gray-500 tracking-widest" style={{ cursor: 'auto' }}>
              AD ID : 12345679
            </h2>
            
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" style={{ cursor: 'auto' }}>
              Selling Old Iphone Brand New Condition !!
            </h1>
            <div className="flex mb-4">
              {/* ... (Rest of the code remains unchanged) */}
            </div>
            <p className="leading-relaxed">
              Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci.
              Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero
              efficitur dolor duis lobortis, non etiam sociosqu maximus enim mus natoque.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* ... (Rest of the code remains unchanged) */}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$99.50</span>
              <button className="flex ml-auto  text-white bg-indigo-500 border-0 py-2 pt-3 px-6 focus:outline-none hover:bg-indigo-600 rounded-md">
                Contact
              </button>
              <button class="btn ml-1  btn-secondary">Chat</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 

</>
  )
}

export default Product