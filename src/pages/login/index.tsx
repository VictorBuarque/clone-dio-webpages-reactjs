import { MdEmail, MdLock } from "react-icons/md"

import CustomButton from "../../components/Button/index"

import { Header } from "../../components/Header/index"
import { Input } from "../../components/Input/index"
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
} from "./styles"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup" //validation
import * as yup from "yup"
import { api } from "../../services/api"
import { IFormDataProps } from "./types"

const schema = yup.object({
    email: yup.string().email("E-mail Invalido").required("Campo Invalido"),
    password: yup.string().min(5, "Senha invalida, minimo 6 caracteres").required("Campo Invalido")
  }).required()

const Login = () => {
  const navigate = useNavigate()
  
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors, isValid },
  } = useForm <IFormDataProps> ({ resolver: yupResolver(schema), mode: "onChange" })
  console.log(isValid, errors)
  
  const onSubmit = async (formData : IFormDataProps )=> {
    try{
      const{ data }= await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
       navigate('/feed')
      } else {
        alert('Wrong e-mail or passaword!')
      }
    } catch {
      alert("Error, try again")
    }
  }
  const handleRegister = () => {
    navigate('/register')
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorsMessage={errors?.email?.message}
                control={control}
                placeholder="Email"
                type="current-email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorsMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="current-password"
                leftIcon={<MdLock />}
              />
              <CustomButton
                title="Entrar"
                variant="secondary"
                //onClick={onSubmitButtonClick}
                type="submit"
              />
            </form>
            <Row>
              <ForgotText>Esqueceu a Senha?</ForgotText>
              <CreateText onClick={handleRegister}>Criar conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
export default Login
