import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img src="https://www.xahara.vn/wp-content/uploads/h%C3%ACnh-%E1%BA%A3nh-Alaska-%C4%91%E1%BA%B9p-%C4%91%C3%A1ng-y%C3%AAu.jpg" alt="laptop supper" />
                        <div className="caption">
                            <h3>New Dog</h3>
                            <p>
                                17.000$
                            </p>
                            <p>
                                <a href="#" className="btn btn-success">Create Shopping Cart</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Product;