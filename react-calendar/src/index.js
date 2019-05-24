import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  
// ++++++++++++++++++++++++++++++++++++=
// REACT CALENDER
// ++++++++++++++++++++++++++++++++++++
// CalenderBox Component - used to build the individual boxes on the calender
class CalenderBox extends React.Component{
    // constructor to populate box, as well as bind handleClick function
    constructor(props){
        super(props);
        // this.state = {date: new Date(),day: props.day};
        this.state = {date: props.date,day: props.day};
        this.handleClick = this.handleClick.bind(this);
    }
    // When the box is clicked...
    handleClick(){
        // alert the current day, as proof that handleclick works
        alert(this.state.day);
    }
    // TODO
    // A companion component to handleClick which allows the user to put a 'note' in the day they click on 
    render(){
        return(
            // render the box as a button with inline styling, displaying the day of the week and the date
            <button  onClick={this.handleClick} className = "square" style={{height: 100,width: 100,backgroundColor: 'white'}}>{this.state.day + "\n" + this.state.date.toLocaleDateString()}</button>
        )
    }
}
// CalenderRow Component - Creates 7 boxes per row with the days of the week in them
class CalenderRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: 0,};
        this.days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        this.todays_date = props.date
        this.days_left = props.days_left
        this.weeks_left = this.days_left / 7;
        this.odd_days_out = this.days_left % 7;
       
    }
    render(){
            var date = new Date();
            // TODO
            // divide the number of days up into increments of 7
            // var weeks = this.weeks_left;
            var weeks = this.weeks_left;
            // if there is a remainder, store that number in its own variable
            var odd_days = this.odd_days_out;
            // for each full row, create a row of 7 days starting with the current date, and append that row to a master div
            // for each incomplete row, create the reamining number of day boxes and append that row to the master div
            // return the div
            return(  
                this.days.map(function(day,index){
                    var updated_date = new Date(date);
                    updated_date.setDate(updated_date.getDate() + index)
                    // console.log("Days left: " + days);
                    console.log("Weeks left: " + Math.floor(weeks));
                    console.log("Spare days after week: " + odd_days);
                    return (
                    <CalenderBox day={day} date={updated_date}/>            
                )})  
            )
    }
}
class CalenderBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {index: 0, number_of_days: props.number, current_date: new Date()}
        this.current_year = this.state.current_date.getYear();
        this.current_month = this.state.current_date.getMonth() + 1;
        this.current_day = this.state.current_date.getDate();
        this.days_in_month = new Date(this.current_year,this.current_month,0).getDate();
        this.days_left = this.days_in_month - this.current_day;
    }

    render(){
        for(let i = this.state.index; i < this.days_left; i++){
            return(
                <div>
                    <button>{this.state.current_date.toLocaleDateString() + " " + this.days_left}</button>
                <CalenderRow date={this.state.current_date} days_left = {this.days_left}/>
                </div>
                
    
            )
        } 
    }
}
ReactDOM.render(
    <div>
        {/* <CalenderRow />, */}
        <CalenderBoard />

    </div>, document.getElementById('root')
);