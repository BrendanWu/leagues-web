import React from "react";
import AlertDialog from "../componets/AlertDialog";
import Button from "lifted-design-system/dist/Button";
import Container from "@material-ui/core/Container";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import Grid from "@material-ui/core/Grid";
import { Text } from "../../../react-design-system/Text";
import MarkdownEditor from "../componets/MarkdownEditor";
import makeApiRequest from "../../../services/makeApiRequest";

const AdminPosts = (props: any) => {
  const [posts, setPosts] = React.useState<any>([]);
  const [editPost, setEditPost] = React.useState<any>(null);

  React.useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = async (_id: any) => {
    const body = { _id };
    const response = await makeApiRequest(
      "blog/deletePostById",
      "DELETE",
      body,
      props.auth.token
    );

    if (_id === editPost?._id) {
      setEditPost(null);
    }

    if (response.data.success) {
      setPosts(response.data.posts);
    }
  };

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

  const handleUpdate = async (_id: any, metaForm: any, markdownString: any) => {
    const body = { _id, metaForm, markdownString };
    try {
      const { data } = await makeApiRequest(
        "blog/updatePostById",
        "PATCH",
        body,
        props.auth.token
      );

      setPosts(data.posts);
      setEditPost(null);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleCancelEdit = () => {
    setEditPost(null);
  }

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

  const handleEditPost = async (post: any) => {
    setEditPost(post);
  }

  return (
    <Container>
      <FlexDiv vert container>
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
                <Grid key={i} container>
                  <Grid xs={6} item={true}>
                    <Text>{p.title}</Text>
                  </Grid>

                  <Grid xs={2} item={true}>
                    <Text>{p.category}</Text>
                  </Grid>

                  <Grid xs={2} item={true}>
                    <Button onClick={() => handleEditPost(p)} label="Edit" />
                  </Grid>

                  <Grid xs={2} item={true}>
                    <AlertDialog
                      openDialogText={"Remove"}
                      titleText={"Remove Post?"}
                      contentText={"Are you sure you want to remove this post?"}
                      closeButtonText={"No"}
                      actionButtonText={"Yes"}
                      action={() => handleRemove(p._id)}
                    />
                  </Grid>
                </Grid>
              );
            }
          )}
        </FlexDiv>

        <MarkdownEditor
          post={editPost}
          auth={props.auth}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
          handleCancel={handleCancelEdit}
        />
      </FlexDiv>
    </Container>
  );
};

export default AdminPosts;
