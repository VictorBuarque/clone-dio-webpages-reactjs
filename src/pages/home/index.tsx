import CustomButton from "../../components/Button/index";
import bannerImage from "../../assets/banner.png";
import { Header } from "../../components/Header/index";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <CustomButton
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
            type="button"
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};
export default Home;
