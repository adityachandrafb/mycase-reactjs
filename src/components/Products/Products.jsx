import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles';
import {gql, useLazyQuery} from '@apollo'

const products = [
    {id: 1, name: 'The Whole World', price: 'Rp.299.000'},
    {id: 2, name: 'Butter Life', price: 'Rp.299.000'}
]
    
function Product(props){
    const UseGetProduct = gql`
    query MyQuery($id: Int!) {
      mini_project_Product(where: {id: {_eq: $id}}) {
        gambar
        deskripsi_produk
        harga
        id
        id_category
        is_ready
        nama
      }
    }; 
    
    const [getProduct, { data, loading, error }] = useLazyQuery(UseGetProduct);
    console.log (data)
      
    useEffect(() => {
      getProduct({ 
        variables: {id:props.match.params.id}
      });
      console.log("Welcome")
    }, []);
  
    if (loading){
      return <LoadingSvg />
     }
     return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="centre" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product} />
                    </Grid>
                 ))}
            </Grid>
        </main>
    );

export default Products;