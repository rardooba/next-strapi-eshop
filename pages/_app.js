import "../styles/globals.css";
import { Provider, createClient } from "urql";

//components
import Nav from "../components/Nav";

//import Context
import { StateContext } from "../lib/context";

//to access to User statu/data in all app like email, name, picture if google sign
import { UserProvider } from "@auth0/nextjs-auth0";

import {Toaster} from 'react-hot-toast'

// const client = createClient({ url: "http://localhost:1337/graphql" }); >> env.local
const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;

//Component : is all differentes pages that i make
//Provider give us the acces to back-end with GraphQl


