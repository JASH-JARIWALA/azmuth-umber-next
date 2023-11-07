// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'
import RTOCount from './RTOCount'
import RTOCity from './RTOCity'
import RTOCustomer from './RTOCustomer'
import RTOCouriour from './RTOCouriour'
import RTOPincode from './RTOPincode'
import RTOReason from './RTOReason'
import RTOStatus from './RTOStatus'

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

      <Grid item xs={12}>
        <RTOCount />
      </Grid>
      <Grid item xs={6}>
        <RTOStatus />
      </Grid>
      <Grid item xs={6}>
        <RTOReason />
      </Grid>
      <Grid item xs={6}>
        <RTOPincode />
      </Grid>
      <Grid item xs={6}>
        <RTOCity />
      </Grid>
      <Grid item xs={6}>
        <RTOCouriour />
      </Grid>
      <Grid item xs={6}>
        <RTOCustomer />
      </Grid>
    </Grid>
  )
}

export default Home
