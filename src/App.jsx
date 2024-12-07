import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Header} from './components/Header'

import { Client, Databases } from 'appwrite';

function App() {
  const client = new Client();
  client
    .setProject('6746c366001e61e08f2c')
    .setEndpoint('https://cloud.appwrite.io/v1');
    
  const databse = Databases(client);

  
  return (
    <>
      <Header text="Sweet wine"/>
    </>
  );
}

export default App;
