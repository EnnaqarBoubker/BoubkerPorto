import React, { useState } from "react";
import './project.css'


const Project = () => {
  const [showModel, setShowModel] = useState(false);
  const modelHandler = () => {
    setShowModel(!showModel);
  };

  return (
    <>
    
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Products</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
              <div class="d-flex">
                <p class="m-0">Show</p>
                <select class="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p class="m-0">Entities</p>
              </div>
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button
                onClick={modelHandler}
                class="btn bg-danger px-3 text-blod Button_ajoute"
                data-bs-toggle="modal"
                data-bs-target="#send_to"
              >
                Ajouter Project
              </button>
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">url</th>
                  <th scope="col">contenu</th>
                  <th scope="col">delete</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>
                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>

                <tr class="rounded">
                  <td scope="col"> 45 </td>
                  <td scope="col"> Ahmed</td>
                  <td scope="col"> fewwv</td>
                  <td scope="col"> vwdvwrwv</td>
                  <td scope="col"> cdscc</td>
                  <td scope="col"> cdcwdcwc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {showModel && (
          <div className="boubker">
            <form>
              <p className="text-center">Add New Product</p>
              <div class="form-group">
                <label for="exampleInputEmail1">image_produit</label>
                <input
                  type=""
                  name="image_produit"
                  class="form-control rounded-3"
                  id="exampleInputEmail1"
                  aria-describeProducty="emailHelp"
                  placeholder="Enter image_produit"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">title_produit</label>
                <input
                  type="text"
                  name="title_produit"
                  class="form-control rounded-3"
                  id="exampleInputEmail1"
                  aria-describeProducty="emailHelp"
                  placeholder="Enter title_produit"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">description_produit</label>
                <input
                  type="text"
                  name="description_produit"
                  class="form-control rounded-3"
                  id="exampleInputEmail1"
                  aria-describeProducty="emailHelp"
                  placeholder="Enter description_produit"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">prix_produit</label>
                <input
                  type="number"
                  name="prix_produit"
                  class="form-control rounded-3"
                  id="exampleInputEmail1"
                  aria-describeProducty="emailHelp"
                  placeholder="Enter prix_produit"
                />
              </div>
              <div className="w-100 d-flex justify-content-between">
                <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" >Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute">Cancel</button>
              </div>
              <p className="text-center text-danger"></p>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default Project;
