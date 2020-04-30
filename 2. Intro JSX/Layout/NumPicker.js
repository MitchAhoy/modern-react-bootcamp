const getNum = () => {
    return Math.floor(Math.random() * 10) + 1
  }
  
  class NumPicker extends React.Component {
    render() {
      const num = getNum()
      let msg
      if (num === 7) {
        msg =
          <div>
            <img src="https://media1.giphy.com/media/6oMKugqovQnjW/200.webp?cid=ecf05e4798c39354cba17fed33b63140efb6190438543e78&rid=200.webp" />
            <h2>YOU WIN</h2>
          </div>
      } else {
        msg = <p>YOU LOSE</p>
      }
      return (
        <div>
          <h1>Your number is: {num}</h1>
          {/* <p>{num === 7 ? 'Lucky number!' : 'Unlucky'}</p> */}
          {/* <p>{num === 7 && <img src="https://media1.giphy.com/media/6oMKugqovQnjW/200.webp?cid=ecf05e4798c39354cba17fed33b63140efb6190438543e78&rid=200.webp" />}</p> */}
          <p>{num === 7 && msg}</p>
        </div>
      )
    }
  }
  
  ReactDOM.render(<NumPicker />, document.getElementById('root'))