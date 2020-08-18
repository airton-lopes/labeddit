import React, { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import CardPost from './CardPost'
import { useHistory } from "react-router-dom";
import useForm from '../../hooks/useForm'
import axios from 'axios'
import useGetPosts from "../../hooks/useGetPosts";
import { PostContainer, MainContainer, PostButton, LogoutButton } from '../Posts/styles'
import { baseUrl } from '../../constants/index';

const Post = () => {
    const history = useHistory();
    const { form, onChange, resetForm } = useForm({
    title: "",
    text: ""
  });

  const [postList, getPosts] = useGetPosts(
    `${baseUrl}/posts`, [], 'posts' 
  )

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      history.push("/")
    } else {
    }
  }, [history])

  const handleCreatePost = (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem("token")
    const body = {
        title: form.title,
        text: form.text
    }
    const axiosConfig = {
      headers: {
        Authorization: token
      }  
    }

    axios.post(`${baseUrl}/posts`, body, axiosConfig)
    .then(() => {
    resetForm()
    getPosts()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

    const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
  };

    return(

        <MainContainer>
            <PostContainer>
            <LogoutButton variant="contained" color="secondary" onClick={handleLogout}>Logout</LogoutButton>
                <Typography variant={'h2'} gutterBottom>LabEddit</Typography>
                <form onSubmit={handleCreatePost}>
                    <TextField
                    id="outlined-textarea"
                    label="Titulo do seu post"
                    multiline rows={1}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    />
                    <TextField
                    id="outlined-textarea"
                    label="O que você está pensando?"
                    multiline rows={4}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="text"
                    value={form.text}
                    onChange={handleInputChange}
                    />
                    <PostButton
                    variant="contained"
                    color="primary"
                    type="submit">
                      Postar
                    </PostButton>
                </form>
                <CardPost postList={postList} getPosts={getPosts} />
            </PostContainer>            
        </MainContainer>
    )
}

export default Post