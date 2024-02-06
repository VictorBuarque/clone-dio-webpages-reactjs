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

const Header = ({ authentication }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da Empresa"></img>
            {authentication ? (
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
            {authentication ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4" />
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <CustomButton title="Entrar"></CustomButton>
                <CustomButton
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
