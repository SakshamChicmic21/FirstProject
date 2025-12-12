import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard Page</h1>
        <section>
            <nav>
                <ul className='flex gap-4 bg-purple-100 p-4 my-2 rounded-md'>
                    <Link to="stats"><li>Stats</li></Link>
                    <Link to="settings"><li>Settings</li></Link>
                    <Link to="reports"><li>Reports</li></Link>
                    <Link to="/logout"><li>Logout</li></Link>
                </ul>
            </nav>
            <Outlet></Outlet>
        </section>
    </div>
  )
}

export default Dashboard