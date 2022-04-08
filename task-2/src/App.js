import React from 'react';
import Chat from './components/Chat';
import { Provider } from 'react-redux'
import store from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container content">
        <div className="row">
          <Chat />
        </div>
      </div>
    </Provider>
  );
}
