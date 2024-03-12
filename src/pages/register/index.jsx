import axios from 'axios'
import { MdAddReaction, MdEmail, MdLock } from "react-icons/md"
import CustomButton from "../../components/Button/index"
import { Header } from "../../components/Header/index"
import { Input } from "../../components/Input/index"

import {
  Container,
  Column,
  Row,
  Wrapper,
  Title,
  TitleRegister,
  SubtitleRegister,
  Span,
  Paragraph
} from "./styles"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    name: yup.string().min(3, "Nome inválido, mínimo 3 caracteres").required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "Senha inválida, mínimo 6 caracteres").required("Campo obrigatório"),
  }).required()
  

const Register = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" })
  console.log(isValid, errors)

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post('/users', formData)
      if (response.status === 201) {
        navigate("/login")
      } else {
        alert("Failed to register user")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error, try again")
    }
  }
  const handleLogin = () => {
    navigate("/login")
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
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
            Crie sua conta e make the change.
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              errorsMessage={errors?.name?.message}
              control={control}
              placeholder="Nome Completo"
              type="name"
              leftIcon={<MdAddReaction />}
            />
            <Input
              name="email"
              errorsMessage={errors?.email?.message}
              control={control}
              placeholder="Email"
              type="email"
              leftIcon={<MdEmail />}
            />
            <Input
              name="password"
              errorsMessage={errors?.password?.message}
              control={control}
              placeholder="Senha"
              type="password"
              leftIcon={<MdLock />}
            />
            </form>
            <CustomButton
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
          </Wrapper>
          <Column>
          <Wrapper>
            <SubtitleRegister>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO</SubtitleRegister>
            <Row>
            <Paragraph>Já tenho conta.</Paragraph>
            <Span onClick={handleLogin}>Fazer login</Span>
            </Row>
            </Wrapper>
          </Column>
        </Column>
      </Container>
    </>
  )
}
export default Register