import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Button() {

    const navigate = useNavigate();
    const form = (e) => {
        e.preventDefault();
        navigate('/Form');
    }
    return (
        <div>
            <MDBBtn style={{ border: 'none', color: 'dark' }}
                color='dark'
                size='sm'
                onClick={form}>
                Add Your Project
            </MDBBtn>
        </div>
    )
}

export default Button;
