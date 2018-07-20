import React, { Component } from 'react';
import Logo from './components/Logo'
import TicketList from './components/TicketsList'
import LeftBar from './components/LeftBar'
import store from './store'
import {Provider} from 'react-redux'
// добавить проптайпсы
class App extends Component {
  // state = {
  //     activeCurrencyId: "1",
  // }

  // handleChangeCurrencyClassName = e => {
  //     this.setState({
  //         activeCurrencyId: e.target.id
  //     })
  // }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Logo />
          <main>
            <LeftBar />
            <TicketList />
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
