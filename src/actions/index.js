import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERR_MESSAGE = "ERR_MESSAGE";


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const fetchSmurfs = () => {
    return (dispatch) => {
        
        //1. Fetch_Start
        // console.log("made it here")
        dispatch(fetchStart());
        
        //2. fetch data from api
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch(fetchSuccess(res.data));
        })
        .catch(err=>{
            //4. if fetch is not successful, Fetch_Fail with error message
            console.log(err)
            dispatch(fetchFail(err));
        });

    }
}


export const fetchStart = ()=> {
    // console.log("intheaction!!!!!")
    return({type: FETCH_START});
}

export const fetchSuccess = (obj)=> {
    return({type: FETCH_SUCCESS, payload:obj});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload:error});
}

export const addSmurf = (obj)=> {
    return({type: ADD_SMURF, payload:obj});
}

export const errMessage = (error)=> {
    return({type: ERR_MESSAGE, payload:error});
}




