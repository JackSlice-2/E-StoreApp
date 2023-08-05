import { UserButton, auth } from '@clerk/nextjs';
import React from 'react'
import { MainNav } from './main-nav';
import StoreSwitcher from './store-switcher';
import { redirect, useParams } from 'next/navigation';
import prismadb from '@/lib/prismadb';
import { ThemeToggle } from './theme-toggle';
import { ComboboxDemo } from './ui/combobox';

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });
    
  return (    
    <div className='border-b'>
        <div className="flex h-16 items-center px-4">
            <StoreSwitcher items={stores}/>
        <MainNav className="mx-6 align-items-center flex-auto pl-20"/>
        <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    </div>
  );
}

export default Navbar;