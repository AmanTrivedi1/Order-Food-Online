import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";
import loginimage from "../../assets/app/app-screen-3.png";

const Login = () => {
  const loginHandler = () => {
    window.open(`${server}/googlelogin`, "_self");
  };

  return (
    <>
      <section className="login__page">
        <div>
          <img className="login__img" src={loginimage} alt="login page" />
        </div>
        <div className="login">
          <motion.button
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            onClick={loginHandler}
          >
            Login via
            <FcGoogle />
          </motion.button>
          <p className="login__para">
            We are allow to login via google account and we make sure that all
            your information should keep safe so please feel free to lgoin via
            google account and there is no term and cnditions
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
