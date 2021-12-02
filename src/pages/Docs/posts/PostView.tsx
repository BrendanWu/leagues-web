import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Post } from "../../../interfaces/pages/Docs";

const PostView = (props: { post: Post }) => {
  return (
    <div>
      <MDEditor.Markdown source={props.post.markdownString} />
    </div>
  );
};

export default PostView;
