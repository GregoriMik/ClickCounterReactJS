class Counter extends React.Component{
  state={
    count: 0,
    result: 0
  }
  render(){
    return(
      <>
      <button>-1</button>
      <button>Reset</button>
      <button>+1</button>
      <h1>Liczba kliknięć: {this.state.count}</h1>
      <h1>Wynik: {this.state.result}</h1>
      </>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));
