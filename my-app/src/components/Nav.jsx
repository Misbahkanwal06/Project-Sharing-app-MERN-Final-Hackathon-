
import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
// import Button from './Button';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';


function Nav({ userName }) {
    console.log("username", userName);
    const navigate = useNavigate();
    const form = (e) => {
        e.preventDefault();
        navigate('/Form');
    }
    // linear-gradient(50deg, #00c6ff, #0072ff)
    return (
        <div>
            <>
                <MDBNavbar light style={{ background: '44, 139, 184rgb', height:70 }}>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            {/* <img
                                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                                height='30'
                                alt=''
                                loading='lazy'
                            /> */}
                        
                            <div className='fs-4 fw-bold text-info'>Welcome, {userName ? userName : "Guest"}</div>
                        </MDBNavbarBrand>
                       
                        <MDBBtn style={{ border: 'none', color: 'dark' }}
                            color='info'
                            size='sm'
                            onClick={form}>
                            Add Your Project
                        </MDBBtn>
                        
                        <Logout />

                    </MDBContainer>

                </MDBNavbar><br />
            </>
        </div>
    )
}

export default Nav;
