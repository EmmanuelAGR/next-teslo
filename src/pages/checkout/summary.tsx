import NextLink from 'next/link';

import { Card, CardContent, Divider, Grid, Typography, Box, Button, Link } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart/OrderSummary';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
      <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

      <Grid container marginTop={3}>
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid> 

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Emmanuel Guariato</Typography>
              <Typography>323 - Persefone</Typography>
              <Typography>Stittsville, HYA 23S</Typography>
              <Typography>Miami</Typography>
              <Typography>+1 23123123</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='' fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage