import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/BBM/./BloodStatistics.css";

const BloodStatistics = () => {
  const bloodTypes = [
    { type: "A+", percentage: 70 },
    { type: "A-", percentage: 50 },
    { type: "B+", percentage: 60 },
    { type: "B-", percentage: 40 },
    { type: "AB+", percentage: 80 },
    { type: "AB-", percentage: 30 },
    { type: "O+", percentage: 35},
    { type: "O-", percentage: 20 },
  ];

  const [fillType, setFillType] = useState("half");
  const navigate = useNavigate();

  const handleTitleClick = () => {
    setFillType((prevType) => (prevType === "half" ? "full" : "half"));
    navigate("/blood-statistics");
  };

  return (
    <div className="blood-statistics">
      {/* <h1 className="clickable-title" onClick={handleTitleClick}>
      </h1> */}
      <div className="blood-drops">
        {bloodTypes.map((blood) => (
          <div key={blood.type} className="blood-drop-container">
            <span className="blood-type">{blood.type}</span>
            <div className="blood-drop">
              <motion.div
                className="blood-fill"
                initial={{ height: 0 }}
                animate={{
                  height:
                    fillType === "full"
                      ? `${blood.percentage}%`
                      : `${blood.percentage / 2}%`,
                }}
                transition={{ duration: 1.5 }}
              ></motion.div>
            </div>
            <span className="percentage">{blood.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodStatistics;
