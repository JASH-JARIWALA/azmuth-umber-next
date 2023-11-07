// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'

import ReattemptDelay from './ReattemptDelay'
import PickupDelay from './PickupDelay'
import DelayPieChart1 from './DelayPieChart1'
import DelayPieChart from './DelayPieChart'
import DelayTable from './DelayTable'

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
        <DelayPieChart1 />
      </Grid>
      <Grid item xs={4}>
        <DelayTable />
      </Grid>
    </Grid>
  )
}

export default Home
