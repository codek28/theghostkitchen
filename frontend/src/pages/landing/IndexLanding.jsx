import { ZoneSelect } from "./ZoneSelect";
import { LandingCard } from "./LandingCard";
import { LandingFeedbox } from "./LandingFeedbox";

export const IndexLanding = () => {
  return (
    <div className="flex flex-col mx-4 my-4 ">
      <ZoneSelect />
      <LandingFeedbox/>
    </div>
  );
};
