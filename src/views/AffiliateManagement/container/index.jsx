import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import './index.css';
import { addAffiliateDetails,editAffiliateDetails,deleteAffiliateDetails } from '../flow/actions';
import AffiliateDetails from '../components/AffiliateDetails';
import ButtonGroup from '../components/ButtonGroup';

class AffiliateManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonGroup:['Add','Edit'],
            newItem:true,
            andOrEdit:true,
            edit:false,
            affiliateNewItemHidden:true,
            affiliateEditButtonHidden:true,
            affiliateColumn:[ {itemKey:'Group',itemValue:''},{itemKey:'Hot',itemValue:''},{itemKey:'Sale',itemValue:''},
            {itemKey:'Milk Powder',itemValue:''},{itemKey:'Health Care Products',itemValue:''},{itemKey:'Food',itemValue:''},
            {itemKey:'Body Products',itemValue:''},{itemKey:'Beauty',itemValue:''}],
            affiliateHead:[],
            affiliateDetailsCopy:[],
            

        };     
        this.handleAdd = this.handleAdd.bind();
        this.handleEdit = this.handleEdit.bind();
        this.handleSubmit = this.handleSubmit.bind();
        this.handleCancel = this.handleCancel.bind();
        this.handleEditInputChange = this.handleEditInputChange.bind();
        this.handleDelete = this.handleDelete.bind();

    }
    componentWillMount = ()=> {
        this.setState({
            affiliateHead:getAffiliateHead(this.state.affiliateColumn,'itemKey'),
        });
    }
    componentWillReceiveProps = (nextProps) => {
        const affiliateDetails = nextProps.affiliateDetails;
        this.setState({
            affiliateDetailsCopy:getAffiliateDetailsCopy(affiliateDetails),
        });
    }
    handleAdd = (e) => {
        e.preventDefault();
        this.setState({           
            buttonGroup:['Save Add','Cancel Add'],
            newItem:true,
            andOrEdit:false,
            affiliateNewItemHidden:false,
            affiliateColumn:[ {itemKey:'Group',itemValue:''},{itemKey:'Hot',itemValue:''},{itemKey:'Sale',itemValue:''},
            {itemKey:'Milk Powder',itemValue:''},{itemKey:'Health Care Products',itemValue:''},{itemKey:'Food',itemValue:''},
            {itemKey:'Body Products',itemValue:''},{itemKey:'Beauty',itemValue:''}],
            
        });
    }       
    handleEdit = (e) => {
        e.preventDefault();
       
        this.setState({           
            buttonGroup:['Save Edit','Cancel Edit'],
            newItem:false,
            andOrEdit:false,
            affiliateEditButtonHidden:false,
            edit:true,
            
        });
    }       
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;

        if(this.state.newItem){
            dispatch(addAffiliateDetails(
                this.state.affiliateColumn
            ));
        }else{
            dispatch(editAffiliateDetails(this.state.affiliateDetailsCopy));
        }
        this.setState({
            buttonGroup:['Add','Edit'],
            andOrEdit:true,
            affiliateNewItemHidden:true,
            affiliateEditButtonHidden:true,
            edit:false,
        });
        
    }
    handleCancel = (e) => {
        e.preventDefault();
        const { dispatch,affiliateDetails } = this.props;   

        this.setState({
            affiliateColumn:[ {itemKey:'Group',itemValue:''},{itemKey:'Hot',itemValue:''},{itemKey:'Sale',itemValue:''},
            {itemKey:'Milk Powder',itemValue:''},{itemKey:'Health Care Products',itemValue:''},{itemKey:'Food',itemValue:''},
            {itemKey:'Body Products',itemValue:''},{itemKey:'Beauty',itemValue:''}],
            buttonGroup:['Add','Edit'],
            andOrEdit:true,
            affiliateNewItemHidden:true,
            affiliateEditButtonHidden:true,
            edit:false,
            affiliateDetailsCopy:getAffiliateDetailsCopy(affiliateDetails),
        });
    }
    handleInputChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const affiliateColumn = this.state.affiliateColumn;
        for(var i=0;i<affiliateColumn.length;i++){
            if(affiliateColumn[i].itemKey === name){
                this.setState({
                    affiliateColumn:getChangedColumn(affiliateColumn,i,value),
                });
            }
        }

    }
    handleEditInputChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const editingItemID = parseInt(e.target.parentElement.parentElement.id);
        const editingColumn = e.target.name;
        const affiliateDetailsCopy = this.state.affiliateDetailsCopy;
        for(var i=0;i<affiliateDetailsCopy.length;i++){
            if(affiliateDetailsCopy[i].affiliateID === editingItemID){
                this.setState({
                    affiliateDetailsCopy:getChangedAffiliateDetailsCopy(affiliateDetailsCopy,editingItemID,value,editingColumn)
                });
            }
        }
    }
    handleDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const deletingItemID = parseInt(e.target.parentElement.parentElement.id);
        const affiliateDetailsCopy = this.state.affiliateDetailsCopy;        
        this.setState({
            affiliateDetailsCopy:deleteAffiliateDetailsCopy(affiliateDetailsCopy,deletingItemID),
        });
    }
    render() {
        const { affiliateDetails } = this.props;
        const { buttonGroup,affiliateHead,andOrEdit,affiliateColumn,affiliateNewItemHidden,affiliateEditButtonHidden,
                edit,affiliateDetailsCopy } = this.state;
        const handleAdd = this.handleAdd;       
        const handleEdit = this.handleEdit;
        const handleSubmit = this.handleSubmit;
        const handleCancel = this.handleCancel;
        const handleInputChange = this.handleInputChange;
        const handleEditInputChange = this.handleEditInputChange;
        const handleDelete = this.handleDelete;
        
        var affiliateNewItemClassName = ClassNames({
            'hidden':affiliateNewItemHidden,
        });
        var affiliateEditButtonClassName = ClassNames({
            'hidden':affiliateEditButtonHidden,
        });
        

        return (
            <div>
               <ButtonGroup
                    buttonGroup={buttonGroup}
                    andOrEdit={andOrEdit}
                    handleAdd={handleAdd}      
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
               />
               <AffiliateDetails
                     affiliateDetails={affiliateDetailsCopy}
                     affiliateHead={affiliateHead}
                     affiliateColumn={affiliateColumn}
                     affiliateNewItemClassName={affiliateNewItemClassName}
                     affiliateEditButtonClassName={affiliateEditButtonClassName}
                     handleInputChange={handleInputChange}
                     handleEditInputChange={handleEditInputChange}
                     handleDelete={handleDelete}
                     edit={edit}
               />
            </div>
        );
    }
}

