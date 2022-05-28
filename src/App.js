import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained Again",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div className="charts" style={{ width: "50vw" }}>
        <BarChart chartData={userData} />
      </div>
      <div className="charts" style={{ width: "50vw", marginTop:"100px" }}>
        <LineChart chartData={userData} />
      </div>
      <div className="charts" style={{ width: "50vw",marginTop:"100px" }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
