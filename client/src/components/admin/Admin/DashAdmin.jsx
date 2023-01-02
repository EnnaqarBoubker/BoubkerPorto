import React from 'react'

const DashAdmin = () => {

  return (
    <>
      <main className="main">
        <div className="Container p-4 ">
          <div className="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Dashboard</p>
          </div>
          <div className="divs1 mt-3">
            <div className="divs2 card">
              <i className=""></i>
              <p>
                Products
              </p>
              <p className="num">
                453
              </p>
            </div>
            <div className="divs2 card" id="wst1">
              <i className=""></i>
              <p>
                Categories
              </p>
              <p className="num">
                3
              </p>
            </div>
            <div className="divs2 card" id="wst2">
              <i className=""></i>
              <p>
                Comments
              </p>
              <p className="num">
                34
              </p>
            </div>
            <div className="divs2 card">
              <i className=""></i>
              <p className="">
                Users
              </p>
              <p className="num">
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
