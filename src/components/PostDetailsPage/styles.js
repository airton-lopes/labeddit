import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 16px;
`
export const CommentContainer = styled.div`
  width: 360px;
  padding: 16px;
  margin: 8px;
  background-color: lightgray;
`
export const LogoutButton = styled(Button)`
  position: relative;
  right: -30vw;
  top: -1vh;
`
export const CardMainComment = styled(Paper)`
  width: 360px;
  padding: 16px;
  margin: 8px;
  background-color: lightgray;
`
export const Username = styled(Typography)`
  font-weight: bold;
  border-bottom: 1px solid gray;
`
export const Text = styled(Typography)`
  margin-top: 8px;
`
export const FooterCard = styled.div`
  position: relative;
  bottom: -16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid gray;
  width: 100%;
  padding: 4px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LikeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: lightgray;
`