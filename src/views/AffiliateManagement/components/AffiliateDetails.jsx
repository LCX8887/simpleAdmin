import React from 'react';

const AffiliateDetails = ({ affiliateDetails,affiliateHead,affiliateColumn,affiliateNewItemClassName,handleInputChange
                            ,handleEditInputChange,handleDelete,affiliateEditButtonClassName,edit }) => {
    return(
        <div>
            <table id='affiliateDetailsTable'>
                <thead>
                    <tr>
                        {affiliateHead.map((affiliateHead,index) => <th key={index}>{affiliateHead}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {affiliateDetails.map((affiliateDetail,index) => 
                                            <tr key={index} id={affiliateDetail.affiliateID}>
                                                {edit?
                                                    affiliateDetail.map(item => <td><input type='text' name={item.itemKey} value={item.itemValue} onChange={handleEditInputChange}/></td>):
                                                    affiliateDetail.map(item => <td>{item.itemValue}</td>)
                                                }
                                            <td className={affiliateEditButtonClassName}><button onClick={handleDelete}>delete</button></td>                                         
                                            </tr>
                                                
                    )}
                   <tr className={affiliateNewItemClassName}> 
                        {affiliateColumn.map(item => <td><input type='text' name={item.itemKey} value={item.itemValue} onChange={handleInputChange}/></td>)}
                   </tr>
                </tbody>
            </table>
        </div>
    );
};
AffiliateDetails.defaultProps = {
    affiliateDetails:[],
    affiliateColumn:[],
 }
export default AffiliateDetails;