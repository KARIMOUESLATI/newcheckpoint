import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
  <h2>Formulaire de contact</h2>
   <form class="form-inline" >
    <div class="form-group">
    <label for="Name">Name:</label>
      <input type="name" class="form-control" id="name" placeholder="Enter name" name="name"/>
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    
   </form> 
</div>
    </div>
  );
}

export default App;