function getAffiliateHead(arr,name){
    var result = [];
    for(var i=0;i<arr.length;i++){
        result.push(arr[i][name]);
    }
    return result;
}
function getAffiliateDetailsCopy(arr){
    var result = [];
    if(arr.length === 0){
        return result;
    }
    for(var i=0;i<arr.length;i++){
        var newItem = [];
        for(var j=0;j<arr[i].length;j++){
            newItem.push(Object.assign({},arr[i][j]));
        }
        newItem['affiliateID'] = arr[i].affiliateID;
        result.push(newItem);
       
    }

    return result;
}
function getChangedColumn(arr,i,value){
    arr[i].itemValue=value;
    return arr;
}
function getChangedAffiliateDetailsCopy(arr,i,value,editingColumn){
    for(var j=0;j<arr[i-1].length;j++){
        if(arr[i-1][j].itemKey===editingColumn){
            arr[i-1][j].itemValue = value;
            return arr;
        }
    }
}
function deleteAffiliateDetailsCopy(arr,deletingColumn){
    arr.splice(deletingColumn-1,1);
    return arr;
}
const mapStateToProps = state => ({
    affiliateDetails:state.AffiliateManagementReducer.affiliateDetails,
});

AffiliateManagement.defaultProps = {
    
 }

export default connect(
  mapStateToProps,
)(AffiliateManagement);
