import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

const AccountDropDown = () => {
    // const [user, setUser] = useState(null);
    // const supabase = createClient();

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const { data: { user } } = await supabase.auth.getUser();
    //             setUser(user)
    //         } catch (error) {
    //             console.error("Error fetching user", error);
    //         }
    //     }
    //     fetchUser()
    // }, [])

    // const handleLogout = async () => {
    //     try {
    //         await signOut();
    //         setUser(null);
    //     } catch (error) {
    //         console.error("Logout error:", error);
    //     }
    // };

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

            <DropdownMenuContent align="center" side="bottom" className="w-36 bg-white">
                <DropdownMenuLabel className="font-medium">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Profile</DropdownMenuItem>
                {user ? (
                    <DropdownMenuItem
                        // onClick={handleLogout}
                        className="hover:bg-gray-100 hover:text-primary cursor-pointer">Logout</DropdownMenuItem>
                ) : (
                    <>
                        <Link href="/login">
                            <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Sign In</DropdownMenuItem>
                        </Link>
                        <Link href="/register">
                            <DropdownMenuItem className="hover:bg-gray-100 hover:text-primary cursor-pointer">Sign Up</DropdownMenuItem>
                        </Link>
                    </>
                )
                }
            </DropdownMenuContent >
        </DropdownMenu >
    );
};

export default AccountDropDown;
