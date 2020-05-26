import React,{Component} from 'react';


class Balances extends Component{

    render() {
        let balances;
        if(window.localStorage){
            balances=  JSON.parse(window.localStorage.getItem("balances"));
        }
        return (
            <div>
                <ul>{
                Object.keys(balances).map(function (key,index) {
                    var currentBalance= balances[key];
                    for(let i in currentBalance) {
                        if (currentBalance.hasOwnProperty(i)) {
                            return <li key={key + index}>{key} owes {i} {currentBalance[i]}</li>
                        }
                    }
                })
                }

                </ul>
            </div>
        );
    }

}

export default Balances;
