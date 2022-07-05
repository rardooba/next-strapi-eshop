export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          title
          description
          price
          slug
          image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;

//specific product
//String! > slug must be string
//slug: {eq: $slug}} > verif if the slug matches with title slug of product
export const GET_PRODUCT_QUERY = `
  query getProduct($slug: String!) {
    products(filters: {slug: {eq: $slug}}){
      data {
        attributes {
          title,
          slug,
          description,
          price,
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`