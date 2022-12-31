import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);
  const host = "http://localhost:8080/";

  const url = "http://localhost:8080/api/project/getAllProject?_limit=4";
  useEffect(() => {
    axios
      .get(url,)
      .then((res) => {
        setData(res.data.proj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section id="blog" class="blog-area pt-125 pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section-title text-center pb-25">
                <h2 class="title">From The Projects</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {data &&
              data.map((e) => {
                return (
                  <div class="col-lg-6 col-md-8 col-sm-9 nour">
                    <div class="single-blog mt-30">
                      <div class="blog-image">
                        <img src={host+e.image}alt="Blog" />
                      </div>
                      <div class="blog-content">
                        <h4 class="blog-title">
                          <a href="blog-details.html">
                            {e.title}
                          </a>
                        </h4>
                        <span>{e.techno} </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="blog-more text-center mt-50">
                <a class="main-btn" href="#">
                  More posts
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
