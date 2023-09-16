import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";
export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium ">
       <div className="container mx-auto">
         <div className="flex flex-col gap-y-4">
           {/* location selection */}
           <LocationSelection/>
           {/* date selection */}
           <DateSelection/>
           {/* HoursSelection  */}
           <HoursSelection/>
           {/* btn  */}
           <div className="flex items-center px-6">
            <button className="btn btn-sm  w-[164px] mx-auto bg-red-400">Search</button>
           </div>
         </div>
       </div>
    </div>
  )
}
