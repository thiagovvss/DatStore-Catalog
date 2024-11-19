import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/router'

export default function App() {

  return (
    <>
      <StatusBar style="light" backgroundColor='black' translucent={true} />
      <Routes/>
    </>
  );
}


