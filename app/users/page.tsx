import React from 'react'

interface IUsers {
    id: number;
    name: string;
    email: string
}
const Users = async () => {

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
    return (
        <div className='p-[20px]'>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default Users