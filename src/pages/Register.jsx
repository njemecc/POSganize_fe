import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import RegisterForm from "../features/authentication/RegisterForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Spinner from "../ui/Spinner";

const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Register = () => {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  if (isAuthenticated && !isLoading) {
    toast.success("Alredy signed in");
    navigate("/trainings");
  }

  isLoading && <Spinner />;

  return (
    <RegisterLayout>
      <Logo />
      <Heading as="h4">Register</Heading>
      <RegisterForm />
    </RegisterLayout>
  );
};

export default Register;
