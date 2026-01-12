import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const Loader = ({ fullHeight = false }) => {
    return (
        <div className={`${fullHeight ? "h-screen" : "h-[calc(100vh-58px)] md:h-[calc(100vh-70px)]"} bg-[#202124] grow flex items-center justify-center`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='flex flex-col items-center'
            >
                <Loader2 className='w-7 h-7 text-blue-400 animate-spin' />
                <span className='mt-4 text-sm text-gray-200'>
                    Loading...
                </span>
            </motion.div>
        </div>
    )
}

export default Loader