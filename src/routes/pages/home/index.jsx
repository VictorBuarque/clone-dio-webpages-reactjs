import { Link } from 'react-router-dom';
import CustomButton from '../../../components/Button/index';
import { Header } from '../../../components/Header/index';


const Home = () => {
    return (
    <>
        <Header>
            <CustomButton title="Button"></CustomButton>
            <CustomButton title="Button 2" variant="secondary"></CustomButton>
            <Link to="/login">Fazer login</Link>
        </Header>
    </>
    )
}
export { Home }