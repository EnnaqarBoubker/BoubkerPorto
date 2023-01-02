import React, { useState, useEffect } from "react";
import "./project.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Project = () => {
    
  const [showModel, setShowModel] = useState(false);
  //   const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techno, setTechno] = useState("");
  const [image, setImage] = useState("");
  const host = "http://localhost:8080/";
//   const nav = useNavigate();

  const modelHandler = () => {
    setShowModel(!showModel);
  };

  const url = "http://localhost:8080/api/project/getAllProject";
  useEffect(() => {
    axios.get(url)
        .then((res) => {
          setData(res.data.proj);
        })
        .catch((err) => {
          console.log(err);
        });
   
      
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.get("title");
    formData.get("description");
    formData.get("techno");
    formData.append("image", image);

    let config = {
      method: "post",
      url: "http://localhost:8080/api/project/addProject",
      headers: {
        "content-type": "application/json",
        "content-type": "multipart/form-data",
      },
      data: formData,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.data.mess,
            timer: 1500,
        })
        setShowModel(!showModel);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };


    const deleteProject = (id) => {
        const url = `http://localhost:8080/api/project/deleteProject/${id}`;
        axios.delete(url)
            .then((res) => {
                console.log(res);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.data.mess,
                    showConfirmButton: true
                })
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    }


 

  return (
    <>
      <main className="main">
        <div className="Container p-4 ">
          <div className="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p className="">Products</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between mt-3 fw-bold">
              <div className="d-flex">
                <p className="m-0">Show</p>
                <select className="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p className="m-0">Entities</p>
              </div>
            </div>
            <div className="d-flex justify-content-end my-2 px-5 fw-bold">
              <button
                onClick={modelHandler}
                className="btn bg-danger px-3 text-blod Button_ajoute"
                data-bs-toggle="modal"
                data-bs-target="#send_to"
              >
                Ajouter Project
              </button>
            </div>
          </div>
          <div className="table-responsive card p-2">
            <table className="table table-striped Table_responsive">
              <thead>
                <tr className="rounded tr_table">
                  <th scope="col">image</th>
                  <th scope="col">title</th>
                  <th scope="col">description</th>
                  <th scope="col">delete</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((e) => {
                    return (
                        <tr className="rounded">
                        <td key={e._id} scope="col" className="img"><img src={host+e.image} /></td>
                        <td scope="col">{e.title}</td>
                        <td scope="col">{e.techno} </td>
                        <td scope="col">{e.description} </td>
                        <td scope="col"> 
                        <button className="btn btn-success" >
                         <Link style={{ color : '#fff' }} to={`/editproject/${e._id}`} >Update</Link>   
                        </button>
                        </td>
                        <td scope="col"> 
                        <button className="btn btn-danger" onClick={() => deleteProject(e._id)}>Delete</button>
                        </td>
                        </tr>
                    );

                })}
              </tbody>
            </table>
          </div>
        </div>

        {showModel && (
          <div className="boubker">
            <form
              onSubmit={(e) => handleChange(e)}
              method="post"
              encType="multipart/form-data"
            >
              <h4 className="text-center" style={{ color: "#000" }}>
                Add New Project
              </h4>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  
                  placeholder="Enter image de Project"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  variant="outlined"
                />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control rounded-3"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  className="form-control rounded-3"
                  placeholder="Enter Description de project"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>technologie</label>
                <input
                  type="text"
                  name="techno"
                  className="form-control rounded-3"
                  placeholder="Enter technologie"
                  value={techno}
                  onChange={(e) => setTechno(e.target.value)}
                />
              </div>
              <div className="w-100 d-flex justify-content-between">
                <button
                  className="btn bg-dark px-3 text-white mt-2 Button_ajoute"
                  type="submit"
                >
                  Add
                </button>
                <button className="btn bg-dark px-3 text-white mt-2 Button_ajoute">
                <Link style={{ color : '#fff' }} to='/project'>Cancel </Link>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </>
  );
};

export default Project;
