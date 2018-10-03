import React from 'react';

const RolesDetails = ({ rolesDetails,rolesDetailsHead,rolesDetailsAction }) => {
    return(
        <div>
            <div>
                {rolesDetailsHead.map(detailsHead => <p>{detailsHead}</p>)}
            </div>
            <div>
                {rolesDetails.map(rolesDetail => <ul><p>{rolesDetail.roleID}</p>
                                                    <p>{rolesDetail.department}</p>
                                                    <p>{rolesDetail.role}</p>
                                                    <p>{rolesDetail.authority.map(item => <p>{item}</p>)}</p>
                                                </ul>
                                                    
                    )}
            </div>
            <div>
                {rolesDetailsAction.map(detailsAction => <p>{detailsAction}</p>)}
            </div>
        </div>
    );
};

export default RolesDetails;