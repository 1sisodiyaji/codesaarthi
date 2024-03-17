import React from 'react'

const PractiseBasicArray = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-warning" style={{minHeight: '100vh'}}>
        <h6 className='text-center p-2'>  Some Basics Questions related to array </h6>
        <div className="accordion" id="accordionExample">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                data-mdb-collapse-init
                className="accordion-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Largest Element in the Array
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show bg-black" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row g-0">
                  <div className="col-lg-6 col-12 bg-black text-light">
                    <h2 className='text-warning'>Question</h2>
                    <h6 className='text-warning'>Problem Statement</h6>
                    <p> You are given an array `arr` of size 'n' Your task is to find the second largest element in the array</p>
                    <h6>Input</h6>
                    <p>{`
                      
The first line of the input contains an integer n (1 <= n <= 10^5), representing the size of the array.

The second line contains 'n' space-separated integers, representing the elements of the array arr.
                  `} </p>

                    <h6 className='text-success'>Output</h6>
                    <p>
                      Output a single integer, which represents the second largest element in the array.</p>
                    <h6 className='text-warning'>Sample Input 1:</h6>
                    <p>5 <br />
                      1 2 3 4 5</p>
                    <h6 className='text-success'>Sample Output 1:</h6>
                    <p>4</p>
                    <h6>Explanation 1:</h6>
                    <p>
                      From the array {`1, 2, 3, 4, 5`}, the second largest element is 4.</p>
                    <h6 className='text-warning'>Sample Input 2:</h6>
                    <p>6 <br />
                      4 7 8 6 7 6</p>
                    <h6 className='text-success'>Sample Output 2:</h6>
                    <p>7</p>
                    <h6>Explanation 2:</h6>
                    <p>The second largest element from the array {`4, 7, 8, 6, 7, 6`} is 7.</p>
                    <h6>Constraints</h6>
                    <p>
                      {` - 1 <= n <= 10^5
- 1 <= arr[i] <= 10^9
`}
                    </p>
                    <h6>Note</h6>
                    <p>
                      You need to implement a solution with a time complexity of O(n), where `n` is the size of the input array `arr`.</p>

                  </div>
                  <div className="col-lg-6 col-12 bg-black text-warning p-1"> Answer

                    <ul className="nav nav-tabs  bg-black text-warning" id="ex1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link active text-warning bg-black"
                          id="ex1-tab-1"
                          href="#ex1-tabs-1"
                          role="tab"
                          aria-controls="ex1-tabs-1"
                          aria-selected="true"
                        >c++</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-2"
                          href="#ex1-tabs-2"
                          role="tab"
                          aria-controls="ex1-tabs-2"
                          aria-selected="false"
                        >Java</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-3"
                          href="#ex1-tabs-3"
                          role="tab"
                          aria-controls="ex1-tabs-3"
                          aria-selected="false"
                        >python</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-4"
                          href="#ex1-tabs-4"
                          role="tab"
                          aria-controls="ex1-tabs-4"
                          aria-selected="false"
                        >JavaScript</a>
                      </li>
                    </ul>

                    <div className="tab-content" id="ex1-content">
                      <div
                        className="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                      >
                        <pre>
                          <code>
                            {`
#include <iostream>
#include <vector>
using namespace std;

int largestElement(vector<int>& arr, int n) {
    int temp = 0;
    for(int i = 0; i < n; i++) {
        if(arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}

int main() {
    // Example usage
    vector<int> arr = {1, 4, 7, 2, 9, 3};
    int n = arr.size();
    int largest = largestElement(arr, n);
    cout << "Largest element: " << largest << endl;
    return 0;
}
`}
                          </code>
                        </pre>

                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <pre>
                          <code>
                            {`
import java.util.*;    
public class Solution {

  static int largestElement(int[] arr, int n) {
      if (n == 0) {
          throw new IllegalArgumentException("Array must not be empty");
      }

      int temp = arr[0];
      for (int i = 1; i < n; i++) {
          if (arr[i] > temp) {
              temp = arr[i];
          }
      }
      return temp;
  }

  public static void main(String[] args) {
      int[] arr = {1, 4, 7, 2, 9, 3};
      int n = arr.length;
      int largest = largestElement(arr, n);
      System.out.println("Largest element: " + largest);
  }
}
`}
                          </code>
                        </pre>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <pre>
                          <code>
                            {`
      def largest_element(arr):
      if not arr:
          raise ValueError("Array must not be empty")
      
      temp = arr[0]
      for i in range(1, len(arr)):
          if arr[i] > temp:
              temp = arr[i]
      return temp
  
  # Example usage:
  arr = [1, 4, 7, 2, 9, 3]
  largest = largest_element(arr)
  print("Largest element:", largest)
  
      `}
                          </code>
                        </pre>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                        <pre>
                          <code>
                            {`
     function largestElement(arr) {
      if (!arr || arr.length === 0) {
          throw new Error("Array must not be empty");
      }
      
      let temp = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > temp) {
              temp = arr[i];
          }
      }
      return temp;
  }
  
  // Example usage:
  const arr = [1, 4, 7, 2, 9, 3];
  const largest = largestElement(arr);
  console.log("Largest element:", largest);
  
      `}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                data-mdb-collapse-init
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                 Second Largest Number
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
            <div className="accordion-body bg-black">
                <div className="row g-0">
                  <div className="col-lg-6 col-12 bg-black text-light">
                    <h2 className='text-warning'>Question</h2>
                    <h6 className='text-warning'>Problem Statement</h6>
                    <p> You are given an array a of size n, containing n unique non-negative integers.</p>
                    <p>Your task is to find the second largest and second smallest elements from the array and return them as another array of size 2.</p>
                    <h6>Input</h6>
                    <p>{`
                      
                      The first line of the input contains an integer n (2 ≤ n ≤ 10^5), representing the size of the array.
                      The second line contains n space-separated non-negative integers, representing the elements of the array a.
                  `} </p>

                    <h6 className='text-success'>Output</h6>
                    <p>
                    Output two integers separated by a space, representing the second largest and second smallest elements from the array.
                    </p>
                    <h6 className='text-warning'>Sample Input 1:</h6>
                    <p>5 <br />
                      1 2 3 4 5</p>
                    <h6 className='text-success'>Sample Output 1:</h6>
                    <p>4 2</p>
                    <h6>Explanation 1:</h6>
                    <p>
                    The second largest element after 5 is 4, and the second smallest element after 1 is 2.</p>
                    <h6 className='text-warning'>Sample Input 2:</h6>
                    <p> 4<br />
                    3 4 5 2</p>
                    <h6 className='text-success'>Sample Output 2:</h6>
                    <p>4 3</p>
                    <h6>Explanation 2:</h6>
                    <p>The second largest element after 5 is 4, and the second smallest element after 2 is 3.</p>
                    <h6>Constraints</h6>
                    <p>
                      {` 
                      2 ≤ n ≤ 10^5
                      0 ≤ a[i] ≤ 10^9
`}
                    </p>
                    <h6>Note</h6>
                    <p>
                    You need to implement a solution with a time complexity of O(n), where n is the size of the input array a.
                     </p>

                  </div>
                  <div className="col-lg-6 col-12 bg-black text-warning p-1"> Answer

                    <ul className="nav nav-tabs  bg-black text-warning" id="ex1" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link active text-warning bg-black"
                          id="ex1-tab-1"
                          href="#ex1-tabs-1"
                          role="tab"
                          aria-controls="ex1-tabs-1"
                          aria-selected="true"
                        >c++</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-2"
                          href="#ex1-tabs-2"
                          role="tab"
                          aria-controls="ex1-tabs-2"
                          aria-selected="false"
                        >Java</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-3"
                          href="#ex1-tabs-3"
                          role="tab"
                          aria-controls="ex1-tabs-3"
                          aria-selected="false"
                        >python</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          data-mdb-toggle='tab'
                          className="nav-link text-warning bg-black"
                          id="ex1-tab-4"
                          href="#ex1-tabs-4"
                          role="tab"
                          aria-controls="ex1-tabs-4"
                          aria-selected="false"
                        >JavaScript</a>
                      </li>
                    </ul>

                    <div className="tab-content" id="ex1-content">
                      <div
                        className="tab-pane fade show active"
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                      >
                        <pre>
                          <code>
                            {`
#include <algorithm>
#include <vector>

std::vector<int> getSecondOrderElements(int n, int a[]) {
    std::sort(a, a + n);
    int result = a[n - 2]; 
    int result2 = a[1];
    std::vector<int> finalresult = {result, result2};

    return finalresult;
}

`}
                          </code>
                        </pre>

                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                        <pre>
                          <code>
                            {`
import java.util.Arrays;

public class Solution {
    public static int[] getSecondOrderElements(int n, int []a) {
        // Write your code here.
    
     Arrays.sort(a);
        int result = a[n - 2]; 
        int result2 = a[1];
        int[] finalresult = {result, result2};

        return finalresult;
        
    }
}
`}
                          </code>
                        </pre>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                        <pre>
                          <code>
                            {`
     def getSecondOrderElements(n, a):
     a.sort()
     result = a[n - 2]
     result2 = a[1]
     final_result = [result, result2]
     return final_result
 
  
      `}
                          </code>
                        </pre>
                      </div>
                      <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                        <pre>
                          <code>
                            {`
    function getSecondOrderElements(n, a) {
      a.sort((x, y) => x - y);
      const result = a[n - 2];
      const result2 = a[1];
      const finalResult = [result, result2];
      return finalResult;
  }
  
  
      `}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                data-mdb-collapse-init
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                until the collapse plugin adds the appropriate classes that we use to style each
                element. These classes control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that just about any HTML
                can go within the <strong>.accordion-body</strong>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>

        </div>

      </div>




    </>
  )
}

export default PractiseBasicArray