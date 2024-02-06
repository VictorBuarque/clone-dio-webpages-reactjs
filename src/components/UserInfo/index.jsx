import {
   Container,
   UserPicture,
   NameText,
   Progress,
  } from "./styles";

import PropTypes from 'prop-types';  

const UserInfo = ({name, image, percentual}) => {
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

UserInfo.propTypes = {
    image: PropTypes.node, 
    name: PropTypes.string,
    percentual: PropTypes.number,
  };
export {UserInfo}