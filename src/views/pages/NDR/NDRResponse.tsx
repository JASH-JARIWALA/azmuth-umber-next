// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'

// ** Third Party Imports

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'

import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import

interface DataType {
  stats: string
  title: string
  progress: number
  avatarIcon: string
  avatarColor?: ThemeColor
  progressColor?: ThemeColor
}

const data: DataType[] = [
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },

  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },

  {
    progress: 59,
    title: 'Profit',
    stats: ' Seller Response',
    avatarColor: 'info',
    progressColor: 'info',
    avatarIcon: 'tabler:chart-pie-2'
  }
]

// const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
//   [theme.breakpoints.up('sm')]: {
//     paddingTop: '0 !important'
//   }
// }))

const AnalyticsEarningReports = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        sx={{ pb: 0 }}
        title='NDR Response'
        action={
          <OptionsMenu
            options={['Last Week', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mt: 6, borderRadius: 1, p: theme.spacing(4, 5) }}>
          <Grid container spacing={6}>
            {data.map((item: DataType, index: number) => (
              <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar
                    skin='light'
                    variant='rounded'
                    color={item.avatarColor}
                    sx={{ mr: 2, width: 40, height: 40 }}
                  >
                    <Icon fontSize='2.125rem' icon={item.avatarIcon} />
                  </CustomAvatar>
                  <Typography variant='h6'>{item.stats}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsEarningReports
