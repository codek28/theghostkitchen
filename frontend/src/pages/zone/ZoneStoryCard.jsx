import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserZone } from "../../stores/user/userSlice";

export const ZoneStoryCard = () => {
  const [zonestory, setZoneStory] = useState([]);
  const activeZone = useSelector(getUserZone);

  useEffect(() => {
    fetch("http://localhost:3001/api/zone/get-zone-story", {
      method: "POST",
      body: JSON.stringify({
        zoneid: activeZone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setZoneStory(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="p-4">
      {zonestory.zonestory ? (
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Ghost Foods now in {zonestory.zonestory.Name}
          </div>
          <div className="collapse-content">
            <p>{zonestory.zonestory.ZoneTagline}</p>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
