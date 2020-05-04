import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DataGrid, {
    Column,
  
    SearchPanel,
    Pager,
    Paging,
    FilterRow, HeaderFilter,FilterPanel
  } from 'devextreme-react/data-grid';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

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

const pageSizes = [5, 10, 20];

export default function UserTable() {
  return(
    <Container maxWidth="">
    <Grid container spacing={3}>
            <Grid item md={12}>
              <div className="mainContent">
              <DataGrid
        dataSource={customers}
        allowColumnReordering={false}
        showBorders={true}
        rowAlternationEnabled={false}
 
      >
 
      
        <FilterRow visible={false} />
        <FilterPanel visible={false} />
        <HeaderFilter visible={true} />
        <Paging defaultPageSize={5} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 20]}
          showInfo={true} />
        <SearchPanel visible={true}
            width={240}
            placeholder="Search..." />
        <Column dataField="AccountName" caption="Account Name" dataType="string" />
        <Column dataField="AccountNumber" caption="Account #" dataType="number" />
        <Column dataField="Policy" caption="Policy" dataType="number" />
        <Column dataField="Location" dataType="string" />
        <Column dataField="Producer" dataType="string"  />
        <Column dataField="Lastaction" caption="Last Action" dataType="string"  />
        <Column dataField="Actions" caption="Action" dataType="string" >Edit</Column>

        
      </DataGrid>
              </div>
            </Grid>
            </Grid>
            </Container>
  
  )}
