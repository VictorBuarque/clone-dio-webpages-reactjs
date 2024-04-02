import { Header } from '../../components/Header/index';
import { Card } from '../../components/Card/index';
import { UserInfo } from '../../components/UserInfo';
import { Container , Column, Title, TitleHighLight} from './styles';

function Feed() {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighLight># TOP 5 RANKING SEMANAL</TitleHighLight>
          <UserInfo percentual={80} name={"Victor Buarque"} image="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
          <UserInfo percentual={35} name={"Victor Buarque"} image="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
          <UserInfo percentual={40} name={"Victor Buarque"} image="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
          <UserInfo percentual={60} name={"Victor Buarque"} image="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
          <UserInfo percentual={15} name={"Victor Buarque"} image="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
        </Column>
      </Container>
    </>
  );
}

export default Feed;
