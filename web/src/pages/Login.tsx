import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, RememberContainer } from "../styles/pages/login";
import { InputBlock, ConfirmButton, Fieldset, Form } from "../styles/global";
import { toast } from "react-toastify";
import Panel from "../components/Panel";
import GoBack from "../components/GoBack";
import AuthContext from "../contexts/auth";
import api from "../services/api";

export default function Login() {
  const { signIn, signed } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(signed);

  async function handleLogin() {
    signIn({ email, password });
  }

  return (
    <>
      <GoBack />
      <Container>
        <Panel />
        <Form>
          <Fieldset>
            <legend>Fazer Login</legend>
            <InputBlock>
              <label htmlFor="email">E-mail</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
              />
            </InputBlock>
            <InputBlock>
              <label htmlFor="password">Senha</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
              />
            </InputBlock>
          </Fieldset>
          <RememberContainer>
            <span>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Lembrar-me</label>
            </span>
            <p>
              <Link to="forgot-password"> Esqueci minha senha </Link>{" "}
            </p>
          </RememberContainer>
          <ConfirmButton onClick={handleLogin}>Entrar</ConfirmButton>
        </Form>
      </Container>
    </>
  );
}
