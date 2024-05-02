import React from 'react';

const PractiseBasicArray = () => {
  return (
    <div className="container-fluid bg-black" style={{minHeight: '100vh'}}>
      <h3 className='text-center  text-warning'>Array Questions</h3>
      <details>
        <summary>Q1. Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array ? <br/>
<div className="card w-50 p-3 bg-black" style={{border:'1px solid #262626'}}>
  <pre>
{`Input: 
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output: 1 10000
Explanation: minimum and maximum elements of array are 1 and 10000.`}
</pre>
</div>
        </summary>
        <p>Arrays are used to store multiple values in a single variable. They allow us to efficiently organize and manipulate collections of data. Arrays provide a way to access individual elements using their index, making it easier to work with large datasets and perform operations like sorting, searching, and iterating.</p>
      </details>
    </div>
  );
};

export default PractiseBasicArray;
