import { useNavigate } from "react-router-dom";

const useNavigation = ({ setElementPosition }) => {
  const navigate = useNavigate();

  const getOnClickHandler = (currentSettings) => () => {
    navigate(currentSettings["path"]);
    setElementPosition(false);
  };

  return {
    getOnClickHandler,
  };
};

export default useNavigation;
