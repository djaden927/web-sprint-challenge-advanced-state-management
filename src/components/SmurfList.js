import React from 'react';
import { connect } from "react-redux";
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const isLoading = props.isLoading;
    const testSmurf = props.testSmurf

    console.log(testSmurf)
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {props.testSmurf.map((s,index) => {
            return(
                <Smurf key={index} smurf={s}/>
            )
        })}
    </div>);
}

const mapStateToProps = (state) => {
    return{
        testSmurf: state.smurfArray,
        isLoading: state.isFetching
    }
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.