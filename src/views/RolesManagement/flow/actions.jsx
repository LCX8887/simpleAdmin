import {
    ADD_ROLES_DETAILS,
    EDIT_ROLES_DETAILS,
    DELETE_ROLES_DETAILS,
} from './actionTypes';

export const addRolesDetails = (text) => {
    return {
        type:ADD_ROLES_DETAILS,
        payload:text,
    }
};
export const editRolesDetails = (id,text) => {
    return {
        type:EDIT_ROLES_DETAILS,
        roleID:id,
        payload:text,
    }
};
export const deleteRolesDetails = (id) => {
    return {
        type:DELETE_ROLES_DETAILS,
        roleID:id,
    }
};