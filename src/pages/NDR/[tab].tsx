// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button } from '@mui/material'

import { useRouter } from 'next/router'

import NDRallTable from 'src/views/pages/NDR/NDRallTable'
import ActionRequestedTable from 'src/views/pages/NDR/ActionRequested/ActionRequestedTable'
import DeliveredTable from 'src/views/pages/Conssigment/Delivered/DeliveredTable'
import RTOTable from 'src/views/pages/Conssigment/RTO/RTOTable'

const ReturnTable = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <>
          <Button
            variant={tab === 'ActionRequired' ? 'contained' : undefined}
            onClick={() => router.push('/NDR/ActionRequired')}
            sx={{ mx: 2 }}
          >
            Action Required
          </Button>
          <Button
            variant={tab === 'ActionRequested' ? 'contained' : undefined}
            onClick={() => router.push('/NDR/ActionRequested')}
            sx={{ mx: 2 }}
          >
            Action Requested
          </Button>
          <Button
            variant={tab === 'Delivered' ? 'contained' : undefined}
            onClick={() => router.push('/NDR/Delivered')}
            sx={{ mx: 2 }}
          >
            Delivered
          </Button>
          <Button
            variant={tab === 'RTO' ? 'contained' : undefined}
            onClick={() => router.push('/NDR/RTO')}
            sx={{ mx: 2 }}
          >
            RTO
          </Button>
        </>
      </Box>
      {tab === 'ActionRequired' && (
        <>
          <Box sx={{ mt: 5 }}>
            <NDRallTable />
          </Box>
        </>
      )}
      {tab === 'ActionRequested' && (
        <>
          <Box sx={{ mt: 5 }}>
            <ActionRequestedTable />
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
      { params: { tab: 'ActionRequired' } },
      { params: { tab: 'ActionRequested' } },
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

export default ReturnTable
