import {
    ADD_ROLES_DETAILS,
    EDIT_ROLES_DETAILS,
    DELETE_ROLES_DETAILS,
} from './actionTypes';

const roleID = 0;
const initailState = {
    rolesDetails:[],
    departments:['Warehoues','Back Office','Operation'],
    permissions:[{'permissionClass':'Administration','permissionName':['Administration','Roles','Add Users']},
                {'permissionClass':'Client','permissionName':['Client','Accounts','Sub Accounts','Leads']},
                {'permissionClass':'Task','permissionName':['Task','Affiliate','Document']},
                {'permissionClass':'Affiliate Setting','permissionName':['Affiliate Setting']},
                {'permissionClass':'Treasury','permissionName':['Treasury','Marketing Material','Freight Setting']}],
    operations:['Add','Delete','Edit','View'],
}
const addRolesDetails = (rolesDetails,newRole) => {

};
const editRolesDetails = (rolesDetails,id,newRole) => {

};
const deleteRolesDetails = (rolesDetails,id) => {

};
const RolesManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_ROLES_DETAILS:
            return {
                ...state,
                rolesDetails: addRolesDetails(state.rolesDetails,action.payload),
            }
        case EDIT_ROLES_DETAILS:
            return {
                ...state,
                rolesDetails:editRolesDetails(state.rolesDetails,action.roleID,action.payload),
            }
        case DELETE_ROLES_DETAILS:
            return {
                ...state,
                rolesDetails:deleteRolesDetails(state.rolesDetails,action.roleID),
            }
        default:
            return state;
    }
};
export default RolesManagementReducer;