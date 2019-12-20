import React, { Component } from 'react';
import '../App.css';

class App extends Component {

    showInfoProduct(products){
        if(products.status){
            return (
                <h3>
                    ID : { products.id } <br />
                    Name : {products.name} <br />
                    Price : {products.price} VND<br />
                    Status : {products.status ? 'Active' : 'Pending'}
                </h3>
            )
        }
    }

    render() {
        var A = 10;
        var B = 12;
        var products = {
            id : 1,
            name : "Alaska giant",
            price : 20000000,
            status : true,
        }
        // Khai báo một arr
        var users = [
            {
                id : 1,
                name : "Alaska giant black",
                age: '3th',
            },
            {
                id : 2,
                name : "Alaska giant white",
                age: '2th',
            },
            {
                id : 3,
                name : "Alaska giant white",
                age: '3th',
            }
        ];
        // Sử lý arr đó
        var elements = users.map((user, index) => {
            return (
                // key phải là duy nhất
                <div key={index}>
                    <h2> Name : {user.name} </h2>
                    <p> Age : {user.age} </p>
                </div>
            )
        })
        return (
            <div className = "ml-30">
                {/* hiển thị biến */}
                <h2>
                    A : {A}<br />
                    B : {B}<br />
                {/* Thực thi toán tử  */}
                    A + B ={A + B}<br />
                </h2>
                {/* hiển thị 1 object */}
                { this.showInfoProduct(products) }<br/>
                {/* hiển thị arr trên */}
                <hr/>
                    { elements }
            </div>
        )
    }
}

export default App;