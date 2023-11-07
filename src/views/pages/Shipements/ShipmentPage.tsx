// ** MUI Imports

import Grid from '@mui/material/Grid'

import ShipementTable from './ShipementTable'
import ShipmentTable1 from './ShipmentTable1'
import ShipementCharts1 from './ShipementCharts1'
import ShipementChart from './ShipementChart'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ShipementTable />
      </Grid>
      <Grid item xs={4}>
        <ShipmentTable1 />
      </Grid>
      <Grid item xs={4}>
        <ShipementChart />
      </Grid>
      <Grid item xs={4}>
        <ShipementCharts1 />
      </Grid>
    </Grid>
  )
}

export default Home
