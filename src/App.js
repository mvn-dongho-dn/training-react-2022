import './App.css';
// import Clock from './Clock';
// import Form from './Form';
// import HelloWorld from './HelloWorld';
// import logo from './logo.svg';
// import NewsItem from './NewsItem';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle: false,
//       news: [
//         {
//           id: '1',
//           title: 'Title 1',
//           desc: 'Lorem in sum dorlor 1'
//         },
//         {
//           id: '2',
//           title: 'Title 2',
//           desc: 'Lorem in sum dorlor 2'
//         },
//         {
//           id: '3',
//           title: 'Title 3',
//           desc: 'Lorem in sum dorlor 3'
//         },
//         {
//           id: '4',
//           title: 'Title 4',
//           desc: 'Lorem in sum dorlor 4'
//         }
//       ]
//     }
//     this.handleToggle = this.handleToggle.bind(this);
//   }

//   handleToggle() {
//     this.setState({
//       toggle: !this.state.toggle
//     });
//   }

//   handleNewItem(type) {
//     console.log(this);
//     const genID = Math.floor(Math.random() * 1000);
//     const newItem = {
//       id: genID,
//       title: `Title ${genID}`,
//       desc: `Lorem in sum dorlor ${genID}`
//     };
    
//     if (type === 'APPEND') {
//       this.setState(state => ({
//         news: [
//           ...state.news,
//           newItem
//         ]
//       }));
//     } else {
//       this.setState(state => ({
//         news: [
//           newItem,
//           ...state.news
//         ]
//       }));
//     }
//   }

//   render() {
//     const { toggle, news } = this.state;

//     const newsItems = news.map(item => <NewsItem key={item.id} title={item.title} id={item.id} />);
    
//     return (
//       <div className="App">
//         <header className="App-header" style={{display: 'none'}}>
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <HelloWorld />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {/* <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="David Dong" />

//           <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" name="Ho Dong" /> */}
//           <button onClick={this.handleToggle}>Toggle Clock</button>
//           { toggle && <Clock />}
//         </header>
//         <button onClick={() => this.handleNewItem('APPEND')}>Append</button>
//         <button onClick={() => this.handleNewItem('PREPEND')}>Prepend</button>
//         <ul>{ newsItems }</ul>
//         <Form />
//       </div>
//     )
//   }
// }

// export default App;

// import React, { useEffect, useState } from 'react'
// import useCounter from './useCounter';

// export default function App() {
//   const [toggle, setToggle] = useState(false);
//   const [news, setNews] = useState([
//     {
//       id: '1',
//       title: 'Title 1',
//       desc: 'Lorem in sum dorlor 1'
//     },
//     {
//       id: '2',
//       title: 'Title 2',
//       desc: 'Lorem in sum dorlor 2'
//     },
//     {
//       id: '3',
//       title: 'Title 3',
//       desc: 'Lorem in sum dorlor 3'
//     },
//     {
//       id: '4',
//       title: 'Title 4',
//       desc: 'Lorem in sum dorlor 4'
//     }
//   ]);
//   const {count, inC, deC} = useCounter();
  

//   const handleToggle = () => {
//     setToggle(!toggle);
//   }

//   const handleNewItem = (type) => {
//     const genID = Math.floor(Math.random() * 1000);
//     const newItem = {
//       id: genID,
//       title: `Title ${genID}`,
//       desc: `Lorem in sum dorlor ${genID}`
//     };
    
//     if (type === 'APPEND') {
//       setNews([
//         ...news,
//         newItem
//       ]);
//     } else {
//       setNews([
//         newItem,
//         ...news
//       ]);
//     }
//   }


//   const newsItems = news.map(item => <NewsItem key={item.id} title={item.title} id={item.id} />);
  
//   return (
//     <div className="App">
//       <header className="App-header" style={{display: 'none'}}>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <HelloWorld />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <Avatar src="https://www.w3schools.com/howto/img_avatar.png" name="David Dong" />

//         <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" name="Ho Dong" /> */}
//       </header>
//       <button onClick={handleToggle}>Toggle Clock</button>
//       { toggle && <Clock />}
//       <button onClick={() => handleNewItem('APPEND')}>Append</button>
//       <button onClick={() => handleNewItem('PREPEND')}>Prepend</button>
//       <ul>{ newsItems }</ul>
//       <Form />
//       <button onClick={inC}>+</button>
//       {count}
//       <button onClick={deC}>-</button>
//     </div>
//   )
// }


import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Account from './pages/Account';
// import Features from './pages/Features';
// import Auth from './pages/Auth';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './core/guards/PrivateRoute';

const Account = React.lazy(() => import('./pages/Account'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Features = React.lazy(() => import('./pages/Features'));

export default function App() {
  return (
    <>
      <Header />
      <main className="page-main">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
