// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'

import ReattemptDelay from './ReattemptDelay'
import PickupDelay from './PickupDelay'
import DelayPieChart1 from './DelayPieChart1'
import DelayPieChart from './DelayPieChart'
import DelayTable from './DelayTable'
import { Card, CardHeader, CardContent, MenuItem, Box } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Delays' />
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
        <Cards icon={''} stats={''} title={'0'} subtitle={'Misrouted Shipments'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'0'} subtitle={'ODA Shipments'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'0'} subtitle={'Lost Shipments'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'0'} subtitle={'Damaged Shipments'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'0'} subtitle={'Destroyed Shipments'} trendDiff={''} />
      </Grid>

      <Grid item xs={6}>
        <PickupDelay />
      </Grid>
      <Grid item xs={6}>
        <ReattemptDelay />
      </Grid>
      <Grid item xs={4}>
        <DelayPieChart />
      </Grid>
      <Grid item xs={4}>
        <DelayPieChart1 />
      </Grid>

      <Grid item xs={4}>
        <DelayTable />
      </Grid>
    </Grid>
  )
}

export default Home
