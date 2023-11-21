// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'
import WhatsappTable from './WhatsappTable'
import WhatsappTable1 from './WhatsappTable1'
import { Card, CardHeader, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import CustomTextField from 'src/@core/components/mui/text-field'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Whatsapp Comm' />
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
      <Grid item xs={4}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={6}>
        <WhatsappTable />
      </Grid>
      <Grid item xs={6}>
        <WhatsappTable1 />
      </Grid>
      {/* <Grid item xs={6}>
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
      </Grid> */}
    </Grid>
  )
}

export default Home
