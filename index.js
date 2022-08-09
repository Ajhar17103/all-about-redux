
const {createStore}=require("redux");

// define state

const initialState = {
    user:['azhar'],
    count: 1
};

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

const incrementByValue=(value)=>{
    return{
        type:'INCREMENTBYVALUE',
        payload:value
    }
}

const addUser=(value)=>{
    return{
        type:'USER',
        payload:value
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
            case 'INCREMENTBYVALUE':
            
                return{
                    ...state,
                 count: state.count+action.payload,
                }
        default:
            state;
    }
}

const userReducer=(state=initialState, action)=>{

    if(action.type=='USER'){
        return{
            user:[...state.user, action.payload],
            count:state.count+1
        }
    }
}

const store = createStore(userReducer);

store.subscribe(()=>console.log(store.getState()));

// dispatch action

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())

// store.dispatch(incrementByValue(5))
store.dispatch(addUser('umma jinnatunnasa'));
store.dispatch(addUser('sathi'));