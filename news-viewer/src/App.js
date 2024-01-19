import React,{useState} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

const App=()=>{
  return (
    <NewsList/>
  );
};

export default App;
