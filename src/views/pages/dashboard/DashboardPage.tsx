// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'
import EarningReports from 'src/views/pages/dashboard/EarningReports'
import InTransit from 'src/views/pages/dashboard/InTransit'
import Tracking from 'src/views/pages/dashboard/Tracking'
import RevenueReports from 'src/views/pages/dashboard/RevenueReports'
import SalesByState from 'src/views/pages/dashboard/SalesByState'
import LastTransaction from 'src/views/pages/dashboard/LastTransaction'
import ShipmentOverview from 'src/views/pages/dashboard/ShipmentOverview'

const Home = () => {
  return (
    <Grid container spacing={6} sx={{ mt: 5 }}>
      <Grid item xs={2}>
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
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={2}>
        <Cards icon={''} stats={''} title={'24.67k'} subtitle={'Total Order'} trendDiff={''} />
      </Grid>
      <Grid item xs={4}>
        {' '}
        <RevenueReports />
      </Grid>
      <Grid item xs={8}>
        {' '}
        <EarningReports />
      </Grid>
      <Grid item xs={4}>
        {' '}
        <InTransit />
      </Grid>
      <Grid item xs={8}>
        {' '}
        <Tracking />
      </Grid>
      <Grid item xs={6}>
        {' '}
        <SalesByState />
      </Grid>
      <Grid item xs={6}>
        {' '}
        <LastTransaction />
      </Grid>
      <Grid item xs={12}>
        {' '}
        <ShipmentOverview />
      </Grid>
    </Grid>
  )
}

export default Home
