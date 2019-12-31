//State dùng để lưu trữ các gtri của một component
import React, { Component } from 'react';
import { element } from 'prop-types';

 class stateAndLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    id : 1,
                    name : 'Alaska giant black',
                    price : 15000000,
                    image : 'https://sieupet.com/sites/default/files/pictures/images/luu-y-khi-chon-mua.jpg',
                    status : true,
                },
            ],
            isActive : true,
        }
        this.onSetState = this.onSetState.bind(this);
    }

    onSetState() {
        // if(this.state.isActive === true){
        //     this.setState({
        //         isActive: false
        //     });
        // } else {
        //     this.setState({
        //         isActive: true
        //     });
        // }

        this.setState({
            isActive: !this.state.isActive
        });
    }

    render() {
        let elementes = this.state.products.map((product, index) => {
            let result = '';
            if(product.status){
                result = <tr>
                            <td>{ index }</td>
                            <td>{ product.name }</td>
                            <td><img src={ product.image } alt="Italian Trulli" widt="50px" height="50px"/></td> 
                            <td>
                                <span className="label label-success">{ product.price }</span>
                            </td>
                        </tr>
            }
            return result;
        });
        return (   
                                
            <div className="container">
                <div className="row">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { elementes }
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-default" onClick={ this.onSetState }>
                        Active : { this.state.isActive === true ? 'true' : 'false' }
                    </button>     
                </div>
            </div>         
        )
    }
 }

 export default stateAndLifeCycle;

 //So sánh props với state:
 //props: nhận dữ liệu từ bên ngoài và không thể thay đổi gtri
 //state: Dữ liệu nội bộ, có thể thay đổi gtri this.setState{}, phạm vị private trong component


 //lifecycel trong reactjs