import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Catalog from './components/Catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
