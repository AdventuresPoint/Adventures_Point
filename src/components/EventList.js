import React from 'react'

export default function EventList() {
    return (
        <div className='container'>
            <table class="table table-striped">

                <thead>
                    <tr>
                   
                        <th scope="col">Bookdate</th>
                        <th scope="col">No Of person</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    )
}
