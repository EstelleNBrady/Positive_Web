import {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import {format} from "date-fns";
import {UserContext} from "../UserContext";

export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);

            });
        });
    }, []);
    if(!postInfo) return '';
    return(
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time>{format(new Date (postInfo.createdAt), 'MMM d, yyyy HH:mm')}</time>
            <div className="author">by {postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <a className="edit-btn" href="">Edit this post</a>
                    </div>
            )}
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>


    )
}