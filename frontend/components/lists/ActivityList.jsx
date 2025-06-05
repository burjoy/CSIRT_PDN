import { React, useState } from "react";
// Component
import ActivityCard from "../page-components/ActivityCard";

// Data
import activityData from "../../src/db/activityList.json";

export const ActivityList = () => {
  const [activity, setActivity] = useState(activityData);
  return (
    <>
      {activity.map((item) => (
        <ActivityCard
          key={item.id}
          img={item.img}
          title={item.title}
          subtitle={item.subtitle}
          desc={item.desc}
        />
      ))}
    </>
  );
};
