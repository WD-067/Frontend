import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}

export default ProductDetails;
