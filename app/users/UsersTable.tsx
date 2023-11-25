import Link from 'next/link';
import { sort } from 'fast-sort';
interface IUsers {
    id: number;
    name: string;
    email: string
}

interface Props {
    sortOrder: string
}
const UsersTable = async ({ sortOrder }: Props) => {
    /**
     * the option of caching is only avaible in fetch api not in other library like axios
     */
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        // if we set option cache :'no-store' the default cacheing will be disabled 
        // cache: 'no-store',
        next: {
            // this is fetch fresh data after every 10 seconds
            revalidate: 10
        }
    })
    const users: IUsers[] = await res.json()
    const sortedArray = sort(users).asc(sortOrder == 'email' ? user => user.email : user => user.name)
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th><Link href="/users?sortOrder=name">Name</Link></th>
                    <th><Link href="/users?sortOrder=email">Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {sortedArray.map((user) => (
                    <tr key={user.id} >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default UsersTable