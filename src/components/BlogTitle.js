import React from 'react';
import styled from 'styled-components';

function BlogTitle({Title}) {
    return (
        <BlogTitleStyle>
            <h1>{Title}</h1>
        </BlogTitleStyle>
    );
}

const BlogTitleStyle = styled.div`
    text-align: center;
    color: var(--white-color);
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    h1{
        border-bottom: 3px solid var(--border-color);
        text-transform: uppercase;
        
    }
    
`

export default BlogTitle;