import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const h1Styled = {
    backgroundColor: 'yellow',
    padding: '5px',
    color: 'black'
}

const ParaStyled = styled.p`
    text-align: center;
    background-color: lightpink;
    padding: 5px;
    color: black;
`;

const Button = styled.button`
    background: ${props => props.primary ? "darkblue" : "white"};
    color: ${props => props.primary ? "white" : "darkblue"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkblue;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h3 style={{ backgroundColor: 'lightgray', padding: '5px', color: 'black'}}>Title: {post.title}</h3>
            <ParaStyled>{post.body}</ParaStyled>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem