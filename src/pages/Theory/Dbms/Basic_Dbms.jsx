import React from 'react'
import { Link } from 'react-router-dom'

const Basic_Dbms = () => {
    
  return (
    <>
    <div className="container-fluid g-0 bg-black design p-2" style={{minHeight:'100vh'}}>
     
      <div className="row">
        <div className="col-lg-2 col-0"></div>
        <div className="col-lg-8 col-12">
        <h3 className='text-warning text-start'> What Do You Mean By  DBMS ?</h3> 
     <p className='textColor'>DBMS Stands For Database management System . Where We are Managing our data . </p>
     <p className='text-light'> Data is nothing until it is processed ,  Means the raw form of information if it is analyzed and make some sense . Data will be like text, observations, figures, symbols,
and descriptions of things etc.</p>
     <p className='text-light'> Lets go through an example:-</p>
     <p className='text-light'> An simple example will be like 52 kg , 5.3ft  as the data of a Person is useless if we will consider the data in a term arrange it then we can find its BMI , and many more details . So Without processed the data is not worthy it is only a set of bit of integers .</p>

     <p className='text-light'> We can go through an another example as if you have an social media handle and you want to expand your business online so you can apply an way where you can post something on each platform and at the response of different platform you can see like you get more user engagement on instagram rather than Twitter so you could post more content on instgram as a result you can choose or take <span className='highlight p-1'>decision</span>  based on right data .</p>

<p className='text-light'> As most of the business have an pillar of data . Now a day <span className='highlight p-1'> data is termed as fuel .</span> </p>
<div className='p-lg-5 p-1'>
<img src="img/DBMS1.jpg" className='img-fluid' alt="dbms first page image" />
</div>
      <h5 style={{color:'#FFE164'}} >Types Of Data</h5>
      <p className='text-light'> Data are Generally tyes</p>
      <ul className='text-light'>
        <li>Quantative Data :- like set Of numerical , weight ,cost values .</li>
        <li>Qualataive Data :-  Some thing descriptive values like gender ,name , hair color .</li>
      </ul>

      <h5 style={{color:'#FFE164'}} >Basic Difference between RAW and DATA</h5>
      <table border="1" className='text-light p-2 mb-3'>
        <thead className='border'>
            <tr className='text-warning '>
                <th>Aspect</th> 
                <th>Raw Data</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border'>
                <td className='text-success'>Definition</td>
                <td> Unprocessed, unorganized information</td>
                <td>Processed and organized information</td>
            </tr>
            <tr className='border'>
                <td className='text-success'>Structure</td>
                <td> Does not have a specific format or structure</td>
                <td>Has a defined structure for easy access and analysis</td>
            </tr>
            <tr className='border'>
                <td className='text-success'>Use</td>
                <td> Requires processing and analysis to be meaningful data that  makes sense.</td>
                <td>Ready for use in analysis, reporting, or decision-making</td>
            </tr>
            <tr className='border'>
                <td className='text-success'>Example</td>
                <td> Raw survey responses without any organization</td>
                <td>Statistical summaries generated from processed survey data</td>
            </tr>
            <tr className='border'>
                <td className='text-success'>Characteristics</td>
                <td>  ...May contain inconsistencies or redundancies</td>
                <td>Consistent, accurate, and reliable</td>
            </tr>
        </tbody>
    </table>

    <p className='text-light'> So upto here we have learned that what is data !! okay so moving next we have to know about database  , DBMS Architecture and all that so lets Start :-</p>
    <p className='highlight'> Database is an electronic plate Where data is stored in such a way that data could be easily accessed and oprations can perform .</p>
    <span className='text-light'> But to Make real use of database we need a databse management system. </span>
<p className='text-light'> A database managemnet system helps to perform the db interactions work :- </p>

<ul className='text-light'>
  <li>A DBMS encompasses not only the database but also all the software and tools needed to manage it. Its purpose is to carry out various tasks such as adding, accessing, updating, and deleting data.
    <li>
    A database-management system (DBMS) is a collection of interrelated data and a set of
programs to access those data. The collection of data, usually referred to as the database,
contains information relevant to an enterprise. The primary goal of a DBMS is to provide a way to
store and retrieve database information that is both convenient and efficient.
    </li>
  </li>
</ul>

<h6 className='textColor'> File System</h6>
<p className='text-light'> As before moving forward to DBMS an existing technology at that time named File system is there we should know about that . File System it is simple as you want anything you need to create file and work but there is disadvantage of file system . Below listed the drawbacks :- </p>

<ol className='text-light'>
  <li>Data Redudancy and inconsistency</li>
  <li>Difficulty in accessing the Data</li>
  <li>Data isolation</li>
  <li>Integrity Problems</li>
  <li>Atomicity problems</li>
  <li>Concurrent access anamolies</li>
  <li>Secuirity problems</li>
</ol>
<p className='text-light'>All the Drawbacks are solved in DBMS System ,  As the drawbacks are there we are solving all of them in DBMS System in next pages .. </p>
    <div className="row">
      <div className="col-12 text-end">
        <Link to="/Architecture-Of-Dbms" className="btn bg-dark text-warning text-capitalize">Next</Link>
      </div>
    </div>
        </div>
        <div className=" col-lg-2 col-0"></div>
      </div>
    </div>
    
    </>
  )
}

export default Basic_Dbms