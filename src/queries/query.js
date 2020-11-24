import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query {
    smartphoneandwatch: itemsCollection (where: { category: "smartphoneandwatch"}) {
      items {
        name
        colors
        category
        id
        size
        image {
          url
        }
        descriptions
        price
        discount
        betsseller
      }
    }
    tv: itemsCollection(where:{ category :"tv"}) {
      items {
        name
        colors
        category
        id
        size
        image {
          url
        }
        descriptions
        price
        discount
        betsseller
      }
    }
    accessories: itemsCollection(where:{ category :"accessories"}) {
      items {
        name
        colors
        category
        id
        size
        image {
          url
        }
        descriptions
        price
        discount
        betsseller
      }
    }
    electronics: itemsCollection(where:{ category :"electronics"}) {
      items {
        name
        colors
        category
        id
        size
        image {
          url
        }
        descriptions
        price
        discount
        betsseller
      }
    }
  }
   
`;

export {
  GET_ITEMS
}