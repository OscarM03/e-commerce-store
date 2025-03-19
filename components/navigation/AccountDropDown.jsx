import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const AccountDropDown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/assets/icons/user.png"
                        alt="User icon"
                        width={24}
                        height={24}
                    />
                    <p className='hidden lg:block'>Account</p>
                </div>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="center" side="bottom" className="w-36">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Sign In</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Sign Up</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AccountDropDown;
