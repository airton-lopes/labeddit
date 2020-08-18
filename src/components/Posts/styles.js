import styled from 'styled-components'
import { Typography, Paper, Button } from '@material-ui/core';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FooterCard = styled.div`
  position: relative;
  bottom: -16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid gray;
  width: 100%;
`
export const PostCardContainer = styled(Paper)`
  width: 360px;
  padding: 16px;
  margin: 8px;
  background-color: lightgray;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CommentsCountContainer = styled.div`
  cursor: pointer;
  display: flex;
`
export const LikeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: lightgray;
`
export const Username = styled(Typography)`
  font-weight: bold;
  margin-bottom: 16px;
`
export const Title = styled(Typography)`
  font-weight: bold;
  margin-bottom: 8px;
  color: #3E50B4;
  text-align: center;
  border-bottom: 1px solid gray;
  cursor: pointer;
`
export const Text = styled(Typography)`
  font-weight: bold;
  cursor: pointer;
`
export const CommentsCount = styled(Typography)`
  font-weight: bold;
  margin: 0px 8px;
`
export const VotesCount = styled(Typography)`
  font-weight: bold;
`
export const PostContainer = styled.div`
display: flex;
flex-direction: column;
width: 360px;
margin-top: 16px;
justify-content: center;
align-items: center;
`
export const MainContainer = styled.div`
display: flex;
justify-content: center;
`
export const PostButton = styled(Button)`  
margin-bottom: 16px;
`
export const LogoutButton = styled(Button)`
position: relative;
right: -30vw;
top: -1vh;
`