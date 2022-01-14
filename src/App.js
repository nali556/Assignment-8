import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import AddDebits from './components/AddDebits';
import Credits from './components/Credits';
import AddCredit from './components/AddCredit';
import Nav from './components/Nav';
import axios from 'axios'
function App() {

const [accountBalance, setAccountBalance] = useState(14568.27)
const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
// const [debitData, setDebitData] = useState([])
// const [creditData, setCreditData] = useState([])

const getData = async () => {
  try {
    //4. fetch and assign the response
    const debitResponse = await axios("https://moj-api.herokuapp.com/debits");
    const creditResponse = await axios("https://moj-api.herokuapp.com/credits")
    localStorage.setItem("debitData", JSON.stringify(debitResponse.data))
    localStorage.setItem("creditData", JSON.stringify(creditResponse.data))
    console.log(debitResponse)
    // setDebitData(debitResponse.data);
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  getData()
},[])
const mockLogIn = (logInInfo) => {
  const newUser = {...currentUser}
  newUser.userName = logInInfo.userName
  setCurrentUser(newUser)
}
    return (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
            <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
            <Route path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
            <Route path="/debits" element={<Debits/>}/>
            <Route path="/credits" element={<Credits/>}/>
            <Route path="/addDebit" element={<AddDebits/>}/>
            <Route path="/addCredit" element={<AddCredit/>}/>
          </Routes>
        </BrowserRouter>
    );
  }

export default App;