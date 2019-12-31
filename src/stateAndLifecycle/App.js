import React, { Component } from 'react';
import Counter from './lifecycel';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCounter: true
        };
    }

    componentDidUpdate() {
        console.log('App updated');
    }

    removeCounter() {
        this.setState({
            showCounter: false
        });
    }

    render() {
        console.log('App render');
        return (
            <div className="App">
                <button onClick={() => this.removeCounter()}>
                    Remover Counter
                </button>
                { this.state.showCounter && <Counter /> }
                {/* kiểm tra nếu showCounter true thì mới hiển thị <Counter /> tức là khi nhấn vào button Remover thì nó sẽ biến mất,
                Nếu bó nó đi lúc load lại nó sẽ load lại cả App render thay vì chỉ cần load Counter render,
                nên thay { this.state.showCounter && <Counter /> } thành <Counter /> để thấy dõ sự thay đổi  */}
            </div>
        );
    }
}

export default App;