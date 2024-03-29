import { NextPage, GetServerSideProps } from "next";

import { Box, Typography } from "@mui/material";

import { ProductList, ShopLayout } from '@/components';
import { dbProducts } from "@/database";
import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
  foundProducts: boolean,
  query: string;
}

const Home: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (  
    <ShopLayout title='Teslo-Shop - Search' pageDescription='Encuentra los mejores productos de Teslo aqui' >
      <Typography variant="h1" component="h1">Buscar producto</Typography>
      
      {
        foundProducts
          ? <Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">Término: { query }</Typography>
          : (
            <Box display="flex">
              <Typography variant="h2" sx={{ mb: 1 }}>No encontramos ningún producto</Typography>
              <Typography variant="h2" sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{ query }</Typography>
            </Box>
          )
      }

      <ProductList products={ products } />
      
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = '' } = params as { query: string };

  if ( query.length === 0) {
    return {
      redirect: {
         destination: '/',
         permanent: true
      }
    }
  }
  
  let products = await dbProducts.getProductsByTerm( query );
  const foundProducts = products.length > 0;
  
  // TODO: Retornar otros productos en caso de que no se encuentren productos.
  if ( !foundProducts ) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

export default Home;