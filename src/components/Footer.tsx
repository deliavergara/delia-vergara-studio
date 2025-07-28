import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contacto");
  };
  return;
};