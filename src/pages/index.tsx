import { NextPage } from "next";

import { Typography } from "@mui/material";

import { useProducts } from "@/hooks";
import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from "@/components/ui";


const Home: NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  return (  
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aqui' >
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos para hombres</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products } />
      }
      
    </ShopLayout>
  )
}

export default Home;