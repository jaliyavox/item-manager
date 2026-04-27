import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API = process.env.REACT_APP_API_URL || 'http://localhost: 5000';

function App(){
  const[items, setItems] = useState([]);
  const[form, setForm] = useState({name: '', quanity: '', category: ''});
  const[loading, setLoading] = useState(false);


  // Fetch items on load
  useEffect(() => {
    fetchItems();

  }, []);

  const fetchItems = async () =>{
    const res = await axios.get('${API}/api/items');
    
  }
}