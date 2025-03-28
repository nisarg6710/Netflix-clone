"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";


export default function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-10 w-10 rounded-sm">
                    <AvatarImage src="https://xahbokolffjwvwihlaia.supabase.co/storage/v1/object/public/user-image//avatar.png" />
                    <AvatarFallback className="rounded-sm">NC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1 text-gray-900 bg-gray-300 p-2 rounded-md">
                        <p className="text-sm font-medium leading-none">Nisarg</p>
                        <p className="text-xs leading-none text-muted-foreground">Neerav</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()} className="text-white-900 bg-gray-300  cursor-pointer ml-2">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}