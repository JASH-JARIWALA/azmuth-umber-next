// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button } from '@mui/material'

import { useRouter } from 'next/router'
import Returnalltable from 'src/views/pages/return/Returnalltable'
import ReturnRequestTable from 'src/views/pages/return/ReturnRequests/ReturnRequestTable'
import NewReturnTable from 'src/views/pages/return/NewReturns/NewReturnTable'
import ReturnPickupTable from 'src/views/pages/return/Returnpickup/ReturnPickupTable'
import InTransitTable from 'src/views/pages/Conssigment/Intransit/InTransitTable'
import ReturnRecived from 'src/views/pages/return/RetunRecevied/ReturnRecived'
import PendingReturnTable from 'src/views/pages/return/PendingReturn/PendingReturnTable'

const ReturnTable = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <>
          <Button
            variant={tab === 'All' ? 'contained' : undefined}
            onClick={() => router.push('/return/All')}
            sx={{ mx: 2 }}
          >
            All
          </Button>
          <Button
            variant={tab === 'ReturnRequests' ? 'contained' : undefined}
            onClick={() => router.push('/return/ReturnRequests')}
            sx={{ mx: 2 }}
          >
            Return Requests
          </Button>
          <Button
            variant={tab === 'NewReturns' ? 'contained' : undefined}
            onClick={() => router.push('/return/NewReturns')}
            sx={{ mx: 2 }}
          >
            New Returns
          </Button>
          <Button
            variant={tab === 'ReturnPickupScheduled' ? 'contained' : undefined}
            onClick={() => router.push('/return/ReturnPickupScheduled')}
            sx={{ mx: 2 }}
          >
            Return Pickup Scheduled
          </Button>
          <Button
            variant={tab === 'InTransit' ? 'contained' : undefined}
            onClick={() => router.push('/return/InTransit')}
            sx={{ mx: 2 }}
          >
            In Transit
          </Button>
          <Button
            variant={tab === 'ReturnReceived' ? 'contained' : undefined}
            onClick={() => router.push('/return/ReturnReceived')}
            sx={{ mx: 2 }}
          >
            Return Received
          </Button>
          <Button
            variant={tab === 'PendingforRefund' ? 'contained' : undefined}
            onClick={() => router.push('/return/PendingforRefund')}
            sx={{ mx: 2 }}
          >
            Pending for Refund
          </Button>
        </>
      </Box>
      {tab === 'All' && (
        <>
          <Box sx={{ mt: 5 }}>
            <Returnalltable />
          </Box>
        </>
      )}
      {tab === 'ReturnRequests' && (
        <>
          <Box sx={{ mt: 5 }}>
            <ReturnRequestTable />
          </Box>
        </>
      )}
      {tab === 'NewReturns' && (
        <>
          <Box sx={{ mt: 5 }}>
            <NewReturnTable />
          </Box>
        </>
      )}
      {tab === 'ReturnPickupScheduled' && (
        <>
          <Box sx={{ mt: 5 }}>
            <ReturnPickupTable />
          </Box>
        </>
      )}
      {tab === 'InTransit' && (
        <>
          <Box sx={{ mt: 5 }}>
            <InTransitTable />
          </Box>
        </>
      )}
      {tab === 'ReturnReceived' && (
        <>
          <Box sx={{ mt: 5 }}>
            <ReturnRecived />
          </Box>
        </>
      )}
      {tab === 'PendingforRefund' && (
        <>
          <Box sx={{ mt: 5 }}>
            <PendingReturnTable />
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
      { params: { tab: 'ReturnRequests' } },
      { params: { tab: 'NewReturns' } },
      { params: { tab: 'ReturnPickupScheduled' } },
      { params: { tab: 'InTransit' } },
      { params: { tab: 'ReturnReceived' } },
      { params: { tab: 'PendingforRefund' } }
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

export default ReturnTable
