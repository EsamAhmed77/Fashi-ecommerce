export default function reducer(
    state = {
      categories: [],
      ads: [],
      blogs: [],
      cartItems: [],
      instagramView: [],
      products: [],
      topBlogs: [],
      topProducts: [],
      comments: [],
      cart: []
    },
    action
) {
  switch (action.type) {
    case "LOAD_CATEGORY":
      return {...state, categories: action.payload};
    case "LOAD_ADS":
      return {...state, ads: action.payload};
    case "LOAD_BLOGS":
      return {...state, blogs: action.payload};
   case "LOAD_CART_ITEMS":
      return {...state, cartItems: action.payload};
    case "LOAD_INSTAGRAM_VIEW":
      return {...state, instagramView: action.payload};
    case "LOAD_PRODUCTS":
      return {...state, products: action.payload};
    case "LOAD_TOP_BLOGS":
      return {...state, topBlogs: action.payload};
    case "LOAD_TOP_PRODUCTS":
      return {...state, topProducts: action.payload};
    case "LOAD_COMMENTS":
      return {...state, comments: action.payload};
    case "LOAD_CART":
      return {...state, cart: action.payload};
    default:
      return state;
  }
}
