
const {createStore}=require("redux");

// define state

const initialState = {count: 0};
const initialState2= {
    user: [
        {name: "Azharul Islam"},
    ]
}

// action -object -type , playload

const incrementCounter =()=>{
    
    return{
        type:'INCREMENT'
    }
}

const descrementCounter=()=>{
    return{
        type:'DECREMENT',
    }
}

const addUser=()=>{
    return{
        type:'USER',
    }
}



// create reducer 


const counterReducer =(state=initialState, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            
           return{
            ...state,
            count: state.count+1,
           }
           case 'DECREMENT':
            
            return{
                ...state,
             count: state.count-1,
            }
        default:
            state;
    }
}


const store = createStore(counterReducer);

store.subscribe(()=>console.log(store.getState()));

// dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())