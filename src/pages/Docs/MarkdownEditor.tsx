import React from "react";
import ReactDOM from "react-dom";

import MDEditor from "@uiw/react-md-editor";
import { Input } from "../../react-design-system/Input";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import Button from "../../react-design-system/Button";

export default function MarkdownEditor(props: any) {
  const [markdownString, setMarkdownString] =
    React.useState<string>("**Hello world!!!**");
  const [metaForm, setMetaForm] = React.useState({
    title: null,
    description: null,
    date: null,
    author: null,
    category: null,
  });

  const handleMetaChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setMetaForm({ ...metaForm, [name]: value });
    const body = { metaForm, value };
  };
  return (
    <div className="card" style={{ padding: 16 }}>
      <h3>Create a new post</h3>

      <Input onChange={handleMetaChange} name="title" altTheme label="Title" />
      <h3>Meta</h3>
      <FlexDiv vert>
        <FlexDiv justify="space-between">
          <Input
            onChange={handleMetaChange}
            name="description"
            altTheme
            label="Description"
          />
          <Input
            onChange={handleMetaChange}
            name="date"
            altTheme
            label="Date"
          />
        </FlexDiv>
        <FlexDiv justify="space-between">
          <Input
            onChange={handleMetaChange}
            name="author"
            altTheme
            label="Author"
          />
          <Input
            onChange={handleMetaChange}
            name="category"
            altTheme
            label="Category"
          />
        </FlexDiv>
      </FlexDiv>

      <FlexDiv align="center">
        <FlexDiv>
          {" "}
          <h3>Markdown content</h3>
        </FlexDiv>
        <FlexDiv justify="flex-end">Unsaved changes</FlexDiv>
        <FlexDiv justify="flex-end">
          <Button
            label="Save"
            onClick={() => {
              props.handleSave(metaForm, markdownString);
            }}
          />
        </FlexDiv>
      </FlexDiv>

      <MDEditor
        value={markdownString}
        onChange={(markdownString) => {
          setMarkdownString(markdownString ? markdownString : "");
        }}
        style={{ maxWidth: 1600 }}
      />
      <MDEditor.Markdown source={markdownString} />
    </div>
  );
}
