'use client'

import { useRouter } from "next/navigation"

const NewUsers = () => {
    const router = useRouter()
    return (
        <button className="btn btn-primary" onClick={() => router.push('/users')}>Create</button>
    )
}

export default NewUsers