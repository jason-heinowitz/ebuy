import React, { FC } from 'react';
import './styles';
import { Header, Footer } from './partials';
import Body from './content';

const App: FC = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

export default App;
