import React from "react";
import "./Post.css";

const Post = ({ username, imageURL, caption }) => {
    return(
        <div classname="post">
            <header>
                <h1 className="username">{username}</h1>
            </header>
            <img src={imageURL} alt="Post"/>
            <p className="caption">{caption}</p>
        </div>
    )

}

export default Post;
