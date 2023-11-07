// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('23', 159, 6.0, 24, 4.0),
  createData('34', 237, 9.0, 37, 4.3),
  createData('66', 262, 16.0, 24, 6.0),
  createData('78', 305, 3.7, 67, 4.3),
  createData('12', 356, 16.0, 49, 3.9),
  createData('67', 159, 6.0, 24, 4.0)
]

const TopCustomers = () => {
  return (
    <TableContainer component={Paper}>
      <h3 className='mx-2'>Top 10 Customers</h3>
      <p>Last 6 months</p>
      <Table sx={{ minWidth: 550 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>STATS</TableCell>
            <TableCell align='right'>ORDER COUNT</TableCell>
            <TableCell align='right'>REVENUE</TableCell>
            <TableCell align='right'>REVENUE %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
              <TableCell align='right'>{row.fat}</TableCell>
              <TableCell align='right'>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TopCustomers
