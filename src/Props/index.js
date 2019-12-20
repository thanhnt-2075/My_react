import React, { Component } from 'react';

class Props extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <div className="caption" key={this.props.id}>
                            <h3>{this.props.name}</h3>
                            <p>
                                <img height="335px" width="335px" src={this.props.image} alt="Smiley face" />
                            </p>
                            <p>
                                {this.props.age}
                            </p>
                            <p>
                                <a className="btn btn-primary">Create Shopping</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Props;