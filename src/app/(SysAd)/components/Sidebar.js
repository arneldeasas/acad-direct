import Link from "next/link";
const Sidebar = () => {
   return (
      <div className="px-5 bg-[#0251af] font-semibold">
         <div className="text-white h-full flex flex-col">
            <div className=" flex uppercase flex-col gap-1 ">
               <Link href={'/admin'}>
               <div className="py-2 flex items-center gap-2">
                  <i className="fi fi-ss-house-chimney"></i>
                  <p>Home</p>
               </div></Link>

               <Link href={'/admin/accounts'}>
                  <div className="py-2 flex items-center gap-2">
                     <i className="fi fi-ss-users"></i>
                     <p>Accounts</p>
                  </div>
               </Link>
               <div className="py-2 flex items-center gap-2">
                  <i class="fi fi-ss-document"></i>
                  <p>documents</p>
               </div>
            </div>

            <div className="py-2 flex items-center gap-2 mt-auto mb-10">
               <i className="fi fi-ss-door-open"></i>
               <p className="uppercase">Log out</p>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
