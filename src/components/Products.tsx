import './Products.css'
import Category from './Category'
import ProductInfo from './ProductInfo'


type ProductProps = {
  products: { category:string,price:string,stocked:boolean,name: string}[];
  isInStock: boolean;
  filterText: string;
};



function Product({ products, isInStock, filterText }: ProductProps) {
    const rows:any = [];
  let lastCategory:string = '';

  products.forEach((product:{name:string,stocked:boolean,category:string,price:string}) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (isInStock && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <Category
          category={product.category}
         />
      );
    }
    rows.push(
      <ProductInfo
        product={product}
         />
    );
    lastCategory = product.category;
  });
  return <><table className="producttable">
  <tr>
    <th>Name</th>
    <th>Price</th>
    
  </tr>
  <tbody>{rows}</tbody>
  <></>
   
</table></>;
}

export default Product;
