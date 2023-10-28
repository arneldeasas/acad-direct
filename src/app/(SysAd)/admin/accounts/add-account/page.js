"use client";
import { useRouter } from "next/navigation";
import SquareButton from "@/app/GeneralComponents/SquareButton";

import AccountEntries from "./components/AccountEntries";
const AddAccountPage = () => {
   const router = useRouter();
   return (
      <div className="overflow-y-auto max-h-full relative ">
         <div className="bg-white p-5 sticky top-0 z-10">
            <div className="flex items-center justify-between bg-[#f4f9ff] p-2 px-4 ">
               <div className=" flex items-center gap-4">
                  <SquareButton
                     onClick={() => {
                        router.push("/admin/accounts");
                     }}
                     buttonStyle={"blue"}
                     icon={
                        <i className="fi fi-ss-arrow-small-left text-lg scale-150"></i>
                     }
                  />
                  <h1 className="uppercase font-semibold text-xl">
                     Add Accounts
                  </h1>
               </div>
            </div>
         </div>

         <div className="px-10 pb-20">
            <AccountEntries />
         </div>
      </div>
   );
};

export default AddAccountPage;
