import React,{Component} from 'react';


class AddExpense extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            desc:"",
            amount:"",
            friends:[]
        };
        this.addExpense = this.addExpense.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addExpense(event){
        var amount,amountPerperson,balances,name,totalExpense;
        event.preventDefault();
        let expense ={...this.state};
        amount = this.state.amount;
        amountPerperson = amount/(this.state.friends.length+1);
        name =  expense.name;
        if(window.localStorage){
            totalExpense=  JSON.parse(window.localStorage.getItem("expenses"));
            balances=  JSON.parse(window.localStorage.getItem("balances"));
            if(!totalExpense){
                totalExpense=[];
            }
            if(!balances){

                balances={};
                this.state.friends.forEach(function (friend,index) {
                    console.log(friend,index);
                    balances[friend]={
                    };
                })
            }
        }
        totalExpense.push(expense);
        this.state.friends.forEach(function (friend,index){
            console.log(balances[friend][name]);
            let currentbal = balances[friend][name];
            if(!currentbal){
                currentbal =0;
            }
            currentbal = currentbal+ amountPerperson;
            balances[friend][name]= currentbal;
            console.log(balances[friend][name]);
        }) ;
        console.log("balanes",balances);
        window.localStorage.setItem("expenses",JSON.stringify(totalExpense));
        window.localStorage.setItem("balances",JSON.stringify(balances));
        console.log(JSON.parse(window.localStorage.getItem("balances")));

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
                <div> <label>Description:</label><input name="desc" id="desc" onChange={this.onChange}/></div>
                <div> <label>Amount:</label><input name="amount" id="amount" onChange={this.onChange}/></div>
                    <div> <label>Friends:</label><input name="friends" id="friends" onChange={this.onChange} placeholder="Enter comma seprated values"/></div>

                <button onClick={this.addExpense}>Add Expense</button>

            </form>
        </div>)
    }
}

export default AddExpense;
