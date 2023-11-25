import Link from "next/link"


const Navbar = () => {
    return (
        <nav className="bg-gray-400 flex gap-7">
            <Link href="/">home</Link>
            <Link href="/users">Users</Link>
        </nav>
    )
}

export default Navbar