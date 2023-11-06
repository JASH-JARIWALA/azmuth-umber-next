// ** MUI Imports

import Grid from '@mui/material/Grid'
import Cards from 'src/views/pages/dashboard/Cards'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Cards icon={''} stats={''} title={''} subtitle={''} trendDiff={''} />
      </Grid>
    </Grid>
  )
}

export default Home
