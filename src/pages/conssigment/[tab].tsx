// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button } from '@mui/material'

import { useRouter } from 'next/router'

import AllConssigmentTable from 'src/views/pages/Conssigment/AllConssigmentTable'
import NewConssigmentTable from 'src/views/pages/Conssigment/newconssigment/NewConssigmentTable'
import ReadyToshipTable from 'src/views/pages/Conssigment/ReadyToship/ReadyToshipTable'
import PickupTable from 'src/views/pages/Conssigment/Pickup/PickupTable'
import InTransitTable from 'src/views/pages/Conssigment/Intransit/InTransitTable'
import RTOTable from 'src/views/pages/Conssigment/RTO/RTOTable'
import DeliveredTable from 'src/views/pages/Conssigment/Delivered/DeliveredTable'

const GeneralSettingsUser = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <>
          <Button
            variant={tab === 'All' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/All')}
            sx={{ mx: 2 }}
          >
            All
          </Button>
          <Button
            variant={tab === 'New' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/New')}
            sx={{ mx: 2 }}
          >
            New
          </Button>
          <Button
            variant={tab === 'Ready To Ship' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/Ready To Ship')}
            sx={{ mx: 2 }}
          >
            Ready To Ship
          </Button>
          <Button
            variant={tab === 'Pickups' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/Pickups')}
            sx={{ mx: 2 }}
          >
            Pickups
          </Button>
          <Button
            variant={tab === 'In Transit' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/In Transit')}
            sx={{ mx: 2 }}
          >
            In Transit
          </Button>
          <Button
            variant={tab === 'Delivered' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/Delivered')}
            sx={{ mx: 2 }}
          >
            Delivered
          </Button>
          <Button
            variant={tab === 'RTO' ? 'contained' : undefined}
            onClick={() => router.push('/conssigment/RTO')}
            sx={{ mx: 2 }}
          >
            RTO
          </Button>
        </>
      </Box>
      {tab === 'All' && (
        <>
          <Box sx={{ mt: 5 }}>
            <AllConssigmentTable />
          </Box>
        </>
      )}
      {tab === 'New' && (
        <>
          <Box sx={{ mt: 5 }}>
            <NewConssigmentTable />
          </Box>
        </>
      )}
      {tab === 'Ready To Ship' && (
        <>
          <Box sx={{ mt: 5 }}>
            <ReadyToshipTable />
          </Box>
        </>
      )}
      {tab === 'Pickups' && (
        <>
          <Box sx={{ mt: 5 }}>
            <PickupTable />
          </Box>
        </>
      )}
      {tab === 'In Transit' && (
        <>
          <Box sx={{ mt: 5 }}>
            <InTransitTable />
          </Box>
        </>
      )}
      {tab === 'Delivered' && (
        <>
          <Box sx={{ mt: 5 }}>
            <DeliveredTable />
          </Box>
        </>
      )}
      {tab === 'RTO' && (
        <>
          <Box sx={{ mt: 5 }}>
            <RTOTable />
          </Box>
        </>
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'All' } },
      { params: { tab: 'New' } },
      { params: { tab: 'Ready To Ship' } },
      { params: { tab: 'Pickups' } },
      { params: { tab: 'In Transit' } },
      { params: { tab: 'Delivered' } },
      { params: { tab: 'RTO' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/apps/invoice/invoices')
  const invoiceData: InvoiceType[] = res.data.allData

  return {
    props: {
      invoiceData,
      tab: params?.tab
    }
  }
}

export default GeneralSettingsUser
