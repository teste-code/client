import { GoFileDirectoryFill } from 'react-icons/go'
import { IoHome } from 'react-icons/io5'

export const LinksHeader =[
    {
        id: 1,
        titlePath: "Home",
        path: "/",
        figure: <IoHome fontSize={18} />
    },
    {
        id: 2,
        titlePath: "Músicas",
        path: "/sounds",
        figure: <GoFileDirectoryFill fontSize={18} />
    }
]