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

const AffiliateManagementReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_AFFILIATE_DETAILS:
            return Object.assign({}
                ,state,
                {affiliateDetails: addAffiliateDetails(state.affiliateDetails.concat(),action.payload)}
            )
        case EDIT_AFFILIATE_DETAILS:
            return Object.assign({},                
                {affiliateDetails:action.payload})
            
        default:
            return state;
    }
};
export default AffiliateManagementReducer;