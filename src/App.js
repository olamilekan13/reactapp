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
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color :</h3>
          <div> 
            <img className= {[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt='black colored watch'></img>            
            <img className= {classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt='red colored watch'></img>
            <img className= {classes.ProductImage} src='https://imgur.com/Mplj1YR.png' alt='blue colored watch'></img>
            <img className= {classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt='purple colored watch'></img>
          </div>

          <h3 className={classes.SectionHeading}>Featured</h3>
          <div>
            <button className= {classes.FeatureItem}>Time</button>
            <button className= {classes.FeatureItem}>Heart Rate</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
