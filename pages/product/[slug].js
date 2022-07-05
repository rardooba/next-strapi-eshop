import { useQuery } from "urql";

//import slug param from lib query
import { GET_PRODUCT_QUERY } from "../../lib/query";

//get IdParam from location Url
import { useRouter } from "next/router";

import {
  DetailsCss,
  InfoCss,
  QuantityCss,
  BuyBtnCss,
} from "../../styles/ProductDetailsCss";

import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

//import context
import { useStateContext } from "../../lib/context";

import toast from "react-hot-toast";

//fix qty number in new product
import { useEffect } from "react";

const ProductDetails = () => {

  //import Context
  const {qty, increaseQty, decreaseQty, onAdd, setQty} = useStateContext()
  // console.log(qty);

  //reset Qty
  // useEffect(() => {
  //   setQty(1)
  // }, [])

  //1. Fecth Slug from location page
  // const router = useRouter();
  // console.log(router);
  //2. extract just a query
  const { query } = useRouter();
  // console.log(query);

  //Fetch GraphQl data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    // variables: { slug: "bucket-hat" },
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  //Check is the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  // console.log(data);

  //extract data for single page
  const { title, description, image } = data.products.data[0].attributes;

  //Create a toast
  const notify = () => {
    // toast("Hello")
    //to have green check add .success() and put duration of shown and can put emoji after duration property > icon: '👏',
    toast.success(`${title} added to your cart`, {duration: 1500})
  }

  return (
    <DetailsCss>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <InfoCss>
        <h3>{title}</h3>
        <p>{description}</p>

        <QuantityCss>
          <span>Quantity</span>
          <button onClick={decreaseQty}><AiFillMinusCircle/></button>
          <p>{qty}</p>
          <button onClick={increaseQty}><AiFillPlusCircle/></button>
        </QuantityCss>

        <BuyBtnCss onClick={() => {
          onAdd(data.products.data[0].attributes,qty)
          notify()
          }}>Add to cart</BuyBtnCss>
      </InfoCss>
    </DetailsCss>
  );
};

export default ProductDetails;
