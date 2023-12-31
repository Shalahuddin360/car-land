
// context
import { useContext } from "react";
import { SearchContext } from "../context/search";
// Component
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[80px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } `}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelection/>
        <HoursSelection/>
              {/* btn  */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
         <button className={`${searchActive ? 'btn btn-sm bg-accent xl:w-[164px]' : 'btn btn-sm bg-accent xl:w-[184px]'}`}>Search</button>
       </div>
      </div>
 
    </div>
  );
}
