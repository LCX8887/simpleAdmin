import {
    ADD_ROLES_DETAILS,
    EDIT_ROLES_DETAILS,
    DELETE_ROLES_DETAILS,
} from './actionTypes';

var roleID = 1;
const initialState = {
    rolesDetails:[],  
}
const addRolesDetails = (rolesDetails,newRole) => {
    newRole['roleID'] = roleID++;
    rolesDetails.push(newRole);
    return rolesDetails;
};
const editRolesDetails = (rolesDetails,id,newRole) => {
    for(var i=0;i<rolesDetails.length;i++){
        if(rolesDetails[i].roleID == parseInt(id)){
            rolesDetails[i] = newRole;
            return rolesDetails;
        }
    }
};
const deleteRolesDetails = (rolesDetails,id) => {
    
    for(var i=0;i<rolesDetails.length;i++){
        if(rolesDetails[i].roleID == parseInt(id)){
            rolesDetails.splice(i,1);
            return rolesDetails;
        }
    }    
};
const RolesManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_ROLES_DETAILS:
            return Object.assign({}
                ,state,
                {rolesDetails: addRolesDetails(state.rolesDetails.concat(),action.payload)}
            )
        case EDIT_ROLES_DETAILS:
            return Object.assign({},
                state,
                {rolesDetails:editRolesDetails(state.rolesDetails,action.roleID,action.payload)},
            )
        case DELETE_ROLES_DETAILS:
            return Object.assign({}
                ,state,
                {rolesDetails: deleteRolesDetails(state.rolesDetails.concat(),action.roleID)}
            )
        default:
            return state;
    }
};
export default RolesManagementReducer;