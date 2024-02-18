
import React, { useState } from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    // MDBCheckbox
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function SignIn({ setUserName }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [payload, setPayload] = useState("");
    console.log(payload);
    const navigate = useNavigate();

    const logins = async (e) => {
        e.preventDefault();
        const payload = { email, password }
        // console.log(payload);
        setPayload(payload);
        try {
            const res = await axios.post('http://127.0.0.1:3003/api/user/login', payload)
            // setUserName(res.data.username);
            if (res.data.message === "login success") {
                console.log('login successfull');
                console.log("resdata",res.data.username);
                setUserName (res.data.username);
                alert("Welcome");
                navigate('/Home'); 
            }
        } catch (error) {
            console.log(error);

        }
    }
    return (

        <div>
            {/* style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }} */}
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className=" text-center text-info fw-bold mb-5">Sign in</h2>
                        <MDBInput wrapperClass='mb-3' label='Your Email' size='m' id='form2' type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <MDBInput wrapperClass='mb-3' label='Password' size='m' id='form3' type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <MDBBtn className='mb-3 w-100 gradient-custom-4' size='m'
                            onClick={logins}>SignIn</MDBBtn>
                        <div>
                            <p>Do not have an account?</p>
                        </div>
                        <Link to='/'>
                            <MDBBtn className='mb-4 w-100  gradient-custom-4' outline color='info' size='m'>
                                Create an account
                            </MDBBtn>
                        </Link>

                    </MDBCardBody>
                  
                </MDBCard>
            </MDBContainer>
            

        </div>
    )
}

export default SignIn;

