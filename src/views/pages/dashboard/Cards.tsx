// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Type Import
import { CardStatsHorizontalWithDetailsProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import

import CustomAvatar from 'src/@core/components/mui/avatar'

const CardStatsHorizontalWithDetails = (props: CardStatsHorizontalWithDetailsProps) => {
  // ** Props
  const {
    sx,

    title,
    subtitle,

    avatarColor = 'primary'
  } = props

  return (
    <Card sx={{ ...sx }}>
      <CardContent sx={{ gap: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <CustomAvatar
            skin='light'
            variant='rounded'
            color={avatarColor}
            sx={{ width: 50, height: 50 }}
          ></CustomAvatar>
          <Typography sx={{ fontSize: 'bold', marginTop: 2 }}>{title}</Typography>

          <Typography variant='h6' sx={{ color: 'grey', fontSize: '12px', marginTop: 2 }}>
            {subtitle}
          </Typography>
          <CustomAvatar
            skin='light'
            variant='rounded'
            color={avatarColor}
            sx={{ width: 50, height: 30, paddingRight: 10, paddingLeft: 10, marginTop: 1 }}
          >
            +12.6%
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatsHorizontalWithDetails
