import logoImage from "../../../food-logo.png";

const Logo = () => {
  console.log(logoImage.img); // Log the imported image to verify it's loaded correctly
  return (
    <div className="logo-container">
      <img className="logo" src={logoImage} alt="Swiggy Logo" />
    </div>
  );
};

export default Logo;