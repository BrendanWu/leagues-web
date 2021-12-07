import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Input } from "../../../react-design-system/Input";
import { Title } from "../../../react-design-system/Title";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import Button from "../../../react-design-system/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";

const ErrorContainer = styled.p`
  color: "red";
  font-size: 10px;
`;

export default function MarkdownEditor(props: any) {
  const [markdownString, setMarkdownString] =
    useState<string>("**Hello world!!!**");

  let schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string(),
    date: yup.string(),
    author: yup.string(),
    category: yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      date: "",
      author: "",
      category: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      props.handleSave(values, markdownString);
    },
    validateOnBlur: true,
    validationSchema: schema,
  });
  return (
    <FlexDiv card vert style={{ paddingLeft: 16, margin: 5 }}>
      <Title>Create a new post</Title>

      <Input
        name="title"
        altTheme
        label="Title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && (
        <ErrorContainer>{formik.errors.title}</ErrorContainer>
      )}
      <Title>Meta</Title>
      <FlexDiv vert>
        <FlexDiv justify="space-between">
          <Input
            name="description"
            altTheme
            label="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <Input
            name="date"
            altTheme
            label="Date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </FlexDiv>
        <FlexDiv justify="space-between">
          <Input
            name="author"
            altTheme
            label="Author"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          <Input
            name="category"
            altTheme
            label="Category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
        </FlexDiv>
      </FlexDiv>

      <FlexDiv align="center">
        <FlexDiv>
          {" "}
          <Title>Markdown content</Title>
        </FlexDiv>
        <FlexDiv justify="flex-end">Unsaved changes</FlexDiv>
        <FlexDiv justify="flex-end">
          <Button label="Save" onClick={formik.handleSubmit} />
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
    </FlexDiv>
  );
}
