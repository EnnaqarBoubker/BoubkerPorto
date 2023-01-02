import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const CurrentPath = `${window.location.pathname}`;
    const Path = CurrentPath.substring(1)
    let Link_checker = []
    const css = "ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center"

    if (Path == "admin") {
        Link_checker[1] = css + " link__active"
    }
    else {
        Link_checker[1] = css
    }
    if (Path == "products") {
        Link_checker[2] = css + " link__active"
    }
    else {
        Link_checker[2] = css
    }
    if (Path == "categories") {
        Link_checker[3] = css + " link__active"
    }
    else {
        Link_checker[3] = css
    }
    if (Path == "codepromos") {
        Link_checker[4] = css + " link__active"
    }
    else {
        Link_checker[4] = css
    }
    if (Path == "commands") {
        Link_checker[5] = css + " link__active"
    }
    else {
        Link_checker[5] = css
    }
    if (Path == "comments") {
        Link_checker[6] = css + " link__active"
    }
    else {
        Link_checker[6] = css
    }
    if (Path == "settings") {
        Link_checker[7] = css + " link__active"
    }
    else {
        Link_checker[7] = css
    }

    return (
        <>
            <div>
                <header>
                    <div className="side__bar p-0 d-flex flex-column justify-content-start">
                        <div className="logo d-flex flex-column justify-content-center align-items-center">
                            <a className="logo-1 my-4" href="">
                                <img src="assets/images/Logo.png" alt="LOGO" />
                                <link rel="stylesheet" href="assets/css/main.css"></link>
                            </a>
                        </div>
                        <div>
                            <nav className="mt-0 mt-1">
                                <ul className="p-0">
                                    <li className={Link_checker[1]}>
                                        <Link title="Dashboard" to="/admin"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img34" src="assets/images/home.png" alt="Dashboard" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[2]}>
                                        <Link title="Projects" to="/project"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img25" src="assets/images/article.png" alt="Products" />
                                            <span>Projects</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[3]}>
                                        <Link title="Blogs" to="/blogsAdmin"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img24" src="assets/images/categorie.png" alt="Categories" />
                                            <span>Blogs</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[4]}>
                                        <Link title="CodePromos" to="/codepromos"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img24" src="assets/images/coupon.png" alt="Categories" />
                                            <span>Code Promos</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[5]}>
                                        <Link title="Commands" to="/commands"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img25" src="assets/images/command.png" alt="Categories" />
                                            <span>Commands</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[6]}>
                                        <Link title="Comments" to="/comments"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img25" src="assets/images/comment.png" alt="Comments" />
                                            <span>Comments</span>
                                        </Link>
                                    </li>
                                    <li className={Link_checker[7]}>
                                        <Link title="Settings" to="/settings"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img25" src="assets/images/settings.png" alt="Settings" />
                                            <span>Settings</span>
                                        </Link>
                                    </li>
                                    <li className="ms-0 mb-2 me-3 nav-item d-flex justify-content-start align-items-center">
                                        <Link title="LogOut" to="#"
                                            className="nav-link me-2 d-flex justify-content-center align-items-center gap-3">
                                            <img className="img25" src="assets/images/logout.png" alt="logout" />
                                            <span>LogOut</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <nav className="nav__bar d-flex justify-content-between px-4 align-items-center">

                <div className="d-flex">
                    <div className="toogle pointer d-flex">
                        <img className="tog_button" src="assets/images/tog.png" alt="toogle" />
                    </div>
                    <input className="input_search " type="text" placeholder="Search" />
                    <a href="">
                        <img className="input_button" src="assets/images/search.png" alt="img" />
                    </a>
                </div>

                <div className="item-admin d-flex justify-content-between gap-3 align-items-center">
                    <Link className="d-flex adminName nav-link text-black pointer m-0" to="/settings">
                        <img className="mx-3" src="assets/images/user.png" width="35px" height="35px" alt="user" />
                        <span className="mx-1 my-1">User Name</span>
                    </Link>
                    <Link to="/settings">
                        <img className='settings_button' src="assets/images/settings.png" alt="param" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default SideBar