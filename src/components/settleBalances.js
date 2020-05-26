import React,{Component} from 'react';


class AddExpense extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            settleWith:"",
            amount:""
        };
        this.onChange = this.onChange.bind(this);
    }

    settleBalance(){
       let balance = {... this.state},balances;
        if(window.localStorage){
            balances=  JSON.parse(window.localStorage.getItem("balances"));
        }

    }

    onChange(e) {
        let value =e.target.value;
        if(e.target.name == "friends"){
            value = value.split(',');
        }
        this.setState({ [e.target.name]: value });

    }
    render(){
        return(<div>
            <form>
                <div> <label>Name:</label><input name="name" id="name" onChange={this.onChange}/></div>
                <div> <label>settle With:</label><input name="settleWith" id="settleWith" onChange={this.onChange}/></div>
                <div> <label>Amount:</label><input name="amount" id="amount" onChange={this.onChange}/></div>

                <button onClick={this.settleBalance}>Settle</button>

            </form>
        </div>)
    }
}

export default AddExpense;
