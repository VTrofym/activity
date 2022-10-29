import "./App.css";
import { getRandomActivity } from "../helpers/API";
import { useEffect, useState } from "react";
import { ActivityItem } from "./ActivityItem/ActivityItem";

const activitysArrey = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

function App() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    getRandomActivity()
      .then((res) => {
        setActivity(res);
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
  }, []);

  return (
    <div>
      {activity && <ActivityItem activity={activity} />}
      <div>
        <select name="type" id="">
          {activitysArrey.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
