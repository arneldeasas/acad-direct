import { db } from "@/app/firebase/firebase";
import { Checkbox } from "@mui/material";
import { format } from "date-fns";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const AccountsTable = () => {
   const [users, setUsers] = useState(null);

   useEffect(() => {
      const unsub = onSnapshot(collection(db, "users"), (docSnaps) => {
         if (!docSnaps.empty) {
            const usersArr = docSnaps.docs.map((doc) => ({
               id: doc.id,
               ...doc.data(),fullName:`${doc.data().firstName} ${doc.data().lastName}`,
            }));

            setUsers(usersArr);
         } else {
            setUsers([]);
         }
      });
   }, []);
   return (
      <div>
         <table className="w-full">
            <thead>
               <tr>
                  <th>
                     <div>
                        <Checkbox
                           checkedIcon={
                              <div className="w-[1.3rem] h-[1.3rem] bg-white border-2 border-gray-500 ">
                                 <div className="h-full w-full bg-gray-800 border-2 border-white"></div>
                              </div>
                           }
                           icon={
                              <div className="w-[1.3rem] h-[1.3rem] bg-white border-2 border-gray-500"></div>
                           }
                        />
                     </div>
                  </th>
                  <th>
                     <div>no</div>
                  </th>
                  <th>
                     <div>name</div>
                  </th>
                  <th>
                     <div>email</div>
                  </th>
                  <th>
                     <div>type</div>
                  </th>
                  <th>
                     <div>department</div>
                  </th>
                  <th>
                     <div>date created</div>
                  </th>
                  <th>
                     <div>last modified</div>
                  </th>
                  <th>
                     <div>actions</div>
                  </th>
               </tr>
            </thead>
            <tbody>
               {users &&
                  users?.map((user,index) => (
                     <tr>
                        <td>
                           <div>
                              <Checkbox
                                 checkedIcon={
                                    <div className="w-[1.3rem] h-[1.3rem] bg-white border-2 border-gray-500 ">
                                       <div className="h-full w-full bg-gray-800 border-2 border-white"></div>
                                    </div>
                                 }
                                 icon={
                                    <div className="w-[1.3rem] h-[1.3rem] bg-white border-2 border-gray-500"></div>
                                 }
                              />
                           </div>
                        </td>
                        <td>
                           <div>{index+1}</div>
                        </td>
                        <td>
                           <div className="capitalize">{user.fullName}</div>
                        </td>
                        <td>
                           <div>{user.email}</div>
                        </td>
                        <td>
                           <div className="capitalize">{user.type}</div>
                        </td>
                        <td>
                           <div className="capitalize">{user.department}</div>
                        </td>
                        <td>
                           <div>{format(user.dateCreated?.toDate(),'MMM dd, yyyy')}</div>
                        </td>
                        <td>
                           <div>{format(user.dateLastModified?.toDate(),'MMM dd, yyyy')}</div>
                        </td>
                        <td>
                           <div></div>
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
};

export default AccountsTable;
