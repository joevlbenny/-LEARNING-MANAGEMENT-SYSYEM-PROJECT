import React from 'react'
import Sidebar from './Sidebar'

function Dashboard() {
    return (
        <div>

            <div className='container mt-4'>
                <div className='row'>
                    < aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    Dashboard
                </div>
            </div>



        </div>
    )
}

export default Dashboard
