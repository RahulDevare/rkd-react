import { LOGO_URL } from "../../util/constant";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt="Swiggy Logo" />
    </div>
  );
};

export default Logo;