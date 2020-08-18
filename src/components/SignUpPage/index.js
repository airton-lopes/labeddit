import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { baseUrl } from '../../constants/index';
import { MainContainer, LoginFormContainer, FormSignUp } from '../SignUpPage/styles';

const SignUpPage = () =>{
  const history = useHistory();
  const { form, onChange } = useForm({
    email: "",
    password: "",
    username: ""
  });

  const handleSignUp = (e) => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password,
      username: form.username
    }

    axios.post(`${baseUrl}/signup`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/posts")
    }).catch(err => {
      console.log(err.message)
    })
  }

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

    return(
      <MainContainer>
        <LoginFormContainer >
          <Typography variant={'h2'} gutterBottom>Informe os dados abaixo</Typography>
          <FormSignUp onSubmit={handleSignUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="user"
              label="Digite um nome de usuario"
              name="username"
              type="text"
              value={form.username}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="Informe seu e-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Informe uma senha"
              type="password"
              id="password"
              value={form.password}
              onChange={handleInputChange}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Cadastrar
            </Button>
          </FormSignUp>
        </LoginFormContainer>
      </MainContainer>
    )
}

export default SignUpPage