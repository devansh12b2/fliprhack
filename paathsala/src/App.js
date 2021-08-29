import React from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';

function App() {
  

  return (
    <IntlProvider  messages={messages['en']}>
      <Layout />
    </IntlProvider>
  );
}

export default App;
