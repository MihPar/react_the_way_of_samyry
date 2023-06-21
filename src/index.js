import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
    {id: 1, message: 'Hey, how are your?', likesCount: "34"},
    {id: 2, message: 'It is my first posts', likesCount: "56"},
    {id: 2, message: 'lalalal', likesCount: "12"},
    {id: 2, message: 'wowoowwowowo', likesCount: "21"},
]

const dialogsData = [
    { id: 1, name: "Mickhael" },
    { id: 2, name: "Tatiana" },
    { id: 3, name: "Alexandr" },
    { id: 4, name: "Maria" },
    { id: 5, name: "Ilia" },
  ];
  
  const messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Not bad" },
    { id: 4, message: "I am fun" },
    { id: 5, message: "It is cool" },
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

reportWebVitals();
