//Stripe API
//logic to make purchase

import Stripe from "stripe";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

import { getSession } from "@auth0/nextjs-auth0";

export default async function handler(req, res) {

  const session = getSession(req, res)

  const user = session?.user
  if(user){

    //user info on terminal > customer id > 'cus_Lzrbszla1stbE1'
    //console.log(user);
    const stripeId = user["http://localhost:3000/stripe_customer_id"]

    if (req.method === "POST") {
      //console.log(req.body);
      try {
        //Create checkout session view
          const session = await stripe.checkout.sessions.create({
            //what users do > kind of method, type of shipping etc...
            submit_type: "pay",
            mode: "payment",
            // customer: stripeId ? stripeId : 'generateautoId',
            customer: stripeId,
            payment_method_types: ["card"],
            shipping_address_collection: {
              allowed_countries: ["US", "CA", "FR"],
            },
            allow_promotion_codes: true,
            shipping_options: [
              { shipping_rate: "shr_1LFePcDXvFmlF2O9vNAVhAJL" },
              { shipping_rate: "shr_1LFecADXvFmlF2O9WUa3pvlc" },
            ],
            line_items: req.body.map((item) => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.title,
                    images: [item.image.data.attributes.formats.thumbnail.url],
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity,
              };
            }),
            //Bring user to the success or failed page
            //CHECKOUT_SESSION_ID is an Id with all information bellow
            success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/canceled`,
          });
        //everythings is okay ? then return the session to visualise it
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  } else {
    if (req.method === "POST") {
      //console.log(req.body);
      try {
        //Create checkout session view
          const session = await stripe.checkout.sessions.create({
            //what users do > kind of method, type of shipping etc...
            submit_type: "pay",
            mode: "payment",
            // customer: stripeId ? stripeId : 'generateautoId',
            payment_method_types: ["card"],
            shipping_address_collection: {
              allowed_countries: ["US", "CA", "FR"],
            },
            allow_promotion_codes: true,
            shipping_options: [
              { shipping_rate: "shr_1LFePcDXvFmlF2O9vNAVhAJL" },
              { shipping_rate: "shr_1LFecADXvFmlF2O9WUa3pvlc" },
            ],
            line_items: req.body.map((item) => {
              return {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: item.title,
                    images: [item.image.data.attributes.formats.thumbnail.url],
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity,
              };
            }),
            //Bring user to the success or failed page
            //CHECKOUT_SESSION_ID is an Id with all information bellow
            success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/canceled`,
          });
        //everythings is okay ? then return the session to visualise it
        res.status(200).json(session);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  }

}
