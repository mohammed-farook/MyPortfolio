/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [project, setProject] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setExperience(1);
      setProject(10);
      setClients(100);
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, []);
  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={project} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Tasks</p>
      </div>
    </div>
  );
};

export default Facts;
