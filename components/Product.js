import { ProductCss } from "../styles/ProductCss";

//Link + add slug in extract info props
import Link from "next/link";

const Product = ({ product }) => {
  //Extract de info from props
  const { title, price, image, slug } = product.attributes;
  // console.log(product);

  return (
    <ProductCss>
      <Link href={`product/${slug}`}>
        <div className="product-img_container">
          <img src={image.data.attributes.formats.small.url} alt={title} />
        </div>
      </Link>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductCss>
  );
};

export default Product;
