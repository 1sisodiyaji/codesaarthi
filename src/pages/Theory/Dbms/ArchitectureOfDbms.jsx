import React from 'react'

const ArchitectureOfDbms = () => {
    return (
        <>
            <div className="container-fluid g-0 bg-black design p-2 text-light" style={{ minHeight: '100vh' }}>
                <h5>Data Architecture </h5>
                <p className='text-capitalize'>The architecture of database is mainly an efficient factor or benefit of DBMS that it has an functionailty of <span className='highlight'>Abstract View </span> Which allows particular person a particular data of whole database.</p>
                <p> View Of Data : </p>
                <p>As it is necessary as to show the data to different person to different data <br />
                    for example :- Amazon has such a big database anad along with this different branch or department at their office as if a user has a data of order , likes , credit card data soeme sensitive records . So An logistic department do not any data about the likes or credit card ata of a user as it is dangerous , So to handle all these cases DBMS handle all these .
                </p>
                <p className='text-capitalize'><span className='highlight'>Abstract View </span> is a data structure that is used to show the data of a particular person to different data of the database. </p>
                <p>Now we will discuss about the <span>Three Level Architectures :</span></p>
                <ol>
                    <li>Physical Level:</li>
                    <ul>
                        <li>
                            The Lowest Level Of Abstraction That describe how the data is Stored.
                        </li>
                        <li>Low Level data Structure Used</li>
                        <li>It has a physical Schema which will show Physical Storage Sturcture of data.</li>
                        <li>Here we discuss about Storage Allocation , Data Compression</li>
                        <li>Main Goal is we can define the algorithms that allow algorithms to define data.</li>
                    </ul>
                    <li>Logical level /Conceptual Level</li>
                    <ul>
                        <li>
                            At these level the view is like design of database at the concepyual level that describes what type of data is stored in database and what type of relationship is in between the data.
                        </li>
                        <li>At these level it does not need to aware about physical schema.</li>
                        <li>An DBA (Database Administratior) decides what information or data will be keep in the database  as Abstraction</li>
                        <li>The end Goal is to make use of db Easier as possible.</li>
                    </ul>
                    <li>View level / External Level:</li>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </ol>
            </div>
        </>
    )
}

export default ArchitectureOfDbms