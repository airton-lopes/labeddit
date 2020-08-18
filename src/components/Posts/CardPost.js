import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { baseUrl } from '../../constants/index';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { CardContainer, FooterCard, PostCardContainer, ButtonsContainer, CommentsCountContainer, LikeButton, Username, Title, Text, CommentsCount, VotesCount } from '../Posts/styles'

const CardPost = (props) => {
  const history = useHistory();
  const {postList, getPosts} = props;

  const goToPostDetailsPage = (postId) => {
    history.push(`/posts/${postId}`);
  };
  
  const votePositive = (post) => {
    const token = window.localStorage.getItem("token")
    
    const axiosConfig = {
        headers: {
          Authorization: token
        }
      }
    
    if (post.userVoteDirection === 0) {
      const body = {
      direction: 1
    }
      axios.put(`${baseUrl}/posts/${post.id}/vote`, body, axiosConfig)
      .then((response) => {
        getPosts()
        })
      } else {
        const body = {
        direction: 0
      }
    axios.put(`${baseUrl}/posts/${post.id}/vote`, body, axiosConfig)
    .then((response) => {
        getPosts()
        })
  }
  
  }
  
  const voteNegative = (post) => {
    const token = window.localStorage.getItem("token")
    
    const axiosConfig = {
        headers: {
          Authorization: token
        }
      }
    
    if (post.userVoteDirection === 0) {
      const body = {
      direction: -1
    }
      axios.put(`${baseUrl}/posts/${post.id}/vote`, body, axiosConfig)
      .then((response) => {
        getPosts()
        })
      } else {
        const body = {
        direction: 0
      }
    axios.put(`${baseUrl}/posts/${post.id}/vote`, body, axiosConfig)
    .then((response) => {
      getPosts()
      })
  }
  
  }

    return(

        <CardContainer>
            {postList.length === 0 ? "" : postList && postList.map((post) => {
                        return <PostCardContainer key={post.id}>
                                <Username variant="h5">{post.username}</Username>
                                <Title variant="h6" onClick={() => goToPostDetailsPage(post.id)}>{post.title}</Title>
                                <Text component="p" onClick={() => goToPostDetailsPage(post.id)}>{post.text}</Text>
                                <FooterCard>
                                  <ButtonsContainer>
                                    <LikeButton onClick={() => votePositive(post)}>{post.userVoteDirection === 1 ? <ArrowUpwardIcon color="primary"/> : <ArrowUpwardIcon />}</LikeButton>
                                    <VotesCount component="h5">{post.votesCount}</VotesCount>
                                    <LikeButton onClick={() => voteNegative(post)}>{post.userVoteDirection === -1 ? <ArrowDownwardIcon color="secondary"/> : <ArrowDownwardIcon />}</LikeButton>
                                  </ButtonsContainer>
                                  <CommentsCountContainer onClick={() => goToPostDetailsPage(post.id)}>
                                    <ModeCommentOutlinedIcon /><CommentsCount component="h5"> {post.commentsCount}</CommentsCount>
                                  </CommentsCountContainer>
                                </FooterCard>
                              </PostCardContainer>
                    })}     
        </CardContainer>
    )
}

export default CardPost