import { gql } from '@apollo/client';

// const GET_All_FIELDS = gql`
//   fragment getAllFields on itemsCollection {
//       items {
//         name
//         colors
//         category
//         id
//         size
//         image {
//           url
//         }
//         descriptions
//         price
//         discount
//         betsseller
//       }
//   }

// `;


const GET_ITEMS = gql`
  query {
    allItems: itemsCollection {
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
        bestseller
      }
    }
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
        bestseller
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
        bestseller
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
        bestseller
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
        bestseller
      }
    }
  }

`;




export {
  GET_ITEMS
}