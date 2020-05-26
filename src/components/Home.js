import React,{Component} from "react";
import AddExpense from './AddExpense';
import Balances from './Balances';
import History from './History';
class Home extends Component{

    constructor(props){
        super(props);
        this.state= {
            showAddExpense:false,
            showHistory:false,
            showBalances:false,
            showSettleBalances:false,
        }
        this.showBalances=this.showBalances.bind(this);
        this.showSettleBalances=this.showSettleBalances.bind(this);
        this.showExpenses=this.showExpenses.bind(this);
        this.showHistory=this.showHistory.bind(this);
    }

    showExpenses(){
        this.setState({
            showAddExpense:true,
        })
    }
    showHistory(){
        this.setState({
            showHistory:true,
        })
    }
    showBalances(){
        this.setState({
            showBalances:true,
        })
    }
    showSettleBalances(){
        this.setState({
            showSettleBalances:true,
        })
    }

    render(){
        return (<div>
            <header className="App-header">
                <button onClick={this.showExpenses}>
                    Add a Expense
                </button>
                <button onClick={this.showHistory}>
                    History
                </button>
                <button onClick={this.showBalances}>
                    See Balances
                </button>
                <button onClick={this.showSettleBalances}>
                    Settle Balances
                </button>

            </header>
            <div className="container">
                {this.state.showAddExpense && <AddExpense/>}
                {this.state.showBalances && <Balances/>}
                {this.state.showHistory && <History/>}
            </div>
        </div>)
    }
}

export default Home;
