import React from 'react';
//Displays account balance
function AccountBalance(props) {
    return (
        <div>
          Balance: {props.accountBalance}
        </div>
    );
  }

export default AccountBalance;