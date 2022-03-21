import { useNavigate } from "react-router-dom";

const useNavigation = ({ path }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(path);

  return {
    handleClick,
  };
};

export default useNavigation;
