import { database } from "../database/config";

export function  LoadCategories () {
  return (dispatch) => {
    return database.ref('category').once('value').then(response => {
      let categories = []
      response.forEach(item => {
        categories.push(item.val())
      })
      dispatch({ type: "LOAD_CATEGORY", payload: categories})
    })
  }
}
export function  LoadAds () {
  return (dispatch) => {
    return database.ref('ads').once('value').then(response => {
      let ads = []
      response.forEach(item => {
        ads.push(item.val())
      })
      dispatch({ type: "LOAD_ADS", payload: ads})
    })
  }
}
export function  LoadBlogs () {
  return (dispatch) => {
    return database.ref('blogs').once('value').then(response => {
      let blogs = []
      response.forEach(item => {
        blogs.push(item.val())
      })
      dispatch({ type: "LOAD_BLOGS", payload: blogs})
    })
  }
}
export function  LoadCartItems () {
  return (dispatch) => {
    return database.ref('cart-items').once('value').then(response => {
      let cartItems = []
      response.forEach(item => {
        cartItems.push(item.val())
      })
      dispatch({ type: "LOAD_CART_ITEMS", payload: cartItems})
    })
  }
}
export function  LoadInstagramView () {
  return (dispatch) => {
    return database.ref('instagram-view').once('value').then(response => {
      let instagramView = []
      response.forEach(item => {
        instagramView.push(item.val())
      })
      dispatch({ type: "LOAD_INSTAGRAM_VIEW", payload: instagramView})
    })
  }
}
export function  LoadProducts () {
  return (dispatch) => {
    return database.ref('products').once('value').then(response => {
      let products = []
      response.forEach(item => {
        products.push(item.val())
      })
      dispatch({ type: "LOAD_PRODUCTS", payload: products})
    })
  }
}
export function  LoadTopBlogs () {
  return (dispatch) => {
    return database.ref('top-blogs').once('value').then(response => {
      let topBlogs = []
      response.forEach(item => {
        topBlogs.push(item.val())
      })
      dispatch({ type: "LOAD_TOP_BLOGS", payload: topBlogs})
    })
  }
}
export function  LoadTopProducts () {
  return (dispatch) => {
    return database.ref('top-products').once('value').then(response => {
      let topProducts = []
      response.forEach(item => {
        topProducts.push(item.val())
      })
      dispatch({type: "LOAD_TOP_PRODUCTS", payload: topProducts})
    })
  }
}

///-----------comments action-------------------///
export function postComment(comment) {
  database.ref('comments/').push(comment).catch((err) => console.log(err))
}

// .then(() => {
//   return (dispatch) => {
//     return database.ref('comments').once('value').then(response => {
//       let comments = []
//       response.forEach(item => {
//         comments.push(item.val());
//       })
//       console.log(comment)
//       dispatch({ type: "LOAD_COMMENTS", payload: comments})
//     })
//   }
// })
//------------------------------------------------//

///--------------cart action------------///
export function postCart (product, id) {
  database.ref('cart/'+id).set(product).catch((err) => console.log(err))
}

export function  LoadCart () {
  return (dispatch) => {
    return database.ref('cart/').once('value').then(response => {
      let cart = []
      response.forEach(item => {
        cart.push(item.val())
      })
      dispatch({type: "LOAD_CART", payload: cart})
    }).catch(err => console.log(err))
  }
}

export function deleteProduct (id) {
  database.ref('users/' + id).remove().then(() => {
    console.log("removed")
  }).catch((err) => {
    console.log(err);
  })
}
///--------------cart--------------///

///--------------login-register-----------///
