import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Blogs = () => {
    const [data, setData] = useState([]);
    const host = "http://localhost:8080/";
  
    const url = "http://localhost:8080/api/Blog/getAllBlog";
    useEffect(() => {
      axios
        .get(url,)
        .then((res) => {
          setData(res.data.blog);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);



  return (
    <>
      <section id="work" class="work-area pt-125 pb-130">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="section-title pb-25">
                <h2 class="title">My Recent Works</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="row justify-content-center">
              {data &&
              data.map((e) => {
                return (
              <div class="col-lg-6 col-md-8 col-sm-9 nour">
                <div class="single-blog mt-30">
                  <div class="blog-image">
                    <img src={host+e.image} alt="Blog" />
                  </div>
                  <div class="blog-content">
                    <h4 class="blog-title">
                      <Link to ={`/blogsDetails/${e._id}`}>
                        {e.title}
                      </Link>
                    </h4>
                    <span>{e.date} </span>
                  </div>
                </div>
              </div>
              );
              })} 
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="work-more text-center mt-50">
                <a class="main-btn" href="#">
                  more works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
