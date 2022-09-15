import logo from './logo.svg';
import React from 'react';
import classes from'./App.module.css';
import ProductData from './ProductData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.topbar}>
          <img src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204'alt=''></img>
        </nav> 
      </header>

      <div className = {classes.MainContainer}>
        <div className= {classes.ProductPreview}>
          <img src='https://imgur.com/iOeUBV7.png' alt='product preview'></img>
        </div>
        <div className= {classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.description}>{ProductData.description}</p>

        </div>

      </div>
    </div>
  );
}

export default App;
