import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Signup() {
    const [yourName, setYourName] = useState("");
    const [yourEmail, setYouremail] = useState("");
    const [yourPassword, setYourpassword] = useState("");
    const [payload, setPayload] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        const payload = { yourName, yourEmail, yourPassword }
        // setPayload(payload);
        
        try {
            const res = await axios.post('http://127.0.0.1:3003/api/user/signup', payload)
            if (res.data === "User registered successfully") {
                alert("User registered successfully");
                navigate('/SignIn');
            }
        } catch (error) {
            console.error('Error registering user', error);
        }
        console.log(payload);
        setPayload(payload);
    }
    // text-uppercase
    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className=" text-center mb-5 fw-bold text-info">Create  Account</h2>
                        <MDBInput wrapperClass='mb-3' label='Your Name' size='sm' id='form1' type='text'
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)} />
                        <MDBInput wrapperClass='mb-3' label='Your Email' size='sm' id='form2' type='email'
                            value={yourEmail}
                            onChange={(e) => setYouremail(e.target.value)} />
                        <MDBInput wrapperClass='mb-3' label='Password' size='sm' id='form3' type='password'
                            value={yourPassword}
                            onChange={(e) => setYourpassword(e.target.value)} />
                        <MDBBtn className='mb-3 w-100 gradient-custom-4' size='m'
                            onClick={register}>Register</MDBBtn>
                        <div>
                            <p>Already have an Account?</p>
                        </div>
                        <Link to='/SignIn'>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' outline color='info' size='sm'>
                                Login
                            </MDBBtn>
                        </Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Signup;


