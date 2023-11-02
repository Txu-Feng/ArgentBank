import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    });

  return (
    <section className="error">
      <div className="error-content">
        <p className="error-number">404</p>
        <p className="error-text">
            The page you requested does not exist. You will be redirected to the homepage.
        </p>
      </div>
    </section>
  );
};

export default Error;