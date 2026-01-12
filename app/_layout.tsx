"use client";

import React, { ReactNode, useState } from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

type LayoutProps = {
    children: ReactNode;
}

const _layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='min-h-screen w-full bg-[#202124]'>
            <div className='min-h-14.5 md:min-h-17.5'>
                <Navbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} sidebarOpened={isSidebarOpen} />
            </div>
            <div className='flex'>
                <Sidebar showSidebar={isSidebarOpen} />
                {children}
            </div>
        </div>
    )
}

export default _layout