import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogList from "./pages/BlogList";
import BlogForm from "./pages/BlogForm";
import Home from "./pages/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <BlogList />
        <BlogForm />
      </div>
    )
  }
}

export default App;
