import { Container, Grid } from '@mui/material';
import Product from '../components/Product';


function Products( { products, addItemToCart } ) {



  return (
    <>
      <Container>

        <Grid container spacing={2} alignItems="stretch" sx={{ my: 2 }}>

          {products.map((product) => (
            <Product product={product} addItemToCart={addItemToCart} key={product.id} />
          ))}

        </Grid>

      </Container>
    </>
  )
}

export default Products;
