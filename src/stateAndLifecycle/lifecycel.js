import React, { Component } from 'react';

class Lifecycel extends Component {
    constructor(props) {
        console.log('Counter constructor');
        super(props);
        this.state = {
            count: 0
        };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        console.log('Counter render');
        
        return (
            <div className='counter'>
                <button type="button" className="btn btn-default" onClick={this.decrease}>-</button>
                <span> {this.state.count} </span>
                <button type="button" className="btn btn-default" onClick={this.increase}>+</button>
            </div>
        )
    }

//mount và unmount

//Trong react có 2 dom dc tạo ra một là dom thật, và dom ảo được gọi là virtual dom
//virtual dom dc tạo ra trước rồi sử dụng các dom api dc hỗ trợ bởi thư viện react dom tính toán các dom element cần thiết để hiển thị trên trình duyệt
//Khi virtual gọi các dom api để thêm componet vào trong trang thì lúc đó nó là mount
//Khi componet không sử dụng nữa, vd: chuyển trang, đóng trình duyệt vv... thì các component bị mất đi thì dc gọi là unmount

//component được render trong lần đầu tiên thì phương thức componentWillMount sẽ được gọi trước khi render. 
//Có thể hiểu như này, trước khi compont vô DOM bằng hàm render() thì hàm componentWillMount() sẽ được gọi.
//Chú ý chúng ta không nên gọi hàm setStae() trong hàm componentWillMount() vì nó chưa có DOM nào để tương tác.
componentWillMount() {
    console.log("componentWillMount da chay")
}

//componentDidMount() được gọi khi lần đầu tiên component dc khởi tạo và gắn vào dom, trong component thì nó chỉ dc gọi 1 lần duy nhất
componentDidMount() {
    //Thường khi lấy dữ liệu từ server (Hay bên thứ 3) về  thì lên gọi api, setState từ trong này , hoặc có thể gọi trong componentDidUpdate
    console.log('Counter did mount');
}

//Khi một instance của component được update, componentWillReceiveProps sẽ được gọi trước khi render. 
//Có một chú ý ở đây là: componentWillReceiveProps chỉ được gọi nếu component được nhận một prop:
componentWillReceiveProps() {
    console.log('Counter did receive props');
}

//componentDidUpdate() được gọi ngay sau khi render được gọi. Vd nhấn + hoặc - như trên thì state thay đổi thì component phải render lại. 
//Chú ý có 2 thứ là prop và state là component phải render lại thì componentDidUpdate() được gọi ở những lần update như vậy. Nhưng nó không được gọi ở lần đầu tiên
componentDidUpdate() {
    console.log('Counter did update');
}

//componentWillUpdate. Nó được gọi giữa shouldComponentUpdate và render. Nó cũng nhận vào 2 argument và nextProps và nextState.
//Mục tiêu chính của componentWillUpdate là tương tác những thứ bên ngoài kiến trúc React. 
//Nếu bạn cần set up một cái gì đó ngoài React, như check window size hay tương tác với một API thì componentWillUpdate là nơi thích hợp để thực hiện điều đó.
componentWillUpdate(nextProps, nextState){
    console.log('Counter Will Update');
}

//componentWillUnmount() được gọi khi trước khi unmount 
componentWillUnmount() {
    //Dùng để remove các list, hoặc remote các đối tượng được khởi tạo ở componentDidMount(có nghĩa remote một số biến global không cần thiết)
    console.log('Counter will unmount');
}

//shouldComponentUpdate() có thể override ghi đè nó. 
//Chú ý: Thường khi kế thừa trong một component từ một class khác thì nó sẽ thừa kế tất cả các method của class đấy
//Chúng ta có thể override ghi đè lên. 
//Chú ý: Bình thường mặt định shouldComponentUpdate trả về true, nếu chúng tra gắn nó return fales thì nó sẽ k bh render() lại
shouldComponentUpdate(nextProps, nextState) {
    //Sử dụng phương thức này sẽ giúp tránh load lại tất cả mà chỉ load lại những thứ dc thay đổi
    //Nếu bó nó đi lúc load lại nó sẽ load lại cả App render thay vì chỉ cần load Counter render,
    //nên thay { this.state.showCounter && <Counter /> } thành <Counter /> để thấy dõ sự thay đổi 
    if (this.state.count === nextState.count)
    {
        return false;//nếu không có thay đổi thì không load lại
    }
    return true;//Nếu có thay đổi thì render() Bthường
}

}


export default Lifecycel;

