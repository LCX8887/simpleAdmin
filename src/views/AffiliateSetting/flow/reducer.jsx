import {
    ADD_AFFILIATE_DETAILS,
    EDIT_AFFILIATE_DETAILS,
    DELETE_AFFILIATE_DETAILS,
} from './actionTypes';

var affiliateID = 1;
const initialState = {
    affiliateDetails:[],  
}
const addAffiliateDetails = (affiliateDetails,newAffiliate) => {
    newAffiliate['affiliateID'] = affiliateID++;
    affiliateDetails.push(newAffiliate);
    return affiliateDetails;
};
const editAffiliateDetails = (affiliateDetails,id,newAffiliate) => {
    for(var i=0;i<affiliateDetails.length;i++){
        if(affiliateDetails[i].affiliateID == parseInt(id)){
            affiliateDetails[i] = newAffiliate;
            affiliateDetails[i]['affiliateID'] = id;
            return affiliateDetails;
        }
    }
};
const deleteAffiliateDetails = (affiliateDetails,id) => {
    
    for(var i=0;i<affiliateDetails.length;i++){
        if(affiliateDetails[i].affiliateID == parseInt(id)){
            affiliateDetails.splice(i,1);
            return affiliateDetails;
        }
    }    
};
const AffiliateManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_AFFILIATE_DETAILS:
            return Object.assign({}
                ,state,
                {affiliateDetails: addAffiliateDetails(state.affiliateDetails.concat(),action.payload)}
            )
        case EDIT_AFFILIATE_DETAILS:
            return Object.assign({},
                state,
                {affiliateDetails:editAffiliateDetails(state.affiliateDetails,action.affiliateID,action.payload)},
            )
        case DELETE_AFFILIATE_DETAILS:
            return Object.assign({}
                ,state,
                {affiliateDetails: deleteAffiliateDetails(state.affiliateDetails.concat(),action.affiliateID)}
            )
        default:
            return state;
    }
};
export default AffiliateManagementReducer;