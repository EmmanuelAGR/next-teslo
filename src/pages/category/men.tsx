import { NextPage } from "next";

import { Typography } from "@mui/material";

import { useProducts } from "@/hooks";
import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { FullScreenLoading } from "@/components/ui";


const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout title='Teslo-Shop - Men Category' pageDescription='Encuentra los mejores productos para hombres aquí.' >
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

export default MenPage;