import {
    ADD_ROLES_DETAILS,
    EDIT_ROLES_DETAILS,
    DELETE_ROLES_DETAILS,
} from './actionTypes';

export const addRolesDetails = (obj) => {
    return {
        type:ADD_ROLES_DETAILS,
        payload:obj,
    }
};
export const editRolesDetails = (id,obj) => {
    return {
        type:EDIT_ROLES_DETAILS,
        roleID:id,
        payload:obj,
    }
};
export const deleteRolesDetails = (id) => {
    return {
        type:DELETE_ROLES_DETAILS,
        roleID:id,
    }
};