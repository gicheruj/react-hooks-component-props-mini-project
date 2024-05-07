import React from 'react';
import About from './About';
import Header from './Header';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div className="App">
      <About
        image="path/to/your/image.jpg"
        about="This is a blog about various topics."
      />
      <Header name={blogData.name}/>
      <ArticleList posts={blogData.posts} /> 
    </div>
  );
}

export default App;

