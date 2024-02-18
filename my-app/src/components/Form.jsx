

import React from 'react'
import axios from 'axios';
import {
    // MDBRow,
    // MDBCol,
    MDBInput,
    // MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Form({ onSubmit }) {
    const [devname, setDevName] = useState("");
    const [proTitle, setProtitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate();



    const submitProject = async (e) => {
        e.preventDefault();
        const payload = { devname, proTitle, description, url }
        // setData(payload);
        try {
            const res = await axios.post('http://127.0.0.1:3003/api/user/project', payload)
            if (res.data === "Response has been Submitted") {
                console.log('Response has been Submitted');
                // console.log(res.data); 
                alert("Response has been Submitted");
                onSubmit(payload);
                navigate('/Home');


                // const queryParams = new URLSearchParams({
                //     devname,
                //     proTitle,
                //     description,
                //     url
                // });
                // const query = queryParams.toString();
                // console.log("Constructed URL:", `/Table?${query}`);
                // navigate(`/Table?${query}`);
                // if (onSubmitSuccess){
                //     onSubmitSuccess(payload);
                //     navigate('/Home'); 
                // } 

            }
        } catch (error) {
            console.log(error);
            alert("error");
        }
    }
    return (
        <div><br />
            <form className='container text-dark' >
                <MDBInput wrapperClass='mb-4' id='form6Example3' label=' Developer name'
                    value={devname}
                    onChange={(e) => setDevName(e.target.value)} />
                <MDBInput wrapperClass='mb-4' id='form6Example4' label='Project title'
                    value={proTitle}
                    onChange={(e) => setProtitle(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' type='text' id='form6Example5' label='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4' type='email' id='form6Example6' label=' Hosted URL'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} />
                <MDBBtn className='mb-4' type='submit' block onClick={submitProject}>
                    Submit
                </MDBBtn>
            </form>
        </div >
    )
}
export default Form;
