import React from 'react'
import Teachersidebar from './Teachersidebar'

function Teacherdashboard() {
    return (
        <div>

            <div className='container mt-4'>
                <div className='row'>
                    < aside className='col-md-3'>
                        <Teachersidebar />
                    </aside>
                    Dashboard
                </div>
            </div>



        </div>
    )
}

export default Teacherdashboard
