// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'
import NDRResponse from './NDRResponse'
import NDRParcel from './NDRParcel'
import NDRTableStatus from './NDRTableStatus'
import NDRTableReasonSplit from './NDRTableReasonSplit'

import NDRPieChart from './NDRPieChart'
import NDRPieChart1 from './NDRPieChart1'
import NDRSales from './NDRSales'
import NDRBuyersResponse from './NDRBuyersResponse'
import NDRSuccessTable from './NDRSuccessTable'
import NDRReason from './NDRReason'
import { Card, CardHeader, CardContent, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import CustomTextField from 'src/@core/components/mui/text-field'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='NDR' />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: -13 }}>
              {' '}
              <CustomTextField
                type='date'
                defaultValue='June 24-July 23, 2023'
                sx={{ mr: 4, mb: 2, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '10rem !important' } }}
                SelectProps={{
                  displayEmpty: true,

                  renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
                }}
              ></CustomTextField>
              <CustomTextField
                select
                defaultValue='Zone'
                sx={{ mr: 4, mb: 2, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '10rem !important' } }}
                SelectProps={{
                  displayEmpty: true,

                  renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
                }}
              >
                <MenuItem disabled value='Actions'>
                  Actions
                </MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
                <MenuItem value='Edit'>Edit</MenuItem>
                <MenuItem value='Send'>Send</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                defaultValue='Courier'
                sx={{ mr: 4, mb: 2, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '10rem !important' } }}
                SelectProps={{
                  displayEmpty: true,

                  renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
                }}
              >
                <MenuItem disabled value='Actions'>
                  Actions
                </MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
                <MenuItem value='Edit'>Edit</MenuItem>
                <MenuItem value='Send'>Send</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                defaultValue='Payment Mode'
                sx={{ mr: 4, mb: 2, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '10rem !important' } }}
                SelectProps={{
                  displayEmpty: true,

                  renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
                }}
              >
                <MenuItem disabled value='Actions'>
                  Actions
                </MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
                <MenuItem value='Edit'>Edit</MenuItem>
                <MenuItem value='Send'>Send</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                defaultValue='Shipment Mode'
                sx={{ mr: 4, mb: 2, '& .MuiFilledInput-input.MuiSelect-select': { minWidth: '10rem !important' } }}
                SelectProps={{
                  displayEmpty: true,

                  renderValue: selected => ((selected as string)?.length === 0 ? 'Actions' : (selected as string))
                }}
              >
                <MenuItem disabled value='Actions'>
                  Actions
                </MenuItem>
                <MenuItem value='Delete'>Delete</MenuItem>
                <MenuItem value='Edit'>Edit</MenuItem>
                <MenuItem value='Send'>Send</MenuItem>
              </CustomTextField>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={4}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={6}>
        <NDRResponse />
      </Grid>
      <Grid item xs={6}>
        <NDRParcel />
      </Grid>
      <Grid item xs={6}>
        <NDRTableReasonSplit />
      </Grid>
      <Grid item xs={6}>
        <NDRTableStatus />
      </Grid>
      <Grid item xs={12}>
        <NDRSales />
      </Grid>
      <Grid item xs={4}>
        <NDRPieChart />
      </Grid>
      <Grid item xs={4}>
        <NDRPieChart1 />
      </Grid>
      <Grid item xs={4}>
        <NDRBuyersResponse />
      </Grid>
      <Grid item xs={6}>
        <NDRSuccessTable />
      </Grid>
      <Grid item xs={6}>
        <NDRReason />
      </Grid>
    </Grid>
  )
}

export default Home
