import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/orders/32457XYZ");
  }, [navigate]);

  return <div>Home</div>;
};

export default Home;
