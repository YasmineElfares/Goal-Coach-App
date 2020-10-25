import React, {Component} from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    AddGoal(){
        console.log('this',this);
        const {title} = this.state;
        const {email} = this.props.user;
        goalRef.push({email, title});
    }

    render(){
        return(
            <div className = 'form-inline'>
                <div className = 'form-group'>
                    <input
                    className = 'form-control'
                    type = 'text'
                    placeholder = 'Add a goal'
                    style = {{marginRight: '5px'}}
                    onChange = {event => this.setState({title: event.target.value})}
                    />
                    
                    <button
                    className = 'btn btn-success'
                    type = 'button'
                    onClick = {()=> this.AddGoal()}
                    >
                     Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    //console.log('state in addGoal', state);
    return {
        user
    }
}

export default connect(mapStateToProps,null)(AddGoal);

