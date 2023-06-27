
import React from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import Title from '../layouts/Title';
import { clients } from '../../data/clients';
export const Base = () => {

    //userID get para traer tu clientes en potencias 

    return (
        <div className="w-full h-auto bg-bodyColor text-lightText px-4 py-10">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-center items-center text-center">
                    <Title title="CONTACT" des="Contact With Me" />
                </div>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col w-50'>Name</th>
                            <th scope='col w-50'>message</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {clients.map(({ _id, name, phone_number, email, subject, message }) => (


                            <tr>
                                <td>
                                    <div className='d-flex  align-items-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '45px', height: '45px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>{name} </p>
                                            <p className='text-muted mb-0'>{email}</p>
                                            <p className='text-muted mb-0'>{phone_number}</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            <MDBBadge color='success' pill>
                                                {subject}
                                            </MDBBadge>
                                        </p>
                                        <p className='text-muted mb-0'>
                                            {message}                                        </p>

                                    </div>
                                </td>
                            </tr>


                        ))}

                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );

}




