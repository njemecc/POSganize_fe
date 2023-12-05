import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Spinner from "../ui/Spinner";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Login = () => {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  if (isAuthenticated && !isLoading) {
    toast.success("Alredy signed in");
    navigate("/trainings");
  }

  isLoading && <Spinner />;

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to yout account</Heading>
      <LoginForm />
    </LoginLayout>
  );
};

export default Login;
