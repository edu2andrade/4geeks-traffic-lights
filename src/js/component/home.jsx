import React, { useEffect } from "react";
import { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [intervalId, setIntervalId] = useState(null);
	const [trafficLightColors, setTrafficLightColors] = useState({
		red: "",
		orange: "",
		green: "",
	});

	useEffect(() => {
		setTrafficLightColors({
			red: 'selected',
			orange: '',
			green: '',
		})
	}, [])

	const handleTrafficLightClick = (color) => {
		if (trafficLightColors.hasOwnProperty("purple")) {
		  setTrafficLightColors({
			red: color === "red" ? "selected" : "",
			orange: color === "orange" ? "selected" : "",
			green: color === "green" ? "selected" : "",
			purple: color === "purple" ? "selected" : "",
		  });
		} else {
		  setTrafficLightColors({
			red: color === "red" ? "selected" : "",
			orange: color === "orange" ? "selected" : "",
			green: color === "green" ? "selected" : "",
		  });
		}
		setSelectedColor(color);
	  };

	const cycleColors = () => {
		switch (selectedColor) {
			case "red":
				handleTrafficLightClick("orange")
				break;
			case "orange":
				handleTrafficLightClick("green")
				break;
			case "green":
				handleTrafficLightClick("purple")
			break;
		
			default:
				handleTrafficLightClick("red")
				break;
		}
	};

	const addPurpleColor = () => {
    setTrafficLightColors({
      ...trafficLightColors,
      purple: "",
    });
  };

	return (
		<div className="mainContainer">
			<div className="stick"></div>
			<div className="trafficLightsContainer">
				<div onClick={() => handleTrafficLightClick("red")} className={`light red ${trafficLightColors.red}`}></div>
				<div onClick={() => handleTrafficLightClick("orange")} className={`light orange ${trafficLightColors.orange}`}></div>
				<div onClick={() => handleTrafficLightClick("green")} className={`light green ${trafficLightColors.green}`}></div>
				{(trafficLightColors.purple === "" || trafficLightColors.purple === "selected") && (
          <div
            onClick={() => handleTrafficLightClick("purple")}
            className={`light purple ${trafficLightColors.purple}`}
          ></div>
        )}
			</div>
				<button className="button" onClick={cycleColors}>Cycle Lights</button>
				<button className="button" onClick={addPurpleColor}>Add Purple Light</button>
		</div>
	);
};

export default Home;
