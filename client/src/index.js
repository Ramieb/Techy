import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import "./style.css"
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import priceReducer from './reducers/price';
import searchReducer from './reducers/search';
import categoryReducer from './reducers/category';

const store = configureStore ({
    reducer: {
      price: priceReducer.reducer,
      search: searchReducer.reducer,
      category: categoryReducer.reducer,
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<Provider store={store}><App /></Provider>);