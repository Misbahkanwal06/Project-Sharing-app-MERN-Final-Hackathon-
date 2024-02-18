import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    }

    return (
        <div>
            <MDBBtn style={{ border: 'none', color: 'dark' }}
                color='dark'
                size='sm'
                onClick={logout}>
                LogOut
            </MDBBtn>
        </div>
    )
}

export default Logout;
