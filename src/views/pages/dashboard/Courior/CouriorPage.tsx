// ** MUI Imports

import Grid from '@mui/material/Grid'

import { Card, CardHeader, CardContent, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomTextField from 'src/@core/components/mui/text-field'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Courier' />
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Courier' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Courier' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Surface' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Surface' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Shipment count' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='1' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='1' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='COD Orders' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Prepaid Orders' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='1 (100%)' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='1 (100%)' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Delivered' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='1st Attempt Delivery' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='NDR Delivered' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='NDR Raised' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='RTO' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Lost/Damaged' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Typography>Pickup Performance</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Shipment Picked' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Pickup within 24hrs' disabled />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Pickup within 48hs' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Pickup in 48 + hrs' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Typography>SLA Performance</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Delivered within SLA' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone A' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone  B' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone C' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone D' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>{' '}
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone E' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>{' '}
      <Grid item xs={12}>
        <Typography>Average Delivery Time</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone A' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone  B' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone C' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone D' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>{' '}
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='Zone E' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>{' '}
      <Grid item xs={12}>
        <Typography>ODA Status</Typography>
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='ODA Pincode Count' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth placeholder='ODA Shipment Count' />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
      <Grid item xs={4}>
        <CustomTextField fullWidth />
      </Grid>
    </Grid>
  )
}

export default Home
