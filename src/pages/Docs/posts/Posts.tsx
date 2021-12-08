import React from "react";
import Grid from "@material-ui/core/Grid";
import makeApiRequest from "../../../services/makeApiRequest";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import MarkdownEditor from "../componets/MarkdownEditor";
import Button from "lifted-design-system/dist/Button";
const AdminPosts = (props: any) => {
  const [posts, setPosts] = React.useState<any>([]);
  const handleRemove = async (_id: any) => {
    const body = { _id };
    const response = await makeApiRequest(
      "blog/deletePostById",
      "DELETE",
      body,
      props.auth.token
    );
    if (response.data.success) {
      setPosts(response.data.posts);
    }
  };
  React.useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async (metaForm: any, markdownString: any) => {
    const body = { metaForm, markdownString };
    try {
      const { data } = await makeApiRequest(
        "blog/createNewPost",
        "POST",
        body,
        props.auth.token
      );
      setPosts([...posts, data?.post ? data.post : null]);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPosts = async () => {
    try {
      const { data } = await makeApiRequest(
        "blog/getAllPosts",
        "GET",
        {},
        props.auth.token
      );
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FlexDiv vert container style={{ maxWidth: "80%", margin: 10 }}>
      {/* <FlexDiv style={{marginBottom:16}}>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
                <FlexDiv card style={{height:100, padding:16}} justify="center" align="center">
                    Create a post
                </FlexDiv>
            </FlexDiv> */}
      <h3>All posts</h3>
      <FlexDiv vert style={{ marginBottom: 20 }}>
        {posts.map(
          (
            p: {
              title:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              category:
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              _id: any;
            },
            i: any
          ) => {
            return (
              <Grid container>
                <Grid xs={4}>{p.title}</Grid>
                <Grid xs={4}>{p.category}</Grid>
                <Grid xs={4}>
                  <Button onClick={() => handleRemove(p._id)} label="remove" />
                </Grid>
              </Grid>
            );
          }
        )}
      </FlexDiv>

      <MarkdownEditor auth={props.auth} handleSave={handleSave} />
    </FlexDiv>
  );
};

export default AdminPosts;
