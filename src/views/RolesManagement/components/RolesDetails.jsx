import React from 'react';

const RolesDetails = ({ rolesDetails,rolesDetailsHead,handleDetailsEdit,handleDetailsDelete,className }) => {
    return(
        <div className={className}>
            <table id='detailsTable'>
                <thead>
                    <tr>
                        {rolesDetailsHead.map((detailsHead,index) => <th key={index}>{detailsHead}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rolesDetails.map((rolesDetail,index) => <tr key={index}><td>{index+1}</td>
                                                <td>{rolesDetail.department}</td>
                                                <td>{rolesDetail.role}</td>
                                                <td>{rolesDetail.authority.map(item => <p>{item}</p>)}</td>
                                                <td>
                                                <button name={rolesDetail.roleID} onClick={handleDetailsEdit}>Edit</button>
                                                <button name={rolesDetail.roleID} onClick={handleDetailsDelete}>Delete</button>
                                                </td>
                                            </tr>
                                                
                    )}
               </tbody>
            </table>
        </div>
    );
};
RolesDetails.defaultProps = {
    rolesDetails:[],
 }
export default RolesDetails;