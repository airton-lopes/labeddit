  
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { MainContainer, SecondaryContainer, FormLogin } from '../LoginPage/styles';
import { baseUrl } from '../../constants/index';

function LoginPage() {
  const history = useHistory();
  const { form, onChange } = useForm({
    email: "",
    password: ""
  });

  const handleLogIn = (e) => {
    e.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(`${baseUrl}/login`, body)
    .then(response => {
      window.localStorage.setItem("token", response.data.token)
      history.push("/posts")
    }).catch(err => {
      alert("Email ou senha não cadastrados")
    })
  }
  
  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  return (
    <MainContainer>
      <SecondaryContainer>
        <CssBaseline />
          <Typography variant={'h2'} gutterBottom>Entrar no LabEddit</Typography>
          <FormLogin onSubmit={handleLogIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              placeholder="Digite seu E-mail"
              type="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={form.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Entrar
            </Button>
          </FormLogin>
            <Link to={'/signup'}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
              >
                Cadastrar
              </Button>
            </Link>
      </SecondaryContainer>
    </MainContainer>
  );
}

export default LoginPage;