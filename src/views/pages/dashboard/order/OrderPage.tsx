// ** MUI Imports

import Grid from '@mui/material/Grid'
import OrderCount from './OrderCount'
import Prepaidchart from './Prepaidchart'
import BuyersChart from './BuyersChart'
import OrderTable from './OrderTable'
import TopTenTable from './TopTenTable'
import TopTenTable1 from './TopTenTable1'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OrderCount />
      </Grid>
      <Grid item xs={4}>
        <Prepaidchart />
      </Grid>
      <Grid item xs={4}>
        <BuyersChart />
      </Grid>
      <Grid item xs={4}>
        <OrderTable />
      </Grid>
      <Grid item xs={6}>
        <TopTenTable />
      </Grid>
      <Grid item xs={6}>
        <TopTenTable1 />
      </Grid>
    </Grid>
  )
}

export default Home
