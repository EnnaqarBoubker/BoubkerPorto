import React from 'react'

const DashAdmin = () => {

  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Dashboard</p>
          </div>
          <div class="divs1 mt-3">
            <div class="divs2 card">
              <i class=""></i>
              <p>
                Products
              </p>
              <p class="num">
                453
              </p>
            </div>
            <div class="divs2 card" id="wst1">
              <i class=""></i>
              <p>
                Categories
              </p>
              <p class="num">
                3
              </p>
            </div>
            <div class="divs2 card" id="wst2">
              <i class=""></i>
              <p>
                Comments
              </p>
              <p class="num">
                34
              </p>
            </div>
            <div class="divs2 card">
              <i class=""></i>
              <p class="">
                Users
              </p>
              <p class="num">
                78
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DashAdmin
