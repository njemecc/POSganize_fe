import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { ADMIN } from "../utils/roles";
import { toast } from "react-hot-toast";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdminProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, role } = useUser();

  useEffect(() => {
    if (role !== ADMIN && !isLoading) {
      navigate("/trainings");
      toast.error("not authorized");
    }
  }, [navigate, role, isLoading]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (role === ADMIN) return children;
};

export default AdminProtectedRoute;
