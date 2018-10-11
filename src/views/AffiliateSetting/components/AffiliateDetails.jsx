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
                    {rolesDetails.map((rolesDetail,index) => <tr key={index}><th>{index+1}</th>
                                                <th>{rolesDetail.department}</th>
                                                <th>{rolesDetail.role}</th>
                                                <th>{rolesDetail.authority.map(item => <p>{item}</p>)}</th>
                                                <th>
                                                <button name={rolesDetail.roleID} onClick={handleDetailsEdit}>Edit</button>
                                                <button name={rolesDetail.roleID} onClick={handleDetailsDelete}>Delete</button>
                                                </th>
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