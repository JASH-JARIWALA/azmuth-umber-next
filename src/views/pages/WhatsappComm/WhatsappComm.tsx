// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'
import WhatsappTable from './WhatsappTable'
import WhatsappTable1 from './WhatsappTable1'

const Home = () => {
  return (
    <Grid container spacing={6} sx={{ mt: 5 }}>
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
