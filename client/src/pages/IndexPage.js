//indexPage.js
import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage(){
    
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://www.dynamiconfidence.com/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return(
        
        <div className="about-container">
            
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet" />
        <p id='head1' className='header'>Body Positivity</p>
      <p id='head2' className='header'>Fitness</p>
      <p id='head3' className='header'>Dynamic Confidence</p>
      <p id='head4' className='header'></p>
      <p id='head5' className='header'></p>
      <p id='head6' className='header'></p>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
        {posts.length > 0 && posts.map(post => (
            <Post key={post.id} {...post} />
        ))}
      </div>
        
        
        
          
        
        
    );
}