import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './Props';
import Header from './components/Header';
import Product from './components/Product';
import produce from 'immer';
import { element } from 'prop-types';

class App extends Component {
  render() {
    // return (
    //   <div>
    //     <Header />
        
    //     <div className="row">
    //       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    //           <Product />
    //       </div>
    //       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
    //           <Product />
    //       </div>
    //     </div>
        
    //   </div>  
    // );
    // Sử dụng props
    var products = [
      {
        id: 1,
        name: "Alaska Gian",
        age: "3th",
        image: "https://sieupet.com/sites/default/files/pictures/images/luu-y-khi-chon-mua.jpg",
        status: true,
      },
      {
        id: 2,
        name: "Alaska whitle",
        age: "3th",
        image: "https://i.pinimg.com/originals/46/ea/29/46ea2919a69a5dc76aa61dd23cd2bc83.png",
        status: true,
      },
      {
        id: 3,
        name: "Alaska Gian",
        age: "3th",
        image: "https://www.sendo.vn/nhip-song/media/camnang/2019/09/01-10.jpg",
        status: false,
      },
    ];

    let elementors = products.map((product, index) => {
      console.log(product.id);
        return <Props 
              key={product.id}
              id={product.id}
              age = {product.age}
              name = {product.name}
              image = {product.image}
              />
    });
    return (
      <div>
          <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                  <a className="navbar-brand">Props</a>
              </div>
          </nav>
          <div className="container">
              <div className="row">
                  <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          {elementors}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
  }
}

export default App;
