import { Logger } from "./Logger";
import { PCSelect } from "./PCSelect";
import { ZoneSelect } from "./ZoneSelect";

export const IndexLogger = () => {
  return (
    <div className="flex flex-col gap-4 mx-auto">
      <ZoneSelect />
      <PCSelect />
      <Logger />
    </div>
  );
};
