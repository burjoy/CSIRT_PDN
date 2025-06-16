import { React, useState } from "react";
import ActivityCard from "../page-components/ActivityCard";
import activityData from "../../src/db/activityList.json";

export const ActivityList = () => {
  const [activity, setActivity] = useState(activityData);

  return (
    <>
      {activity.map((item) => (
        <ActivityCard
          key={item.id}
          img={item.img}
          month={item.month}
          day={item.day}
          author={item.author}
          title={item.title}
          subtitle={item.subtitle}
          desc={item.desc}
        />
      ))}
    </>
  );
};
