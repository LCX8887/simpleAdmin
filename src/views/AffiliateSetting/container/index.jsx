import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import './index.css';
import { addAffiliateDetails,editAffiliateDetails,deleteAffiliateDetails } from '../flow/actions';

class AffiliateSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonGroup:['Add','Edit'],
            newItem:true,
            affiliateColumn:[ {itemKey:'Group',itemValue:''},{itemKey:'Hot',itemValue:''},{itemKey:'Sale',itemValue:''},
            {itemKey:'Milk Powder',itemValue:''},{itemKey:'Health Care Products',itemValue:''},{itemKey:'Food',itemValue:''},
            {itemKey:'Body Products',itemValue:''},{itemKey:'Beauty',itemValue:''}],
            affiliateHead:[],

        };     
        this.handleAdd = this.handleAdd.bind();
        this.handleEdit = this.handleEdit.bind();
        this.handleSubmit = this.handleSubmit.bind();
        this.handleCancel = this.handleCancel.bind();

    }
    componentWillMount = ()=> {
        this.setState({
            affiliateHead:getAffiliateDetails(this.state.affiliateColumn,'itemKey'),
        });
    }
    
    handleAdd = (e) => {
        e.preventDefault();
        this.setState({           
            buttonGroup:['Save Add','Cancel Add'],
            newItem:true,
        });
    }       
    handleEdit = (e) => {
        e.preventDefault();
        this.setState({           
            buttonGroup:['Save Edit','Cancel Edit'],
            newItem:false,
        });
    }       
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        var affiliateItem = getAffiliateItem(affiliateColumn);
        if(this.state.newItem){
            dispatch(addAffiliateDetails(
                affiliateItem
            ));
        }else{
            dispatch(editAffiliateDetails(this.state.editItemID,affiliateItem));
        }
        this.setState({
            buttonGroup:['Add','Edit'],
        });
        
    }
    handleCancel = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        this.setState({
            affiliateColumn:[ {itemKey:'Group',itemValue:''},{itemKey:'Hot',itemValue:''},{itemKey:'Sale',itemValue:''},
            {itemKey:'Milk Powder',itemValue:''},{itemKey:'Health Care Products',itemValue:''},{itemKey:'Food',itemValue:''},
            {itemKey:'Body Products',itemValue:''},{itemKey:'Beauty',itemValue:''}],
            buttonGroup:['Add','Edit'],
        });
    }
    render() {
        const { affiliateDetails } = this.props;
        const { buttonGroup,affiliateHead } = this.state;
        const handleAdd = this.handleAdd;       
        const handleEdit = this.handleEdit;
        const handleSubmit = this.handleSubmit;
        const handleCancel = this.handleCancel;
        

        return (
            <div>
               <ButtonGroup
                    buttonGroup={buttonGroup}
                    handleAdd={handleAdd}      
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
               />
               <AffiliateDetails
                     affiliateDetails={affiliateDetails}
               />
            </div>
        );
    }
}

function getAffiliateDetails(arr,name){
    var result = [];
    for(var i=0;i<arr.length;i++){
        result.push(arr[i].name);
    }
    return result;
}
function getAffiliateItem(arr){
    var result = new Object();
    for(var i=0;i<arr.length;i++){
        result[arr.itemKey] = arr.itemValue;
    }
    return result;
}
const mapStateToProps = state => ({
    affiliateDetails:state.AffiliateSettingReducer.affiliateDetails,
});

AffiliateSetting.defaultProps = {
    
 }

export default connect(
  mapStateToProps,
)(AffiliateSetting);
