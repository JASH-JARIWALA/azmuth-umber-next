// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button } from '@mui/material'

import { useRouter } from 'next/router'
import DashboardPage from 'src/views/pages/dashboard/DashboardPage'

import OrderPage from 'src/views/pages/dashboard/order/OrderPage'
import ShipmentPage from 'src/views/pages/dashboard/Shipements/ShipmentPage'
import NDRPage from 'src/views/pages/dashboard/NDR/NDRPage'
import WhatsappComm from 'src/views/pages/dashboard/WhatsappComm/WhatsappComm'
import RTOPage from 'src/views/pages/dashboard/RTO/RTOPage'
import DelaysMainPage from 'src/views/pages/dashboard/Delays/DelaysMainPage'
import CouriorPage from 'src/views/pages/dashboard/Courior/CouriorPage'

const GeneralSettingsUser = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* {tab === 'Overview' && ( */}
        <>
          <Button
            variant={tab === 'Overview' ? 'contained' : undefined}
            onClick={() => router.push('/dashboard/Overview')}
          >
            Overview
          </Button>
          <Button variant={tab === 'Order' ? 'contained' : undefined} onClick={() => router.push('/dashboard/Order')}>
            Order
          </Button>
          <Button
            variant={tab === 'Shipments' ? 'contained' : undefined}
            onClick={() => router.push('/dashboard/Shipments')}
          >
            Shipments
          </Button>
          <Button variant={tab === 'NDR' ? 'contained' : undefined} onClick={() => router.push('/dashboard/NDR')}>
            NDR
          </Button>
          <Button
            variant={tab === 'WhatsApp Comm' ? 'contained' : undefined}
            onClick={() => router.push('/dashboard/WhatsApp Comm')}
          >
            WhatsApp Comm
          </Button>
          <Button variant={tab === 'RTO' ? 'contained' : undefined} onClick={() => router.push('/dashboard/RTO')}>
            RTO
          </Button>
          <Button
            variant={tab === 'Courier' ? 'contained' : undefined}
            onClick={() => router.push('/dashboard/Courier')}
          >
            Courier
          </Button>
          <Button variant={tab === 'Delays' ? 'contained' : undefined} onClick={() => router.push('/dashboard/Delays')}>
            Delays
          </Button>
        </>
      </Box>
      {tab === 'Overview' && (
        <>
          <Box sx={{ mt: 5 }}>
            <DashboardPage />
          </Box>
        </>
      )}
      {tab === 'Order' && (
        <>
          <OrderPage />
        </>
      )}
      {tab === 'Shipments' && (
        <>
          <ShipmentPage />
        </>
      )}
      {tab === 'NDR' && (
        <>
          <Box sx={{ mt: 5 }}>
            <NDRPage />
          </Box>
        </>
      )}
      {tab === 'WhatsApp Comm' && (
        <>
          <Box sx={{ mt: 5 }}>
            <WhatsappComm />
          </Box>
        </>
      )}
      {tab === 'RTO' && (
        <>
          <Box sx={{ mt: 5 }}>
            <RTOPage />
          </Box>
        </>
      )}
      {tab === 'Courier' && (
        <>
          <Box sx={{ mt: 5 }}>
            <CouriorPage />
          </Box>
        </>
      )}
      {tab === 'Delays' && (
        <>
          <Box sx={{ mt: 5 }}>
            <DelaysMainPage />
          </Box>
        </>
      )}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'Overview' } },
      { params: { tab: 'Order' } },
      { params: { tab: 'Shipments' } },
      { params: { tab: 'NDR' } },
      { params: { tab: 'WhatsApp Comm' } },
      { params: { tab: 'RTO' } },
      { params: { tab: 'Courier' } },
      { params: { tab: 'Delays' } }
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
