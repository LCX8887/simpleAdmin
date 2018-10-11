import {
    ADD_AFFILIATE_DETAILS,
    EDIT_AFFILIATE_DETAILS,
    DELETE_AFFILIATE_DETAILS,
} from './actionTypes';

export const addAffiliateDetails = (obj) => {
    return {
        type:ADD_AFFILIATE_DETAILS,
        payload:obj,
    }
};
export const editAffiliateDetails = (id,obj) => {
    return {
        type:EDIT_AFFILIATE_DETAILS,
        affiliateID:id,
        payload:obj,
    }
};
export const deleteAffiliateDetails = (id) => {
    return {
        type:DELETE_AFFILIATE_DETAILS,
        affiliateID:id,
    }
};