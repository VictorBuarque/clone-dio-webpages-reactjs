import { Link } from 'react-router-dom';
import CustomButton from '../../components/Button/index';
import bannerImage from '../../assets/banner.png';
import { Header } from '../../components/Header/index';
import { Container, TextContent, Title, TitleHighLight } from './styles';


const Home = () => {
    return (
        <>
        <Header/>
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
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Link to={"/login"}>
                        <CustomButton title="Começar agora" variant='secondary' onClick={() => null} />
                    </Link>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}
export default Home 