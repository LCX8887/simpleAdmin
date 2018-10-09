import React from 'react';

const RolesDetails = ({ rolesDetails,rolesDetailsHead,handleDetailsEdit,handleDetailsDelete }) => {
    return(
        <div>
            <div>
                {rolesDetailsHead.map(detailsHead => <p>{detailsHead}</p>)}
            </div>
            <div>
                {rolesDetails.map((rolesDetail,index) => <ul><p>{index+1}</p>
                                                    <p>{rolesDetail.department}</p>
                                                    <p>{rolesDetail.role}</p>
                                                    <p>{rolesDetail.authority.map(item => <p>{item}</p>)}</p>
                                                    <button name={rolesDetail.roleID} onClick={handleDetailsEdit}>Edit</button>
                                                    <button name={rolesDetail.roleID} onClick={handleDetailsDelete}>Delete</button>
                                                </ul>
                                                    
                    )}
               
            </div>
            
        </div>
    );
};
RolesDetails.defaultProps = {
    rolesDetails:[],
 }
export default RolesDetails;