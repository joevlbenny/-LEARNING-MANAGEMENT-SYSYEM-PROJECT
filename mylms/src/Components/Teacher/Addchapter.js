import React from 'react'
import Teachersidebar from './Teachersidebar'
function Addchapter() {
    return (
        <div>




            <div className='container mt-4'>
                <div className='row'>


                    < aside className='col-md-3'>

                        <Teachersidebar />
                    </aside>

                    <section className='col-md-9 '>
                        <div className='card'>
                            <h5 className='card-header'>Add Chapter</h5>
                            <div className="card-body">
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Title</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>

                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Description</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="staticEmail" class="col-sm-2 col-form-label ">Videos</label>
                                    <div class="col-sm-10">
                                        <input type="file" class="form-control mt-2 " id="staticEmail" />
                                    </div>
                                </div>
                                <div class="mb-3 row ms-2 mt-2 me-2">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Remarks</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control mt-2" placeholder='Remarks' id="inputPassword" />
                                    </div>
                                </div>


                                <button className='btn-primary btn-sm ms-3 mb-3' style={{ 'width': '100px' }}>Submit</button>
                            </div>
                        </div>


                    </section>


                </div>
            </div>



        </div>
    )
}

export default Addchapter
