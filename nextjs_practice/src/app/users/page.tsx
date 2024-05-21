import React from 'react'
import Link from '../../../node_modules/next/link'

function Users() {
  return (
    <div style={{backgroundColor: "blue"}}>
        <Link href={"users/user-1"}>User1</Link>
        <Link href={"users/user-2"}>User2</Link>
    </div>
  )
}

export default Users