import {MdEmail, MdLock} from 'react-icons/md';

import CustomButton from "../../components/Button/index";

import { Header } from "../../components/Header/index";
import { Input } from "../../components/Input/index";
import {
  Container,
  Column,
  Row,
  Wrapper,
  Title,
  TitleLogin,
  SubtitleLogin,
  ForgotText,
  CreateText,
} from "./styles";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form action="">
              <Input placeholder="Email" type="email" leftIcon={<MdEmail/>} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock/>} />
            </form>
            <CustomButton title="Entrar" variant="secondary" onClick={handleClickSignIn} />
            <Row>
              <ForgotText>Esqueceu a Senha?</ForgotText>
              <CreateText>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};
export default Login;
