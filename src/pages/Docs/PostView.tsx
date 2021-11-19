import React from 'react'
import MDEditor from '@uiw/react-md-editor';

interface Post {
    markdownString: string
}

const PostView = (props: {post: Post}) => {

    return (
        <div>

             <MDEditor.Markdown source={props.post.markdownString} />
        </div>
    )
}

export default PostView