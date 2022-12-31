import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header id="home" class="header-area">
        <div class="navigation fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/logo.png" alt="Logo" />
                            </a> 
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><Link to="/" class="page-scroll">  Home</Link></li>
                                    <li class="nav-item"><Link class="page-scroll" to="/about">About</Link></li>
                                    <li class="nav-item"><a class="page-scroll" href="#service">Services</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#work">Portfolio</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#blog">Blog</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div>
            </div> 
        </div> 
    </header>
    </div>
  )
}

export default Header