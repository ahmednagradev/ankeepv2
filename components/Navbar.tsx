import { Menu, RotateCcw, Search } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ onToggleSidebar, sidebarOpened=false }: any) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className='border-b border-[#5F6368] md:px-3 px-1 md:py-3 py-2 flex items-center justify-between bg-[#202124] fixed w-screen'>
            <div className='flex items-center gap-2 md:gap-3'>
                <span
                    onClick={onToggleSidebar}
                    className={`${sidebarOpened ? "bg-gray-800" : ""} p-2.5 md:p-3 rounded-full hover:bg-gray-900 transition`}>
                    <Menu size={20} />
                </span>
                <div className='flex items-center gap-1'>
                    <h2
                        onClick={() => router.push("/")}
                        className='text-xl md:text-2xl text-gray-200 cursor-pointer'
                    >
                        Ankeep
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-400'>{pathname}</p>
                </div>
            </div>
            <div className='flex items-center gap-2 md:gap-4'>
                <span className='p-2.5 md:p-3 rounded-full hover:bg-gray-900 transition'>
                    <Search size={20} />
                </span>
                <span className='p-2.5 md:p-3 rounded-full hover:bg-gray-900 transition'>
                    <RotateCcw size={20} />
                </span>
                <div className='h-9 w-9 md:h-10 md:w-10 bg-amber-200 rounded-full mx-1 md:mx-2'>
                </div>
            </div>
        </div>
    )
}

export default Navbar