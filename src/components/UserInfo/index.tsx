import {
   Container,
   UserPicture,
   NameText,
   Progress,
  } from "./styles";

import { IUserInfoProps } from "./types";

const UserInfo = ({name, image, percentual} : IUserInfoProps) => {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export {UserInfo}