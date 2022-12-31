import React from "react";
import { useEffect, useState  } from "react";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "./project.css";
import Swal from 'sweetalert2'

const EditProject = () => {
  const id = useParams();
  console.log(id);
//   const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techno, setTechno] = useState("");
  const [image, setImage] = useState("");
  const host = "http://localhost:8080/";
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:8080/api/project/getProjectById/${id.id}`;
    
    const getProjById = async () => {
     await axios.get(url)
      .then((res) => {
        
        setTitle(res.data.title);
        setDescription(res.data.description);
        setTechno(res.data.techno);
        setImage(res.data.image);
        })
        .catch((err) => {
            console.log(err);
        });

    //   console.log(data);
    };
    getProjById();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.get("title");
    formData.get("description");
    formData.get("techno");
    formData.append("image", image);

    let config = {
        method: "put",
        url: `http://localhost:8080/api/project/updateProject/${id.id}`,
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
                title: 'Project Updated',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/project");
        }
        )
        .catch((err) => {
            console.log(err);
        }
        );


  };

  return (
    <>
      <main className="main">
        <div className="boubker" style={{ margin: "47px 0" }}>
          <form
            onSubmit={(e) => handleSubmit(e)}
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
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default EditProject;
