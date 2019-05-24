import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

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
       
    }
    render(){
            var date = new Date();
            return(  
                this.days.map(function(day,index){
                    var updated_date = new Date(date);
                    updated_date.setDate(updated_date.getDate() + index)
                    return <CalenderBox day={day} date={updated_date}/>            
                })  
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
                <CalenderRow date={this.state.current_date} />
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
