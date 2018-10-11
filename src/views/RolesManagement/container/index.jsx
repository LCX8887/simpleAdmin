import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRolesDetails,editRolesDetails,deleteRolesDetails } from '../flow/actions';
import AddRoles from '../components/AddRoles';
import RolesDetails from '../components/RolesDetails';
import ClassNames from 'classnames';
import './index.css';

class RolesManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments:['Warehoues','Back Office','Operation'],
            permissions:[{'permissionClass':'Administration','permissionName':['Administration','Roles','Add Users']},
                        {'permissionClass':'Client','permissionName':['Client','Accounts','Sub Accounts','Leads']},
                        {'permissionClass':'Task','permissionName':['Task','Affiliate','Document']},
                        {'permissionClass':'Affiliate Setting','permissionName':['Affiliate Setting']},
                        {'permissionClass':'Treasury','permissionName':['Treasury','Marketing Material','Freight Setting']}],
            operations:['Add','Delete','Edit','View'],
            authority:[],
            department:'Warehouse',
            role:'',
            newItem:true,
            rolesDetailsHead:['NO.','Department','Role','Permission','Action'],
            editItemID:'',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleDetailsEdit = this.handleDetailsEdit.bind(this);
        this.handleDetailsDelete = this.handleDetailsDelete.bind(this);
       

    }
    handleAddItem(arr,item){
        arr.push(item);
        return arr;
    }
    handleDeleteItem(arr,item){
        arr.splice(arr.indexOf(item),1);
        return arr;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;

        if(this.state.newItem){
            dispatch(addRolesDetails({ 
                authority:this.state.authority.slice(0),
                department:this.state.department,
                role:this.state.role,
            }));
        }else{
            dispatch(editRolesDetails(this.state.editItemID,{ 
                authority:this.state.authority.slice(0),
                department:this.state.department,
                role:this.state.role,
               }));
        }
        this.setState({           
            authority:[],
            department:'Warehouse',
            role:'',
            newItem:true,
        });
    }       
    
    handleCancel = (e) => {
        e.preventDefault();        
        this.setState({           
            authority:[],
            department:'Warehouse',
            role:'',
            newItem:true,
        });
    }

    handleInputChange = (e) => {       
        const target = e.target;
        const value = target.value;
        const type = target.type;

        if(type==='checkbox'){
            if(target.checked){
                this.setState(() => ({
                    authority:this.handleAddItem(this.state.authority,value),
                    }))
            }else{
                this.setState(() => ({
                    authority:this.handleDeleteItem(this.state.authority,value),
                }))
            }
        }else if(type==='text'){
                this.setState((prevState) => ({
                    role:value,
                }))
        }else{
                this.setState((prevState) => ({
                    department:value,
                }))
        }
      
    }
    
    handleDetailsEdit = (e) => {
        e.preventDefault();
        var editItem={};
    
        editItem = getEditItem(this.props.rolesDetails.slice(0),e.target.name);
        this.setState({
                        editItemID:editItem.roleID,
                        authority:editItem.authority.slice(0),
                        department:editItem.department,
                        role:editItem.role,
                        newItem:false,
                    });
    }

    handleDetailsDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(deleteRolesDetails(e.target.name));
        this.setState({           
            authority:[],
            department:'Warehouse',
            role:'',
            newItem:true,
        });
    }


    render() {
        const { rolesDetails } = this.props;
        const { departments,permissions,operations,authority,department,role,rolesDetailsHead,
            editItemID,editAuthority,editDepartment,editRole, } = this.state;
        const handleInputChange = this.handleInputChange;
        const handleSubmit = this.handleSubmit;
        const handleCancel = this.handleCancel;
        const handleDetailsEdit = this.handleDetailsEdit;
        const handleDetailsDelete = this.handleDetailsDelete;

        var addRolesClassName = ClassNames({
            'addRoles': true,
            });
        var rolesDetailsClassName = ClassNames({
            'rolesDetails':true,
        });

        return (
            <div>
                <AddRoles 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleCancel={handleCancel}
                    departments={departments}
                    permissions={permissions}
                    operations={operations}
                    authority={authority}
                    department={department}
                    role={role}
                    className={addRolesClassName}                    
                />
                <RolesDetails 
                    rolesDetails={rolesDetails}
                    rolesDetailsHead={rolesDetailsHead}
                    handleDetailsEdit={handleDetailsEdit}
                    handleDetailsDelete={handleDetailsDelete}
                    className={rolesDetailsClassName}
                />
            </div>
        );
    }
}

function getEditItem(arr,id){
    var arr1 = arr.slice(0);
    for(var i=0;i<arr1.length;i++){
        if(arr1[i].roleID == parseInt(id)){
            return arr1[i];
        }
    }
}

const mapStateToProps = state => ({
    rolesDetails:state.RolesManagementReducer.rolesDetails,
});

RolesManagement.defaultProps = {
    
 }

export default connect(
  mapStateToProps,
)(RolesManagement);
