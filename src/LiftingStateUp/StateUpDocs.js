// lifting state up: khi có 2 hoặc nhiều component sử dụng chung 1 dữ liệu, nếu ta lưu chúng vào state như thông thường thì khi một thằng thay đối thằng thì
// những thằng còn lại sẽ không thể cập nhập được thay đổi đó. Vì vậy ta cần tạo ra một component chung (lifting state up) để lưu trữ các dữ liệu chung đó
// Bây giời nếu một thằng thay đổi componet thì các thằng dùng chung cũng sẽ nhận được sự thay đổi đó. Điều này đúng và sẽ nâng cấp độ khó lên với trường hợp các 
// componet này tạo thành một cây  
import React, { Component } from 'react';
//Nhập gtri vào một trong 2 input, input còn lại cập nhập kết quả

const scaleNames = {
  // Mảng này để chuyển các gtri c, f thành Celsius và Fahrendeit
  c: 'Celsius',
  f: 'Fahrendeit'
}

//Vì bài toàn cần 2 input có nd gần tương tự nhau lên ta sẽ viết một temper để gộp những phần chung
class TemperatureInput extends Component {
  // TemperatureInput là một thg con dc truyền từ Calculator. Calculator sẽ chuyền một props scale sang cho TemperatureInput
  constructor(props) {
    super(props);
    // ví dụ 3 nhận các props
    // this.state = {temperature: ''};
  }

  handleChange = (e) => {
    // ví dụ 3 nhận các props
    // this.setState({temperature: e.target.value});
    this.props.onChange(e.target.value);
  }

  render() {
    // Chú ý: Tại ví dụ 3: Để có thể đồng bộ hai trạng thái này qua nhau ta sẽ nhận về các props thay vì state
    // const temperature = this.state.temperature;
    const temperature = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Return temperature in {scaleNames[scale]}</legend>
        {/* scaleNames[scale] */}
        <input 
          value={temperature}
          onChange={this.handleChange}
        />
        {/* Ví dụ 3 */}
        {/* <BoilingVerdict
          celsius = {parseFloat(temperature)}
        /> */}
      </fieldset>
    )
  }
}

// Ví dụ 1 thực hiện hiển thị nhiệt độ sôi của nc
function BoilingVerdict(props) {
  if(props.celsius > 100) {
    return 'Đạt nhiệt độ sôi';
  }
  return 'Chưa đạt nhiệt độ sôi';
}
class Calculator extends Component {
  constructor(props) {
    super(props);
    // this.state = {temperature: ''};
    this.state = {value: '', scale: 'c'};
  }

  handleChange=(e)=>{
    // console.log(this.props.scale);
    this.setState({temperature: e.target.value});
  }
  // ví dụ 3 nhận tạo vào chuyền các Props
  handleCelsiusChange = (value) => {
    this.setState({scale: 'c', value});
  }

  handleFahrenheitChange = (value) => {
    this.setState({scale: 'f', value});
  }

  render() {
    // const temperature = this.state.temperature;
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrendeit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;
    return (
      // VD3:
      <div>
        <TemperatureInput
        scale='c'
        value={celsius}
        onChange={this.handleCelsiusChange} />
        <TemperatureInput
        scale='f'
        value={fahrendeit}
        onChange={this.handleFahrenheitChange} />
      </div>
      //Ví dụ 2
      // <div>
      //   <TemperatureInput scale='c'/>
      //   <TemperatureInput scale='f'/>
      // </div>
      // Cái ở dưới sẽ được bê nguyên sang thằng con TemperatureInput để làm Ví dụ 2
      // <fieldset>
      //   <legend>Nhâp gtri độ C:</legend>
      //   <input
      //     value={temperature}
      //     onChange={this.handleChange}
      //   />
      //   <BoilingVerdict
      //     celsius = {parseFloat(temperature)}
      //   />
      // </fieldset>
    );
  }
}  

//Thực hiện đồng bộ giữa độ c và độ f
function toCelsius(fahrendeit) {
  //Chuyển từ độ F sang độ C
  return (fahrendeit - 32) * 5/9;
}
function toFahrenheit(celsius) {
  //Chuyển từ độ C sang độ F
  return (celsius * 9/5) + 32;
}
//Function chung để xử lý đầu vào tương ứng là độ C hay độ F. ví dụ tryConvert('abc', toCelsius) hoặc tryConvert('10.22', toFahrenheit)
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);//parseFloat chuyển đổi string thành kiểu float
  if(Number.isNaN(input)) {
    //Kiểm tra nếu gtri input không thể chuyển đổi sang float thì sẽ trả về một chuỗi rỗng
    return '';
  }
  const output = convert(input);//convert: chuyển tất cả thành kiểu số
  const rounded = Math.round(output * 10)/10;//Math.round hàm làm tròn đến số nguyên gần nhất. (...*10)/10 có nghĩa là làm tròn đến số , thứ nhất
  return rounded.toString();
}

export default Calculator;
  