import React, { useState, useEffect } from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import makeApiRequest from "../services/makeApiRequest";
import { PostView } from "./components";
import { FlexDiv } from "../react-design-system/FlexDiv";
import { Text } from "../react-design-system/Text";


interface AuthObject {
  token: string;
}

const AdminDocs = (props: { auth: AuthObject }) => {
  const [changeLogPosts, setChangeLogPosts] = useState([]);
  const fetchData = async (prop: { auth: AuthObject }) => {
    try {
      const { data } = await makeApiRequest(
        `blog/getPostsByCategory/${"Changelog"}`,
        "GET",
        {},
        prop.auth.token
      );
      setChangeLogPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.auth.token) {
      fetchData(props);
    }
  }, [props]);

  return (
    <Container>
      <FlexDiv vert>
        <h3>Changelog</h3>
        <Text>This category provides documentation on bugs and hotfixes.</Text>
        {changeLogPosts?.map(
          (
            doc: {
              title: string;
              description: string;
              date: string;
              author: string;
              category: string;
              markdownString: string;
            },
            i
          ) => {
            return (
              <Accordion key={i} expanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  // aria-controls={doc.title}
                  id={doc.title}
                >
                  <FlexDiv justify="space-between">
                    {" "}
                    <Text> {doc.title}</Text>{" "}
                    <Text>
                      Posted by: {doc?.author} on {doc?.date}
                    </Text>{" "}
                  </FlexDiv>
                </AccordionSummary>
                <AccordionDetails>
                  <PostView post={doc} />
                </AccordionDetails>
              </Accordion>
            );
          }
        )}
      </FlexDiv>
      {/* <MarkdownEditor/> */}
    </Container>
  );
};

export default AdminDocs;
