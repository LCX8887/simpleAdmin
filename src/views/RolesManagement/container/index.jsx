import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRolesDetails,editRolesDetails,deleteRolesDetails } from '../flow/actions';
import AddRoles from '../components/AddRoles';
import RolesDetails from '../components/RolesDetails';
import EditPannel from '../components/EditPannel';
import ClassNames from 'classnames';


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
            rolesDetailsHead:['NO.','Department','Role','Permission','Action'],
            editPannelHidden:true,
            editItemID:'',
            editAuthority:[],
            editDepartment:'',
            editRole:'',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleDetailsEdit = this.handleDetailsEdit.bind(this);
        this.handleDetailsDelete = this.handleDetailsDelete.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleEditCancel = this.handleEditCancel.bind(this);
        this.handleEditInputChange = this.handleEditInputChange.bind(this);
       

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
        dispatch(addRolesDetails({ 
            authority:this.state.authority.slice(0),
            department:this.state.department,
            role:this.state.role,
        }));
        this.setState({           
            authority:[],
            department:'Warehouse',
            role:'',
        });
    }       
    
    handleCancel = (e) => {
        e.preventDefault();        
        this.setState({           
            authority:[],
            department:'Warehouse',
            role:'',
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
    handleEditInputChange = (e) => {        
         const target = e.target;
         const value = target.value;
         const type = target.type;
 
         if(type==='checkbox'){
             if(target.checked){
                 this.setState(() => ({
                     editAuthority:this.handleAddItem(this.state.editAuthority,value),
                     }))
             }else{
                 this.setState(() => ({
                    editAuthority:this.handleDeleteItem(this.state.editAuthority,value),
                 }))
             }
         }else if(type==='text'){
                 this.setState((prevState) => ({
                     editRole:value,
                 }))
         }else{
                 this.setState((prevState) => ({
                     editDepartment:value,
                 }))
         }
       
    }
    
    handleEditCancel = (e) => {
        e.preventDefault();
        this.setState({editPannelHidden:true,
                        editItemID:'',
                        editAuthority:[],
                        editDepartment:'',
                        editRole:'',
        });        
    }

    handleEditSubmit = (e) =>{
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(editRolesDetails(this.state.editItemID,{ 
            authority:this.state.editAuthority.slice(0),
            department:this.state.editDepartment,
            role:this.state.editRole,
        }));
        this.setState({           
            editPannelHidden:!this.state.editPannelHidden,
            editItemID:'',
            editAuthority:[],
            editDepartment:'',
            editRole:'',
        });
    }

    handleDetailsEdit = (e) => {
        e.preventDefault();
        var editItem={};
    
        editItem = getEditItem(this.props.rolesDetails.slice(0),e.target.name);
        this.setState({editPannelHidden:!this.state.editPannelHidden,
                        editItemID:editItem.roleID,
                        editAuthority:editItem.authority.slice(0),
                        editDepartment:editItem.department,
                        editRole:editItem.role,
                    });
    }

    handleDetailsDelete = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(deleteRolesDetails(e.target.name));
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
        const handleEditSubmit = this.handleEditSubmit;
        const handleEditCancel = this.handleEditCancel;
        const handleEditInputChange = this.handleEditInputChange;
        

        var editPannelClassName = ClassNames({
            'editPannel': true,
            'hidden': this.state.editPannelHidden,
            });
        var addRolesClassName = ClassNames({
            'addRoles': true,
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
                />
                <AddRoles                  
                    handleInputChange={handleEditInputChange}
                    handleSubmit={handleEditSubmit}
                    handleCancel={handleEditCancel}                   
                    departments={departments}
                    permissions={permissions}
                    operations={operations}
                    authority={editAuthority}
                    department={editDepartment}
                    role={editRole}
                    className={editPannelClassName}
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
