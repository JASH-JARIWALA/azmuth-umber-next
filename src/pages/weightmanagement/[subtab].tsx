// // ** Next Import
// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// // ** Third Party Imports
// import axios from 'axios'

// // ** Types
// import { InvoiceType } from 'src/types/apps/invoiceTypes'
// import { Box, Button } from '@mui/material'

// import { useRouter } from 'next/router'

// import NDRallTable from 'src/views/pages/NDR/NDRallTable'
// import ActionRequestedTable from 'src/views/pages/NDR/ActionRequested/ActionRequestedTable'

// const ReturnTable = ({ tab }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   const router = useRouter()

//   return (
//     <div>
//       <Box sx={{ display: 'flex' }}>
//         <>
//           <Button
//             variant={tab === 'WeightDiscrepancies' ? 'contained' : undefined}
//             onClick={() => router.push('/weightmanagement/WeightDiscrepancies')}
//             sx={{ mx: 2 }}
//           >
//             Weight Discrepancies
//           </Button>
//           <Button
//             variant={tab === 'WeightFreeze' ? 'contained' : undefined}
//             onClick={() => router.push('/weightmanagement/WeightFreeze')}
//             sx={{ mx: 2 }}
//           >
//             Weight Freeze
//           </Button>
//         </>
//       </Box>
//       {tab === 'WeightDiscrepancies' && (
//         <>
//           <Box sx={{ mt: 5 }}>
//             <NDRallTable />
//           </Box>
//         </>
//       )}
//       {tab === 'WeightFreeze' && (
//         <>
//           <Box sx={{ mt: 5 }}>
//             <ActionRequestedTable />
//           </Box>
//         </>
//       )}
//     </div>
//   )
// }

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [{ params: { tab: 'WeightDiscrepancies' } }, { params: { tab: 'WeightFreeze' } }],
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const res = await axios.get('/apps/invoice/invoices')
//   const invoiceData: InvoiceType[] = res.data.allData

//   return {
//     props: {
//       invoiceData,
//       tab: params?.tab
//     }
//   }
// }

// export default ReturnTable

// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { Box, Button, Divider } from '@mui/material'
import { useRouter } from 'next/router'

import NDRallTable from 'src/views/pages/NDR/NDRallTable'
import PendingReturnTable from 'src/views/pages/return/PendingReturn/PendingReturnTable'

const GeneralSettingsUser = ({ tab, subtab }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Button
          variant={tab === 'WeightDiscrepancies' ? 'contained' : undefined}
          onClick={() => router.push('/weightmanagement/ActionRequired')}
        >
          Weight Discrepancies
        </Button>
        <Button
          variant={tab === 'WeightFreeze' ? 'contained' : undefined}
          onClick={() => router.push('/weightmanagement/WeightFreeze')}
        >
          Weight Freeze
        </Button>
      </Box>
      <Divider sx={{ my: '12px' }}></Divider>
      <Box sx={{ display: 'flex' }}>
        {tab === 'WeightFreeze' && (
          <>
            <Button
              variant={subtab === 'ActionRequired' ? 'contained' : undefined}
              onClick={() => router.push('/NDR/ActionRequired')}
            >
              Action Required
            </Button>
            <Button
              variant={subtab === 'RequestRaised' ? 'contained' : undefined}
              onClick={() => router.push('/NDR/ActionRequired')}
            >
              Request Raised
            </Button>
            <Button
              variant={subtab === 'RequestAccepted' ? 'contained' : undefined}
              onClick={() => router.push('/NDR/ActionRequired')}
            >
              Request Accepted
            </Button>
          </>
        )}
      </Box>
      {/* add tables according to {tab} - {subtab} */}
      {tab === 'WeightDiscrepancies' && (
        <>
          <NDRallTable />
        </>
      )}
      {subtab === 'ActionRequired' && (
        <>
          <PendingReturnTable />
        </>
      )}
      {/* {subtab === 'GlobalVirtualSeries' && (
        <>
          <Box sx={{ mt: 10 }}>
            <GlobalVirtualHeader active='' />

            <GlobalVirtualSeriesTable />
          </Box>
        </>
      )}
      {subtab === 'InventoryDownloadRequests' && (
        <>
          <Box sx={{ mt: 10 }}>
            <InventoryDownloadRequestTable />
          </Box>
        </>
      )} */}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: 'WeightFreeze', subtab: 'ActionRequired' } },
      { params: { tab: 'WeightFreeze', subtab: 'RequestRaised' } },
      { params: { tab: 'WeightFreeze', subtab: 'RequestAccepted' } },
      { params: { tab: 'WeightDiscrepancies', subtab: 'WeightDiscrepancies' } }
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
      tab: params?.tab,
      subtab: params?.subtab
    }
  }
}

export default GeneralSettingsUser
