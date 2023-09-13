//create a form to take inputs like name, batch, course, email, and show this info on click of submit button.

import React, { Component } from "react";
import './Form.css';
import ShowInfo from "./App";

class Form extends Component{
     constructor(){
          super();
          this.state ={
               name: '' ,
               batch: '' ,
               course: '' ,
               email: '',
               showInfo: false
          }           
     }
      render(){
          return(
               <container>
                    <h1><u>Assignment2 Task-2:</u> Creating Form</h1>
                    <p>
                         Name: <input value={this.state.name} onChange={(e)=>{
                              this.setState({name: e.target.value})
                         }}/>
                    </p>
                    <p>
                         Batch: <input value={this.state.batch} onChange={(e)=>{
                              this.setState({batch: e.target.value})
                         }}/>
                    </p>
                    <p>
                         Course: <input value={this.state.course} onChange={(e)=>{
                              this.setState({course: e.target.value})
                         }}/>
                    </p>
                    <p>
                         Email id: <input value={this.state.email} onChange={(e)=>{
                              this.setState({email: e.target.value})
                         }}/>
                    </p>
                    <p>
                    <button onClick={()=>this.setState({showInfo:true})}>Submit</button>
                    </p>
                    <hr></hr>
                    <div className="info">
                         {this.state.showInfo == true && <ShowInfo name={this.state.name} batch={this.state.batch} course={this.state.course} email={this.state.email}/>}
                    </div>
                    {/* <div className="info">
                         <ShowInfo name={this.state.name} batch={this.state.batch} course={this.state.course} email={this.state.email}/>
                    </div> */}
                    
               </container>
          );
     }
}
export default Form;