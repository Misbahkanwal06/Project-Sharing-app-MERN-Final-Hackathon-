import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Table({ formDataList }) {
  formDataList && console.log("from", formDataList);

  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const devname = params.get('devname');
  // const proTitle = params.get('proTitle');
  // const description = params.get('description');
  // const url = params.get('url');
  // console.log(params);

  return (
    <>

      <div className='container-fluid '>

        <MDBTable align='middle'>
          <MDBTableHead>
            <tr className='bg-dark text-light'>
              <th scope='col' className=' fs-5 fw-bold'>Project Title</th>
              <th scope='col' className=' fs-5 fw-bold'>Developer Name</th>
              <th scope='col' className=' fs-5 fw-bold'>Description</th>
              <th scope='col' className=' fs-5 fw-bold'>Hosted URL</th>
            </tr>
          </MDBTableHead><br />

    
          <MDBTableBody>
            {formDataList && formDataList.map((formData, index) => (
              <tr key={index}>
                <td className=' bg-info text-light '>{formData.devname}</td>
                <td className=' bg-info text-light '>{formData.proTitle}</td>
                <td className=' bg-info text-light '>{formData.description}</td>
                <td className=' bg-info text-light '>{formData.url}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>

  )
}
export default Table;



