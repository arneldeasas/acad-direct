"use client";
import InputField from "@/app/GeneralComponents/InputField";
import { useState } from "react";
import SquareButton from "@/app/GeneralComponents/SquareButton";
import MyPopover from "@/app/GeneralComponents/MyPopover";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { doc, serverTimestamp, writeBatch } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { nanoid } from "nanoid";
const bcrypt = require("bcryptjs");
const AccountEntries = () => {
   const router = useRouter();
   const [isPending, setIsPending] = useState(false);
   const [entries, setEntries] = useState([
      {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         department: "",
         type: "",
         dateCreated:'',
         dateLastModified:''
      },
   ]);

   const departments = [
      "Civil Engineering",
      "Electrical Engineering",
      "Information Technology",
   ];

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setIsPending(true);
         const batch = writeBatch(db);

         for (const entry of entries) {
            const hash = bcrypt.hashSync(entry.password, 10);
            batch.set(doc(db, "users", nanoid()), {
               ...entry,
               firstName: entry.firstName.toLowerCase().trim(),
               lastName: entry.lastName.toLowerCase().trim(),
               password: hash,
               department: entry.department.toLowerCase(),
               type: entry.type.toLowerCase(),
               dateCreated: serverTimestamp(),
               dateLastModified: serverTimestamp()
            });
         }

         await batch.commit();
         router.push("/admin/accounts");
         toast.success("Transaction completed successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      } catch (error) {
         setIsPending(false);
         toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      }
   };
   return (
      <div className="mt-10">
         <form action="" className="mt-5" onSubmit={handleSubmit}>
            {entries.length > 0 && (
               <SquareButton
                  isPending={isPending}
                  loadingName="Please wait..."
                  className={"  px-6 py-4 block ml-auto"}
                  buttonStyle={"black"}
                  icon={
                     <div className="flex items-center ">
                        <p>Submit</p>
                     </div>
                  }
               />
            )}

            <div className="flex flex-col gap-10 ">
               {entries.map((entry, index) => (
                  <div className="flex items-stretch w-full rounded-lg overflow-clip">
                     <div className=" bg-primary p-2 py-4 font-bold text-white  flex flex-col items-center justify-between">
                        <p>{index + 1}</p>
                        <SquareButton
                           onClick={() => {
                              let entriesCopy = structuredClone(entries);
                              entriesCopy.splice(index, 1);
                              setEntries(entriesCopy);
                           }}
                           icon={<i className="fi fi-ss-trash scale-[1.6]"></i>}
                        />
                     </div>
                     <div className="flex flex-col gap-5 px-5 grow">
                        <div className="flex items-stretch gap-4 ">
                           <InputField
                              value={entry.firstName}
                              onChange={(e) => {
                                 let entriesCopy = structuredClone(entries);
                                 entriesCopy[index].firstName = e.target.value;
                                 setEntries(entriesCopy);
                              }}
                              className={"grow"}
                              icon={<i className="fi fi-ss-user"></i>}
                              label="First name"
                           />
                           <InputField
                              value={entry.lastName}
                              onChange={(e) => {
                                 let entriesCopy = structuredClone(entries);
                                 entriesCopy[index].lastName = e.target.value;
                                 setEntries(entriesCopy);
                              }}
                              className={"grow"}
                              icon={<i className="fi fi-ss-user"></i>}
                              label="Last name"
                           />
                        </div>
                        <InputField
                           value={entry.email}
                           onChange={(e) => {
                              let entriesCopy = structuredClone(entries);
                              entriesCopy[index].email = e.target.value;
                              setEntries(entriesCopy);
                           }}
                           className={"grow"}
                           icon={<i className="fi fi-ss-envelope"></i>}
                           label="Institutional email"
                        />
                        <InputField
                           value={entry.password}
                           onChange={(e) => {
                              let entriesCopy = structuredClone(entries);
                              entriesCopy[index].password = e.target.value;
                              setEntries(entriesCopy);
                           }}
                           className={"grow"}
                           icon={<i className="fi fi-ss-key"></i>}
                           label="Password"
                           type="password"
                        />
                        <div className="flex items-center gap-4 w-full">
                           <MyPopover
                              className={"grow"}
                              anchorElement={
                                 <InputField
                                    value={entry.department}
                                    readOnly={true}
                                    className={"grow"}
                                    icon={
                                       <i className="fi fi-ss-graduation-cap"></i>
                                    }
                                    label="Deparment"
                                 />
                              }
                              displayElement={
                                 <div className="capitalize font-semibold text-sm selection">
                                    {departments.map((dep) => (
                                       <div
                                          onClick={() => {
                                             let entriesCopy =
                                                structuredClone(entries);
                                             entriesCopy[index].department =
                                                dep;
                                             setEntries(entriesCopy);
                                          }}
                                          className="p-4 py-3"
                                       >
                                          {dep}
                                       </div>
                                    ))}
                                 </div>
                              }
                           />
                           <MyPopover
                              className={"grow"}
                              anchorElement={
                                 <InputField
                                    value={entry.type}
                                    readOnly={true}
                                    className={"grow"}
                                    icon={
                                       <i className="fi fi-ss-graduation-cap"></i>
                                    }
                                    label="User type"
                                 />
                              }
                              displayElement={
                                 <div className="capitalize font-semibold text-sm selection">
                                    <div
                                       onClick={() => {
                                          let entriesCopy =
                                             structuredClone(entries);
                                          entriesCopy[index].type = "Faculty";
                                          setEntries(entriesCopy);
                                       }}
                                       className="p-4 py-3 min-w-[200px]"
                                    >
                                       Faculty
                                    </div>
                                    <div
                                       onClick={() => {
                                          let entriesCopy =
                                             structuredClone(entries);
                                          entriesCopy[index].type = "Student";
                                          setEntries(entriesCopy);
                                       }}
                                       className="p-4 py-3 min-w-[200px]"
                                    >
                                       Student
                                    </div>
                                 </div>
                              }
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </form>
         <SquareButton
            onClick={() => {
               let entriesCopy = structuredClone(entries);

               entriesCopy.push({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  department: "",
               });
               setEntries(entriesCopy);
            }}
            className={"block mx-auto mt-10 py-4"}
            buttonStyle={"black"}
            type="button"
            icon={
               <div className="flex items-center gap-2 px-4">
                  <i className="fi fi-ss-plus-small text-xl"></i>
                  <p>add another</p>
               </div>
            }
         />
      </div>
   );
};

export default AccountEntries;
