// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import axios from 'axios'

// ** Types Imports

import { ProjectTableRowType } from 'src/@fake-db/types'

// ** Custom Components Imports

// ** Utils Import

interface CellType {
  row: ProjectTableRowType
}

// ** renders name column

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Date',
    headerName: 'Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Total Orders',
    headerName: 'Total Orders',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Pickup Unscheduled',
    headerName: 'Pickup Unscheduled',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Pickup Scheduled',
    headerName: 'Pickup Scheduled',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'InTransit',
    headerName: 'InTransit',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Delivered',
    headerName: 'Delivered',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Undelivered',
    headerName: 'Undelivered',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'RTO',
    headerName: 'RTO',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Lost /Damaged',
    headerName: 'Lost /Damaged',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 200,
    field: 'Cancelled',
    headerName: 'Cancelled',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
  }
]

const AnalyticsProject = () => {
  // ** State
  const [data, setData] = useState([])
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })

  useEffect(() => {
    axios.get('/pages/profile-table', { params: { q: value } }).then(response => {
      setData(response.data)
    })
  }, [value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  return data ? (
    <Card sx={{ mt: 5 }}>
      <CardHeader
        title='Shipment Overview by Courier'
        titleTypographyProps={{ sx: { mb: [2, 0] } }}
        action={<CustomTextField value={value} placeholder='Search' onChange={e => handleFilter(e.target.value)} />}
        sx={{
          py: 4,
          flexDirection: ['column', 'row'],
          '& .MuiCardHeader-action': { m: 0 },
          alignItems: ['flex-start', 'center']
        }}
      />
      <DataGrid
        autoHeight
        pagination
        rows={data}
        rowHeight={62}
        columns={columns}
        checkboxSelection
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  ) : null
}

export default AnalyticsProject
