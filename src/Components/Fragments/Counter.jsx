import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }

  // componentDidMount mengimplementasikan ketika component di render pada saat awal load, digunakan untuk memanipulasi nilai dari API
  componentDidMount() {
    this.setState({ count: 2 });
    console.log("componentDidMount");
  }

  // componentDidUpdate mengimplementasikan ketika component berda pada kondisi tertentu maka akan di update. pada contoh ketika nilai counter melebihi 5, counter akan dimulai dari 0
  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.count === 5) {
      this.setState({ count: 0 });
    }
  }
  render() {
    return (
      <div className="flex items-center justify-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-blue-500 px-3 py-1 text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}
export default Counter;
// NOTE
// membuat class counter yang ekstend dengan react component kemudian membuah constructor dengan nilai count default dan mengimplementasikan ketika tombol button di klik baru bertambah value nya
