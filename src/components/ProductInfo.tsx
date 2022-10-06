type ProductInfoProps = {
  product: { name: string, stocked: boolean, category: string, price: string }
};

function ProductInfo({ product }: ProductInfoProps) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductInfo;
