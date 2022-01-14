import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credits';
import Nav from './components/Nav';
import axios from 'axios'
function App() {

const [accountBalance, setAccountBalance] = useState()
const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })

const getData = async () => {
  try {
    //Local storage allows us to have the api throughout the components
    if(!localStorage.getItem("debitData")){
      const debitResponse = await axios("https://moj-api.herokuapp.com/debits");
      localStorage.setItem("debitData", JSON.stringify(debitResponse.data))
    }
    if(!localStorage.getItem("creditData")){
      const creditResponse = await axios("https://moj-api.herokuapp.com/credits")
      localStorage.setItem("creditData", JSON.stringify(creditResponse.data))
    }
  } catch (err) {
    console.error(err.message);
  }
};
useEffect(() => {
  //If local storage does not exist for debit or credit, call the api function
  if(!localStorage.getItem("debitData")){
    getData();
  }
  if(!localStorage.getItem("creditData")){
    getData()
  }
},[])

const updateBalance = () => {
  /*This is still a bit buggy, I think when localStorage is already made, sometimes the balance comes out as NaN. But if it is
  deleted and made again on home page, it will display correctly. Sometimes refreshing helps too.*/
  //parsing localStorage to add it to array
  let creditArr = JSON.parse(localStorage.getItem("creditData"))
  let debitArr = JSON.parse(localStorage.getItem("debitData"))
  let sum = 0
  //Credit adds to balance, debits subtracts
  for(let i = 0; i < creditArr.length;i++){
    sum += creditArr[i].amount
  }
  for(let i = 0; i < debitArr.length;i++){
    sum -= debitArr[i].amount
  }
  sum = Math.round(sum * 100) / 100
  setAccountBalance(sum)
}

useEffect(() => {
  //Check balance everytime we are on home page
  updateBalance()
})
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
          </Routes>
        </BrowserRouter>
    );
  }

export default App;