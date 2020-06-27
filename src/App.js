import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './component/Greet'
// import Welcome from './component/Welcome'
// import Hello from './component/Hello'
// import Message from './component/Message'
// import Counter from './component/Counter'
// import FunctionClick from './component/FunctionClick'
// import ClassClick from './component/ClassClick'
// import EventBind from './component/EventBind'
// import ParentComponent from './component/ParentComponent'
// import UserGreeting from './component/UserGreeting'
// import NameList from './component/NameList'
import StyleSheet from './component/StyleSheet'
import Inline from './component/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className ='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      {/* <StyleSheet primary={true}/>
      <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent />
      <EventBind /> */}
      {/* <ClassClick />
      <FunctionClick />
      <Counter/>
      <Greet />
      <Welcome />
      <Message />
      <Hello /> */}
    </div>
  );
}

export default App;
