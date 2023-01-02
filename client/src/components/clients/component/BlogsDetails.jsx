import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const BlogsDetails = () => {
  
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [date, setDate] = useState("");
    const host = "http://localhost:8080/";
    const id = useParams();

    

    useEffect(() => {

        const url = `http://localhost:8080/api/Blog/getBlogById/${id.id}`;
        console.log(url);
        const getProjById = async () => {
         await axios.get(url)
          .then((res) => {
            console.log(res.data.blog.title);
            setTitle(res.data.blog.title);
            setDescription(res.data.blog.description);
            setImage(res.data.blog.image);
            setDate(res.data.blog.date);
            })
            .catch((err) => {
                console.log(err);
            });
    
        
        };
        getProjById();
      }, [])

// consommatio api the comment 

const [comment, setComment] = useState([]);
const [commentaire, setCommentaire] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");

const getComment = async () => {
    await axios.get(`http://localhost:8080/api/comment/getComment/${id.id}`)
    .then((res) => {
        console.log(res.data.comment);
        setComment(res.data.comment);
    })
    .catch((err) => {
        console.log(err);
    });
};



return (
    <>
      <main id="main">
        <div className="main-content paddsection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <div className="container-main single-main">
                    <div className="col-md-12">
                      <div className="block-main mb-30">
                        <img
                          src={host+image}
                          className="img-responsive"
                          alt="reviews2"
                        />
                        <div className="content-main single-post padDiv">
                          <div className="journal-txt">
                            <h4>
                              <a href="#">{title} </a>
                            </h4>
                          </div>
                          <div className="post-meta">
                            <ul className="list-unstyled mb-0">
                              <li className="author">
                                by:<a href="#">medsign</a>
                              </li>
                              <li className="date">
                                date:<a href="#">{date} </a>
                              </li>
                              <li className="commont">
                                <i className="ion-ios-heart-outline"></i>
                                <a href="#">3 Comments</a>
                              </li>
                            </ul>
                          </div>
                          <p className="mb-30">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="comments text-left padDiv mb-30">
                        <div className="entry-comments">
                          <h6 className="mb-30">4 comments</h6>
                          <ul className="entry-comments-list list-unstyled">
                            <li>
                              <div className="entry-comments-item">
                                <img
                                  src="assets/images/avatar.jpg"
                                  className="entry-comments-avatar"
                                  alt=""
                                />
                                <div className="entry-comments-body">
                                  <span className="entry-comments-author">
                                    Sommer Christian
                                  </span>
                                  <span>
                                    <a href="#">fev 14, 2018 at 12:48 pm</a>
                                  </span>
                                  <p className="mb-10">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nunc quam justo,
                                    ullamcorper tincidunt pellentesque in,
                                    condimentum ut enim. Aenean at pharetra
                                    diam, quis vulputate urna.{" "}
                                  </p>
                                  <a className="rep" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                             </li>
                             </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="cmt padDiv">
                        <form
                          id="comment-form"
                          method="post"
                          action=""
                          role="form"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <input
                                  id="form_name"
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Name *"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="email *"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  id="form_name"
                                  type="text"
                                  name="website"
                                  className="form-control"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <textarea
                                  id="form_message"
                                  name="message"
                                  className="form-control"
                                  placeholder="Message *"
                                  style={{ height: "200px" }}
                                  required="required"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <input
                                type="submit"
                                className="btn btn-defeault btn-send"
                                value="Send message"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogsDetails;
