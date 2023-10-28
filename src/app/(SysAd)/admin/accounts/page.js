"use client";

import SquareButton from "@/app/GeneralComponents/SquareButton";
import AccountsTable from "../components/AccountsTable";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const AccountsPage = () => {
   const router = useRouter();
   useEffect(() => {
      router.prefetch("/admin/add-account");
   }, []);
   return (
      <div className="">
         <div className="flex items-center justify-between bg-[#f4f9ff] p-2 px-4">
            <div className=" flex items-center gap-4">
               <SquareButton
                  buttonStyle={"blue"}
                  icon={
                 
                        <i className="fi fi-ss-arrow-small-left text-lg scale-150"></i>
                 
                  }
               />
               <h1 className="uppercase font-semibold text-xl">
                  Manage Accounts
               </h1>
            </div>
            <div className="flex items-stretch gap-4">
               <SquareButton
                  onClick={() => {
                     router.push("/admin/accounts/add-account");
                  }}
                  buttonStyle={"blue"}
                  icon={
          
                        <i className="fi fi-ss-user-add"></i>
             
                  }
               />
               <input type="text" />
            </div>
         </div>
         <div>
            <div className="mt-10">
               <AccountsTable />
            </div>
         </div>
      </div>
   );
};

export default AccountsPage;
