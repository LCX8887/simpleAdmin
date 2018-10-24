import {
    ADD_AFFILIATE_DETAILS,
    EDIT_AFFILIATE_DETAILS,
    DELETE_AFFILIATE_DETAILS,
} from './actionTypes';

export const addAffiliateDetails = (arr) => {
    return {
        type:ADD_AFFILIATE_DETAILS,
        payload:arr,
    }
};
export const editAffiliateDetails = (arr) => {
    return {
        type:EDIT_AFFILIATE_DETAILS,
        payload:arr,
    }
};