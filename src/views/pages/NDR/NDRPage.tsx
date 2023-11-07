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

const Home = () => {
  return (
    <Grid container spacing={6} sx={{ mt: 5 }}>
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
