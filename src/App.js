import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // let person= {
  //   name: "Dr. Mahafuz",
  //   job: "Singer"
  // }
  // let style= {
  //   color: 'red',
  //   backgroundColor: 'yellow'
  // }
  const nayoks= ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products= [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
]
// Array all products name useing map function
// const nayoksName= nayoks.map(nayok => nayok);
// console.log(nayoksName);
// const productNames= products.map(product => product.name);
// console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 style={style}>My heading: {person.name + " " + person.job}</h1>
        <p>My first React Paragraph</p> */}
        {/* <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person> */}
        {/* <Person name= {nayoks[3]} nayika= "Moushumi"></Person>
        <Person name= "Jasim" nayika= "Shabana"></Person>
        <Person name= "Bappa Raz" nayika= "Cheka"></Person>
        <Person name= {nayoks[2]} nayika= "Bobita"></Person> */}
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>) /*list item er jonno*/
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Users></Users>
        {/* {
          products.map(pd => <Product product= {pd}></Product>)
        } */}
        <Product product= {products[0].name} price= {products[0].price}></Product>
        <Product product= {products[1].name} price= {products[1].price}></Product>
        <Product product= {products[2].name} price= {products[2].price}></Product>

        <Counter></Counter>
      </header>
    </div>
  );
}
// Component Made
// function Person() {
//   const personStyle= {
//     border: '2px solid red',
//     margin: '10px',
//     padding: '20px'
//   }
//   return (
//     <div style= {personStyle}>
//       <h1>Name: Sakib Al Hasan</h1>
//       <h3>Hero of the year</h3>
//     </div>
//   );
// }
// for dynamic data pass and read er jonno props likte hobe perameter a
// function Person(props) {
//   const personStyle= {
//     border: '2px solid red',
//     margin: '10px',
//     padding: '20px',
//     width: '400px'
//   }
//   return (
//     <div style= {personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Hero of the {props.nayika}</h3>
//     </div>
//   );
// }
// 
function Product(props) {
  const productStyle= {
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  // const {name, price} = props.product
  // console.log(name, price)
  return (
    <div style= {productStyle}>
      <h3>{props.product}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  );
}
// For website state changer and eventHandler purpose
function Counter() {
  const productStyle= {
    border: '1px solid red',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    margin: '10px',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div style= {productStyle}>
      <h1>Count: {count}</h1>
      <button onClick= {handleIncrease}>Increase</button>
      <button onClick= {handleDecrease}>Decrease</button>
    </div>
  );
}
// Dynamic Users data read and write
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
