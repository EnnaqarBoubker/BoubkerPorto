import React, { useState } from "react";
import './project.css'


const Project = () => {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState('');
  const [formData, setFormData] = useState({title : '', description : '', image : ''});
  const {title, description, image} = formData;

  const modelHandler = () => {
    setShowModel(!showModel);
  };

const handleChange = (e) => {
    e.preventDefault()
    const url = ''

}

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
          {/*  */}
        </div>

        {showModel && (
          <div className="boubker">
            <form onSubmit={() => handleChange(e)}>
              <h4 className="text-center" style={{ color : '#000' }}>Add New Project</h4>
              <div class="form-group">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  class="form-control rounded-3"
                  placeholder="Enter image de Project"
                />
              </div>

              <div class="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  class="form-control rounded-3"
                  placeholder="Enter Description de project"
                />
              </div>

              <div class="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="description"
                  class="form-control rounded-3"
                  placeholder="Enter Title"
                />
              </div>
              <div class="form-group">
                <label>Technologie</label>
                <input
                  type="text"
                  name="techno"
                  class="form-control rounded-3"
                  placeholder="Enter Technologie"
                />
              </div>
              <div className="w-100 d-flex justify-content-between">
                <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" type="submit" >Add</button>
                <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute">Cancel</button>
              </div>
              
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default Project;
