import { Link, Outlet } from "react-router-dom";
import React, { useRef } from 'react';

function Header() 
{
    return (
        <>
            <nav class="navbar  bg-body-tertiary bg-success-subtle">
                <div class="container" 
                // style={{position:"fixed"}}
                >
                    <Link class="navbar-brand" to="#">
                    <div class="float-start"><img src="https://www.shutterstock.com/image-vector/tnw-logo-design-inspiration-unique-260nw-2358766697.jpg" alt="Logo" width="55" height="60" class="d-inline-block align-text-center" />
                    </div><div class="float-start ms-2 text-center"><b>Travel</b><br/><small class="text-muted">In New World</small></div>
                    </Link>
                    <ul class="nav justify-content-end fs-4">
                        <li class="nav-item">
                            <Link class="nav-link text-dark-emphasis hover-link" aria-current="page" to="Home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-dark-emphasis hover-link" to="About">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-dark-emphasis hover-link" to="Contact">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-dark-emphasis hover-link" to="Places">Places</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-dark-emphasis hover-link" to="Services">Services</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;