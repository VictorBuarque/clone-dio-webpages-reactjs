import {
  Container,
  Wrapper,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
  FlagPicture,
} from "./styles";
import CustomButton from "../Button/index";
import logo from "../../assets/logo-dio.png";
import brazil from "../../assets/brazil-flag.png";
import eua from "../../assets/eua-flag.png";
import spain from "../../assets/spain-flag.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
 

  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img
              src={logo}
              alt="Logo da Empresa"
              onClick={handleClickNavigate}
            />
            {user.id ? (
              <>
                <BuscarInputContainer>
                  <Input type="text" placeholder="Buscar.." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {user.id ? (
              <>
                <UserPicture src="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4" />
                <CustomButton
                  title="Sair"
                  onClick={handleSignOut}
                ></CustomButton>
              </>
            ) : (
              <>
                <MenuRight onClick={handleClickNavigate}>Home</MenuRight>
                <CustomButton
                  title="Entrar"
                  onClick={handleLogin}
                ></CustomButton>
                <CustomButton
                  onClick={handleRegister}
                  title="Cadastrar"
                  variant="primary"
                ></CustomButton>
                <FlagPicture src={brazil} />
                <FlagPicture src={eua} />
                <FlagPicture src={spain} />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
