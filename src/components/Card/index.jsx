import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

import { FiThumbsUp } from 'react-icons/fi';

const Card = () => {
  return (
    <>
      <CardContainer>
        <ImageBackground src="https://wallpapercave.com/wp/wp4804035.png"/>
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/114040791?s=400&u=469e400f38ea7024ac51746802037465d95f4244&v=4"/>
            <div>
              <h4>Victor Gabriel</h4>
              <p>Há 10 minutoss</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>
              Projeto feito o curso de HTML e CSS no bootcamp da DIO do Global
              Avanade <strong>Saiba Mais</strong>
            </p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
              <FiThumbsUp />10
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    </>
  );
};

export { Card };
