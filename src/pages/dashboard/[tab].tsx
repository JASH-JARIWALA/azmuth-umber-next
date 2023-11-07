// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button } from '@mui/material'

import { useRouter } from 'next/router'
import DashboardPage from 'src/views/pages/dashboard/DashboardPage'

import OrderPage from 'src/views/pages/order/OrderPage'
import ShipmentPage from 'src/views/pages/Shipements/ShipmentPage'
import NDRPage from 'src/views/pages/NDR/NDRPage'
import WhatsappComm from 'src/views/pages/WhatsappComm/WhatsappComm'
import RTOPage from 'src/views/pages/RTO/RTOPage'

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
          <DashboardPage />
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
          <NDRPage />
        </>
      )}
      {tab === 'WhatsApp Comm' && (
        <>
          <WhatsappComm />
        </>
      )}
      {tab === 'RTO' && (
        <>
          <RTOPage />
        </>
      )}
      {/* {tab === 'Delays' && (
        <>
          <DelayPage />
        </>
      )} */}
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
