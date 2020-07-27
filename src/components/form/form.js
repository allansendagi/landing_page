import React, { Component } from 'react';
import './form.css';
import axios from 'axios';
import FocusVisible from '../focus/focus'


class Form extends Component {
	constructor(props){
		super (props);
		this.state = {
			name: '',
			email: '',
			message: ''
		}
 	}
 	onNameChange(event) {
 		this.setState({name: event.target.value})
 	}

 	onEmailChange(event){
 		this.setState({email: event.target.value})
 	}

 	onMessageChange(event){
 		this.setState({message: event.target.value})
 	}

 	resetForm(){
 		this.setState({name:'', email:'', message: ''})
 	}

 	handleSubmit(event){
 	event.preventDefault();
 	if(this.state.name==='' || this.state.message==='' || this.state.email===''){
 		alert("??")
 	} else {
 		axios({
 			method: "POST",
 			url: "https://landing-backend-three.vercel.app/send",
 			data: this.state
 		}).then((response) => {
 			if(response.data.status === 'success'){
 				alert('Message sent');
 				this.resetForm()
 			} else if(response.data.status === 'fail') {
 				alert('Message failed to send')
 			}
 		})
 	}
 }

render(){
	return (
<FocusVisible className="js-focus-visible focus-visible">
	<div className="form-box">
	 <form method="POST" onSubmit={this.handleSubmit.bind(this)}> 
	  <div className="user-box">
	        <label>Your name</label>
	        <input
	            type="text" required="" 
	            value={this.state.name}
	            onChange={this.onNameChange.bind(this)} />
	       

	  </div>
	  <div className="user-box">
	         <label>Your email</label>
	       <input type="email" 
	             className="form-control" 
	             aria-describedby="emailHelp" 
	             value={this.state.email} 
	             onChange={this.onEmailChange.bind(this)}/>
	      
		  </div>
		  <div className="user-box">
		  	   <textarea 
		  	   placeholder="Person of influence" 
		  	   className="user-box" 
		  	   rows="5" 
		  	   value={this.state.message} 
		  	   onChange={this.onMessageChange.bind(this)} />
		  </div>
		  <div className="btn-wrapper">
		    <button type="submit" className="btn-submit">Submit</button>
		  </div>
	 </form>
	 </div>
	 </FocusVisible>
	)
 }
}
export default Form;