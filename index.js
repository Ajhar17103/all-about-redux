
const {createStore, combineReducers}=require("redux");

// define state

// const initialState = {
//     user:['azhar'],
//     count: 1
// };

// const initialState2= {
//     user: [
//         {name: "Azharul Islam"},
//     ]
// }

// action -object -type , playload

// const incrementCounter =()=>{
    
//     return{
//         type:'INCREMENT'
//     }
// }

// const descrementCounter=()=>{
//     return{
//         type:'DECREMENT',
//     }
// }

// const incrementByValue=(value)=>{
//     return{
//         type:'INCREMENTBYVALUE',
//         payload:value
//     }
// }

// const addUser=(value)=>{
//     return{
//         type:'USER',
//         payload:value
//     }
// }



// create reducer 


// const counterReducer =(state=initialState, action)=>{
//     switch (action.type) {
//         case 'INCREMENT':
            
//            return{
//             ...state,
//             count: state.count+1,
//            }
//            case 'DECREMENT':
            
//             return{
//                 ...state,
//              count: state.count-1,
//             }
//             case 'INCREMENTBYVALUE':
            
//                 return{
//                     ...state,
//                  count: state.count+action.payload,
//                 }
//         default:
//             state;
//     }
// }

// const userReducer=(state=initialState, action)=>{

//     if(action.type=='USER'){
//         return{
//             user:[...state.user, action.payload],
//             count:state.count+1
//         }
//     }
// }

// const store = createStore(userReducer);

// store.subscribe(()=>console.log(store.getState()));

// dispatch action

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())

// store.dispatch(incrementByValue(5))
// store.dispatch(addUser('umma jinnatunnasa'));
// store.dispatch(addUser('sathi'));


/* multiple reducer */

const initialProductState={
    products:["shirt", "pant"],
    count: 2,
 }

 /* cart state */
 const initialCartState={
    cart:["shirt"],
    count: 1,
 }


 /* action type */

 const getProducts=()=>{
    return{
        type:'GET_PRODUCTS'
    }
 }

 const addProduct=(product)=>{
   return{
    type:'ADD_PRODUCT',
    payload:product
    
   }
 }

 
 const getCart=()=>{
    return{
        type:'GET_CART'
    }
 }

 const addCart=(cart)=>{
    return{
        type:'ADD_CART',
        payload:cart

    }
 }


 /* reducer */

 const productReducer=(state=initialProductState, action)=>{

    if(action.type=='GET_PRODUCTS'){
        return{
            ...state
        }
    }
    if(action.type=='ADD_PRODUCTS'){
        return{
            products:[...state.products, action.payload],
            count:state.count+1,
        }
    }
    
 }


const cartReducer=(state=initialCartState, action)=>{
    if(action.type=='GET_CART'){
        return{
            ...state
        }
    }
  
    if(action.type=='ADD_CART'){
        return{
            cart:[...state.cart, action.payload],
            count:state.count+1
        }
    }
}
 

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
  });

 /* store */

 const store = createStore(rootReducer);

 store.subscribe(()=>console.log(store.getState()));

 store.dispatch(addProduct('longi'));
 store.dispatch(getProducts());

//  store.dispatch(addCart('shirt'));
//  store.dispatch(getCart());

