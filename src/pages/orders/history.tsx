import { Grid, Typography, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra si la orden está pagada o no.',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return (
        params.row.paid
          ? <Chip color='success' label='Pagada' variant='outlined' />
          : <Chip color='error' label='No pagada' variant='outlined' />
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    description: 'Muestra toda la información de la orden realizada.',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={ `/orders/${ params.row.id }` } passHref legacyBehavior>
          <Link underline='always'>
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullName: 'Emmanuel Guariato' },
  { id: 2, paid: false, fullName: 'Melissa Flores' },
  { id: 3, paid: true, fullName: 'Hernando Vallejo' },
  { id: 4, paid: false, fullName: 'Emin Reyes' },
  { id: 5, paid: false, fullName: 'Eduardo Rios' },
  { id: 6, paid: true, fullName: 'Natalia Herrera' },
]

const HistoyPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente'>
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: '650px', width: '100%' }}>
          <DataGrid 
            rows={ rows }
            columns={ columns }
            pageSizeOptions={ [10] }
          />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoyPage;