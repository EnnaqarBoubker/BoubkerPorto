import React from 'react'
import Header from '../component/Header'
import Preloader from '../component/Preloader'
import Navbar from '../component/Navbar'
import About from '../component/About'
import Service from '../component/Service'
import Action from '../component/Action'
import Project from '../component/Project'
import Blogs from '../component/Blogs'
import Contact from '../component/Contact'
import Footer from '../component/Footer'








const Home = () => {
  return (
    <div>
        <Preloader />
        <Navbar />
        <Header />
        <About />
        <Service />
        <Action />
        <Project />
        <Blogs />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
