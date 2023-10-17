import { UserButton } from "@clerk/nextjs/app-beta";

const RootPage = () => {
    return ( 
        <div>
        <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default RootPage;