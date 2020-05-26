import React,{Component} from 'react';


class History extends Component{


    render() {
        let expenses;
        if(window.localStorage){
            expenses=  JSON.parse(window.localStorage.getItem("expenses"));
        }
        return (
            <div>
                <ul>{
                  expenses.map(function (expense,index) {

                            return <li key={index}>{expense.name} added {expense.amount} for {expense.desc} with {expense.friends.join(",")} </li>
                    })
                }

                </ul>
            </div>
        );
    }

}

export default History;
