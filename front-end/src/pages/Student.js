import React from "react"
import axios from 'axios';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first_name: "", last_name: "", university: ""};
    this.coupon = "";

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUniversityChange = this.handleUniversityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleFirstNameChange(event) {
    this.setState({first_name: event.target.value});
  }
  
  handleLastNameChange(event) {
    this.setState({last_name: event.target.value});
  }

  handleUniversityChange(event) {
    this.setState({university: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("https://ec2-54-153-121-5.us-west-1.compute.amazonaws.com/student-database", {first_name: this.state.first_name, last_name: this.state.last_name, university: this.state.university})
      .then(res => {
        this.coupon = res.data.student.id;
        document.getElementById("coupon-code").innerHTML = "Coupon Code: " + this.coupon;
      })
  }

  render() {
    return (
       <div>
           <form onSubmit={this.handleSubmit} class="pricing-form">
              <label for="size">Name:</label>
              <input type="text" id="first_name" name="first_name" onChange={this.handleFirstNameChange} placeholder="First"></input>
              <input type="text" id="last_name" name="last_name" onChange={this.handleLastNameChange} placeholder="Last"></input><br></br>
              <label for="quantity">University:</label>
              <input type="text" id="university" name="University" onChange={this.handleUniversityChange}></input><br></br>
              <input type="submit" value= "Get Coupon" />
            </form>
            <h3></h3>
            <h3 id="coupon-code"></h3>
        </div>
    );
  }
}

export default Student;