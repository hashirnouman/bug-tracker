import React from 'react'
import UsersTable from './UsersTable'
import Link from 'next/link'
interface Props {
    searchParams: { sortOrder: string }
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {

    console.log(sortOrder)

    return (
        <div className='p-[20px]'>
            {/* <p>{new Date().toLocaleTimeString()}</p> */}
            <h1>Users</h1>
            <Link href='/users/new' className='btn'>New User</Link>
            <UsersTable sortOrder={sortOrder} />

        </div>
    )
}

export default Users