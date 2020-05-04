import React from 'react';
import './account.css';
import logo from '../../assets/images/logo.svg';
import dashboard from '../../assets/images/dashboard.svg';
import user from '../../assets/images/user.svg';
import graph from '../../assets/images/graph.svg';
import setting from '../../assets/images/setting.svg';
import logout from '../../assets/images/logout.svg';
import DataGrid, {
    Column,
    Grouping,
   
    Pager,
    Paging,
    FilterRow, HeaderFilter,FilterPanel,Scrolling
  } from 'devextreme-react/data-grid';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './account.css';
const customers = [{
    'AccountNumber': 123456,
    'AccountName': 'Super Mart of the West',
    'Location': 'Toronto,ON',
    'Producer': 'Vasanth',
    'Policy': 1,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/10'
    
  }, {
     'AccountNumber': 45362,
    'AccountName': 'Electronics Depot',
    'Location': 'Toronto,ON',
    'Producer': 'Vasanth',
    'Policy': 1,
    'Lastaction': 'Issued Certificate',
    'RenewalDate': '2020/03/13'
  }, {

    'AccountNumber': 23654,
    'AccountName': 'K&S Music',
    'Location': 'Vancouver,BC',
    'Producer': 'Petter',
    'Policy': 2,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/10'
  }, {
   
    'AccountNumber': 132452,
    'AccountName': "Tom's Club",
    'Location': 'Toronto,ON',
    'Producer': 'Petter',
    'Policy': 2,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/17'
  }, {
 
    'AccountNumber': 98542,
    'AccountName': 'E-Mart',
    'Location': 'Ottawa,ON',
    'Producer': 'Jhonson',
    'Policy': 2,
    'Lastaction':'Property Updated',
    'RenewalDate': '2020/03/17'
  }, {
 
    'AccountNumber': 65478,
    'AccountName': 'Walters',
    'Location': 'Vancouver,BC',
    'Producer': 'Petter',
    'Policy': 3,
    'Lastaction': 'Vechicle Added',
    'RenewalDate': '2020/03/30'
  }, {
     'AccountNumber': 76532,
    'AccountName': 'StereoShack',
    'Location': 'Toronto,ON',
    'Producer': 'Petter',
    'Policy': 2,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/10'
  }, {
 
    'AccountNumber': 65483,
    'AccountName': 'Circuit Town',
    'Location': 'Ottawa,ON',
    'Producer': 'Jhonson',
    'Policy': 1,
    'Lastaction': 'Issued Certificate',
    'RenewalDate': '2020/03/11'
  }, {
  
    'AccountNumber': 324142,
    'AccountName': 'Premier Buy',
    'Location': 'Toronto,ON',
    'Producer': 'Petter',
    'Policy': 1,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/13'
  }, {

    'AccountNumber': 1234213,
    'AccountName': 'SElectrixMax',
    'Location': 'Vancouver,BC',
    'Producer': 'Jhonson',
    'Policy': 1,
    'Lastaction': 'Updated Revenue',
    'RenewalDate': '2020/03/13'
  }, {
  
    'AccountNumber': 112231,
    'AccountName': 'Video Emporium',
    'Location': 'Toronto,ON',
    'Producer': 'Petter',
    'Policy': 1,
    'Lastaction': 'Vechicle Added',
    'RenewalDate': '2020/03/12'
  }, {
    
    'AccountNumber': 223421,
    'AccountName': 'Screen Shop',
    'Location': 'Ottawa,ON',
    'Producer': 'Vasanth',
    'Policy': 2,
    'Lastaction': 'Profile Updated',
    'RenewalDate': '2020/03/17'
  }];
 
 const pageSizes = [10, 25, 50, 100];
  
  

function Account() {
    
  return (
    <div className="container-fluid" style={{paddingLeft:"0px"}}>
    <div className="row">
        <div className="col-md-2">

        <div className="nav-side-menu">
  <div className="brand"><img src={logo} alt="" width="40%" className="text-center" title="" /></div>
  <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

      <div className="menu-list">

          <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#">
                <img src={dashboard} alt="" width="25%" className="text-center" title="" />
                </a>
              </li>

              <li>
                <a href="#">
                <img src={user} alt="" width="25%" className="text-center" title="" />
                </a>
              </li>
            


              <li>
                <a href="#">
                <img src={graph} alt="" width="25%" className="text-center" title="" />
                </a>
              </li> 
              

              <li>
                <a href="#">
                <img src={setting} alt="" width="25%" className="text-center" title="" />
                </a>
              </li>
              


               

               <li style={{marginTottom:"30px"}}>
                <a href="#">
                <img src={logout} alt="" width="25%" className="text-center" title="" />
                </a>
              </li>
          </ul>
   </div>
</div>
        </div>
        <div className="col-md-10">
       {/* <div className="container"> 
        <h3 className="text-info" style={{marginTop:"30px"}}>ALL ACCOUNTS</h3>
<DataGrid
        dataSource={customers}
        allowColumnReordering={true}
        showBorders={true}
        rowAlternationEnabled={true}
 
      >
 
        <Grouping autoExpandAll={false} />
        <FilterRow visible={true} />
        <FilterPanel visible={true} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
       
        
        <Column dataField="AccountName" caption="Account Name" dataType="string" />
        <Column dataField="AccountNumber" caption="Account #" dataType="number" />
        <Column dataField="Policy" caption="Policy" dataType="number" />
        <Column dataField="Location" dataType="string" />
        <Column dataField="Producer" dataType="string"  />
        <Column dataField="Lastaction" caption="Last Action" dataType="string"  />
        <Column dataField="RenewalDate" caption="Renewal Date" dataType="date"  />

        <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
      </div> */}
        </div>
        
      
    </div>
  </div>

  );

  
}


export default Account;