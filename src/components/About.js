import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <h4>This is about us page</h4>
      <Outlet />
    </>
  );
};

export default About;
