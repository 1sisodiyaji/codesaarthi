import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import TextForm from "../../../component/Textarea";

const Array = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(1);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle topic selection
  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    setIsSidebarOpen(false);
  };
  const goToPreviousTopic = () => {
    if (selectedTopic > 1) {
      setSelectedTopic(selectedTopic - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Function to handle selecting the next topic
  const goToNextTopic = () => {
    if (selectedTopic < importantTopics.length) {
      setSelectedTopic(selectedTopic + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

    const importantTopics = [
        {
            "id": 1,
            "topic": "Introduction to Arrays",
            "description": `<h5>An array is a fundamental data structure in computer programming used to store a collection of elements of the same type. It provides a way to represent and manipulate data efficiently, enabling easy access and retrieval of individual elements.</h5> <br/>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png" class=\"imageHeight\" /> <br/><br/>
                        <p>Arrays are typically used to store homogeneous data, meaning all elements within the array are of the same data type, such as integers, characters, or objects. The elements in an array are accessed using an index, which represents the position of the element within the array.</p>
                        
                        <p>Arrays have a fixed size determined at the time of declaration, meaning the number of elements in the array remains constant throughout its lifetime. However, some programming languages support dynamic arrays, which can resize themselves dynamically as elements are added or removed.</p>
                        
                        <p>One-dimensional arrays, often simply referred to as arrays, are the most common type of arrays. They consist of a single row or a single column of elements. Multi-dimensional arrays, on the other hand, can store elements in multiple dimensions, such as rows and columns in a matrix.</p>
                        
                        <p>Arrays offer several advantages, including efficient storage and retrieval of data, constant-time access to individual elements, and support for various operations such as sorting, searching, and manipulation. However, they also have limitations, such as fixed size and the inability to easily insert or delete elements in the middle of the array.</p>
                        
                        <p>Understanding arrays and their properties is essential for mastering programming concepts and algorithms, as arrays are widely used in various applications and algorithms to represent and process data efficiently.</p>`
        },{
            "id": 2,
            "topic": "Array Traversal",
            "description": `<p>Array traversal refers to the process of accessing each element in an array and performing some operation on it. It involves iterating over the elements of the array, usually from the first element to the last, and executing a specific action for each element.</p> <br/>
                        <p>There are several methods to traverse an array, with the most common ones being using loops such as <code>for</code> loops, <code>while</code> loops, or using higher-order array methods like <code>forEach</code>, <code>map</code>, <code>filter</code>, etc.</p>
                        
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230302092847/C-array-traversal.png" class=\"imageHeight\" /> <br/><br/>
                       
                        <p>Here's an example of array traversal using a <code>for</code> loop:</p>
                        <pre><code>const numbers = [1, 2, 3, 4, 5];
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); // Print each element of the array
      }</code></pre>
                        
                        <p>This loop iterates over each element of the <code>numbers</code> array and prints its value to the console.</p>
                        
                        <p>Alternatively, you can use the <code>forEach</code> method for array traversal:</p>
                        <pre><code>const numbers = [1, 2, 3, 4, 5];
      numbers.forEach(function(number) {
        console.log(number); // Print each element of the array
      });</code></pre>
                        
                        <p>The <code>forEach</code> method executes a provided function once for each array element, iterating from the first element to the last. In this example, it prints each element of the <code>numbers</code> array to the console.</p>
                        
                        <p>Array traversal is commonly used in various programming tasks, such as searching for specific elements, performing calculations, or transforming array elements.</p>`
        },{
            "id": 3,
            "topic": "Array Reversal Methods in Various Programming Languages",
            "description": "<p>Array reversal, or reversing an array, involves changing the position of each element of the given array to its opposite position from the end. For example, if a number is at position 1, its new position will be Array.length. Similarly, if a number is at position 2, its new position will be Array.length – 1, and so on.</p> <h2>Array Reverse Using an Extra Array (Non In-place):</h2> <p>This method involves creating a new array of the same size as the original array and copying elements from the original array to the new array in reverse order. This approach does not modify the original array.</p> <h3>Implementation in Java:</h3> <pre><code>/*package whatever //do not write package name here */\n\nimport java.io.*;\npublic class ReverseArrayExtraArray {\n    public static void reverseArrayExtraArray(int[] arr)\n    {\n        int[] reversedArr = new int[arr.length];\n        for (int i = 0; i < arr.length; i++) {\n            reversedArr[i] = arr[arr.length - i - 1];\n        }\n\n        // Print reversed array\n        System.out.print(\"Reversed Array: \");\n        for (int i : reversedArr) {\n            System.out.print(i + \" \");\n        }\n    }\n\n    public static void main(String[] args)\n    {\n        int[] originalArr = { 1, 2, 3, 4, 5 };\n        reverseArrayExtraArray(originalArr);\n    }\n}\n</code></pre> <h2>Array Reverse Using a Loop (In-place):</h2> <p>This method involves iterating through the array using two pointers (start and end) and swapping elements at the start and end pointers. This process continues until the pointers meet or cross each other. This approach modifies the original array in-place.</p> <h3>Implementation in C++:</h3> <pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nvoid reverseArray(int arr[], int start, int end) {\n    int temp;\n    while (start &lt; end) {\n        temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    reverseArray(arr, 0, size - 1);\n    for (int i = 0; i &lt; size; i++) {\n        cout &lt;&lt; arr[i] &lt;&lt; \" \";\n    }\n    return 0;\n}\n</code></pre> <h2>Array Reverse Using Inbuilt Methods (Non In-place):</h2> <p>This method involves using inbuilt methods like reverse in Python or Array.Reverse in C#. It creates a new array with reversed elements without modifying the original array.</p> <h3>Implementation in Python:</h3> <pre><code>def reverseArray(arr):\n    return arr[::-1]\n\narr = [1, 2, 3, 4, 5]\nreversedArr = reverseArray(arr)\nprint(\"Reversed array:\", reversedArr)\n</code></pre> <h2>Array Reverse Using Recursion (In-place or Non In-place):</h2> <p>This method defines a recursive function that takes an array as input and swaps the first and last elements. It then recursively calls itself with the remaining subarray. Depending on the implementation, it may modify the original array in-place or return a new reversed array.</p> <h3>Implementation in Java:</h3> <pre><code>import java.io.*;\nclass ReverseArray {\n\n    static void reverseArray(int arr[], int start, int end)\n    {\n        int temp;\n        if (start &gt;= end)\n            return;\n        temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        reverseArray(arr, start + 1, end - 1);\n    }\n\n    static void printArray(int arr[], int size)\n    {\n        for (int i = 0; i &lt; size; i++)\n            System.out.print(arr[i] + \" \");\n        System.out.println(\"\");\n    }\n\n    public static void main(String[] args)\n    {\n        int arr[] = { 1, 2, 3, 4, 5, 6 };\n        printArray(arr, 6);\n        reverseArray(arr, 0, 5);\n        System.out.println(\"Reversed array is \");\n        printArray(arr, 6);\n    }\n}\n</code></pre> <h2>Array Reverse Using Stack (Non In-place):</h2> <p>This method involves pushing each element of the array onto a stack and then popping elements from the stack to form the reversed array. It creates a new array with reversed elements without modifying the original array.</p> <h3>Implementation in Java:</h3> <pre><code>import java.util.Stack;\n\npublic class ReverseArrayUsingStack {\n    public static void reverseArrayUsingStack(int[] arr)\n {\n        Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();\n\n        // Push elements onto the stack\n        for (int element : arr) {\n            stack.push(element);\n        }\n\n        // Pop elements from the stack to reverse the array\n        for (int i = 0; i &lt; arr.length; i++) {\n            arr[i] = stack.pop();\n        }\n    }\n\n    public static void main(String[] args)\n    {\n        int[] arr = { 1, 2, 3, 4, 5 };\n\n        reverseArrayUsingStack(arr);\n\n        System.out.print(\"Reversed Array: \");\n        for (int element : arr) {\n            System.out.print(element + \" \");\n        }\n    }\n}\n</code></pre> <p>These are various methods for reversing an array in different programming languages, each with its own advantages and use cases.</p>"
        },{
          "id": 4,
          "topic": "Palindrome Check with Arrays",
          "description": `<p>A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Palindrome checks are common programming exercises and can be implemented using arrays to manipulate and compare characters.</p> <br/>
                          <p>One approach to check if a string is a palindrome involves using arrays to store the characters of the string, reversing the array, and then comparing the reversed array with the original array to determine if they are the same.</p>
                          
                          <p>Here's an example of checking if a string is a palindrome using arrays:</p>
                          <pre><code>function isPalindrome(str) {
          const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
          const arr = cleanStr.split('');
          const reversedArr = arr.slice().reverse();
          return arr.join('') === reversedArr.join('');
        }
        
        const inputString = 'A man, a plan, a canal, Panama';
        console.log(isPalindrome(inputString)); // Output: true</code></pre>
                          
                          <p>This function <code>isPalindrome</code> takes a string as input, removes non-alphanumeric characters, converts it to lowercase, splits it into an array of characters, reverses the array, and then compares the reversed array with the original array. If they are the same, the function returns <code>true</code>, indicating that the string is a palindrome.</p>
                          
                          <p>Palindrome checks with arrays demonstrate how arrays can be used to manipulate and compare characters effectively, making them valuable tools in string manipulation tasks.</p>`
        },{
            "id": 5,
            "topic": "Sorting Arrays",
            "description": `<p>Sorting arrays is a fundamental operation in programming, essential for organizing data in a specified order. Sorting rearranges the elements of an array according to a specified criterion, such as ascending or descending order of numeric or string values.</p> <br/>
                            <p>JavaScript provides built-in methods for sorting arrays, including <code>sort()</code>, which sorts the elements of an array in place and returns the sorted array. By default, the <code>sort()</code> method sorts elements as strings based on Unicode code points.</p>
                            
                            <p>Here's an example of sorting an array of numbers in ascending order using the <code>sort()</code> method:</p>
                            <pre><code>const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
          numbers.sort((a, b) => a - b);
          console.log(numbers); // Output: [1, 1, 2, 3, 4, 5, 6, 9]</code></pre>
                            
                            <p>In this example, the <code>sort()</code> method is called on the <code>numbers</code> array with a comparator function <code>(a, b) => a - b</code>, which specifies the sorting criterion as ascending order of numeric values.</p>
                            
                            <p>You can also sort arrays of strings alphabetically using the <code>sort()</code> method:</p>
                            <pre><code>const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
          fruits.sort();
          console.log(fruits); // Output: ['apple', 'banana', 'grape', 'kiwi', 'orange']</code></pre>
                            
                            <p>The <code>sort()</code> method automatically sorts strings alphabetically by default.</p>
                            
                            <p>Sorting arrays is a versatile operation used in various programming tasks, such as organizing data for display, searching, or analysis.</p>`
        },{
            "id": 6,
            "topic": "Searching in Arrays",
            "description": `<p>Searching in arrays involves finding specific elements within an array based on certain criteria. This operation is fundamental in programming and is used extensively in various applications, such as searching for data, filtering results, or performing lookups.</p> <br/>
                            <p>JavaScript provides built-in methods for searching in arrays, including <code>indexOf()</code> and <code>find()</code>, which allow you to search for elements based on their values or properties.</p>
                            
                            <p>The <code>indexOf()</code> method returns the index of the first occurrence of a specified value in an array, or -1 if the value is not found:</p>
                            <pre><code>const numbers = [1, 2, 3, 4, 5];
          const index = numbers.indexOf(3);
          console.log(index); // Output: 2</code></pre>
                            
                            <p>In this example, the <code>indexOf()</code> method is used to find the index of the value <code>3</code> in the <code>numbers</code> array.</p>
                            
                            <p>The <code>find()</code> method returns the value of the first element in the array that satisfies the provided testing function, or <code>undefined</code> if no such element is found:</p>
                            <pre><code>const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
          const fruit = fruits.find(f => f === 'orange');
          console.log(fruit); // Output: 'orange'</code></pre>
                            
                            <p>In this example, the <code>find()</code> method is used to search for the value <code>'orange'</code> in the <code>fruits</code> array.</p>
                            
                            <p>Searching in arrays allows you to locate specific elements efficiently, enabling you to retrieve or manipulate data based on your application's requirements.</p>`
        },{
            "id": 7,
            "topic": "Multi-dimensional Arrays",
            "description": `<p>Multi-dimensional arrays, also known as nested arrays, are arrays that contain other arrays as elements. They allow you to represent data in multiple dimensions, such as rows and columns in a table, or layers in a grid.</p> <br/>
                            <p>In JavaScript, you can create multi-dimensional arrays by nesting arrays within arrays. Each inner array represents a row or a sub-array within the main array, forming a hierarchical structure.</p>
                            
                            <p>Here's an example of a two-dimensional array representing a matrix:</p>
                            <pre><code>const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ];
          console.log(matrix[0][1]); // Output: 2</code></pre>
                            
                            <p>In this example, <code>matrix</code> is a two-dimensional array with three rows and three columns. You can access individual elements of the matrix using array indexing, specifying both the row and column indices.</p>
                            
                            <p>Multi-dimensional arrays are versatile and can be used to represent complex data structures, such as grids, tables, or multi-dimensional datasets. They are commonly used in applications involving graphics, gaming, scientific computing, and more.</p>`
        },{
            "id": 8,
            "topic": "Dynamic Arrays and Lists",
            "description": "<p>Dynamic arrays and lists are fundamental data structures in computer science and programming. They provide flexibility in storing and managing collections of elements, allowing for dynamic resizing and efficient access.</p> <br/> <h2>Dynamic Arrays</h2> <p>A dynamic array, also known as a resizable array or a growable array, is a data structure that dynamically adjusts its size to accommodate a varying number of elements. Unlike static arrays, which have a fixed size determined at compile time, dynamic arrays can grow or shrink in size as elements are added or removed.</p> <h3>Implementation:</h3> <p>Dynamic arrays are commonly implemented in programming languages like Python, Java, and C++ using a combination of static arrays and dynamic memory allocation. The underlying array has an initial capacity, and when that capacity is reached, a new larger array is allocated, and the elements from the old array are copied over. This process allows the dynamic array to resize itself efficiently.</p> <h3>Example (Python):</h3> <pre><code>array = []  # Empty dynamic array array.append(1) array.append(2) array.append(3) print(array)  # Output: [1, 2, 3]</code></pre> <p>In this example, the dynamic array starts empty and grows as elements are added using the <code>append()</code> method. Behind the scenes, the array automatically resizes itself to accommodate new elements.</p> <h2>Lists</h2> <p>Lists are abstract data types that provide operations for adding, removing, and accessing elements in a dynamic manner. While dynamic arrays are a common implementation of lists, the term \"list\" is often used more broadly to refer to any dynamic collection of elements.</p> <h3>Operations:</h3> <p>Lists typically support operations such as:</p> <ul><li><strong>Append:</strong> Add an element to the end of the list.</li><li><strong>Insert:</strong> Insert an element at a specific position in the list.</li><li><strong>Remove:</strong> Remove an element from the list.</li><li><strong>Access:</strong> Retrieve an element from the list by index.</li><li><strong>Size:</strong> Get the number of elements in the list.</li></ul> <h3>Example (Java):</h3> <pre><code>import java.util.ArrayList; public class Main {     public static void main(String[] args) {         ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;(); // Empty list         list.add(1);         list.add(2);         list.add(3);         System.out.println(list); // Output: [1, 2, 3]     } }</code></pre> <p>In this Java example, an <code>ArrayList</code> is used to represent a dynamic list of integers. Elements are added using the <code>add()</code> method, and the list automatically grows as needed.</p> <h2>Applications</h2> <p>Dynamic arrays and lists are versatile data structures with numerous applications in software development:</p> <ul><li><strong>Data Storage:</strong> They are used to store collections of data elements efficiently, especially when the number of elements is not known in advance.</li><li><strong>Data Processing:</strong> Dynamic arrays and lists are essential for processing variable-length datasets, such as user inputs, sensor readings, or log files.</li><li><strong>Dynamic Data Structures:</strong> They serve as the foundation for implementing dynamic data structures like stacks, queues, linked lists, and trees.</li><li><strong>Algorithm Design:</strong> Many algorithms and problem-solving techniques rely on dynamic arrays and lists for efficient storage and manipulation of data.</li></ul> <h2>Advantages</h2> <p>Dynamic arrays and lists offer several advantages over static arrays:</p> <ul><li><strong>Flexibility:</strong> They can grow or shrink in size dynamically, allowing for efficient management of varying numbers of elements.</li><li><strong>Ease of Use:</strong> Operations for adding, removing, and accessing elements are straightforward and built-in, simplifying programming tasks.</li><li><strong>Efficiency:</strong> Dynamic resizing strategies ensure that memory is used efficiently, minimizing wasted space and improving performance.</li></ul> <h2>Conclusion</h2> <p>Dynamic arrays and lists are essential tools in the programmer's toolbox, providing flexible and efficient storage solutions for managing collections of elements. Whether you're building simple scripts or complex applications, understanding how to use dynamic arrays and lists effectively can greatly enhance your programming skills and the performance of your software.</p>"
        },{
            "id": 9,
            "topic": "Common Mistakes and Best Practices",
            "description": "<p>When programming, it's easy to fall into common traps or make mistakes that can lead to bugs, inefficiencies, or hard-to-maintain code. However, by following best practices and being aware of common pitfalls, developers can write cleaner, more robust code.</p> <br/> <h2>Common Mistakes</h2> <p>Some common mistakes in programming include:</p> <ul><li><strong>Not Handling Errors Properly:</strong> Failing to anticipate and handle errors can lead to unexpected behavior or crashes in the application.</li><li><strong>Overcomplicating Solutions:</strong> Trying to solve a problem with overly complex code can make it harder to understand, debug, and maintain.</li><li><strong>Ignoring Performance Considerations:</strong> Neglecting to optimize code for performance can result in slow or inefficient execution.</li><li><strong>Hardcoding Values:</strong> Hardcoding values directly into the code can make it less flexible and harder to modify in the future.</li><li><strong>Not Testing Thoroughly:</strong> Insufficient testing can lead to undetected bugs or regressions in the code.</li></ul> <h2>Best Practices</h2> <p>To avoid common mistakes and write better code, developers should follow best practices such as:</p> <ul><li><strong>Use Meaningful Variable Names:</strong> Choose descriptive names that convey the purpose and meaning of variables, functions, and classes.</li><li><strong>Follow Coding Standards:</strong> Adhere to consistent coding styles, formatting conventions, and naming conventions to improve readability and maintainability.</li><li><strong>Modularize Code:</strong> Break down complex tasks into smaller, reusable modules or functions to promote code reuse and maintainability.</li><li><strong>Document Code:</strong> Provide clear and concise comments and documentation to explain the purpose, behavior, and usage of code components.</li><li><strong>Test Code Rigorously:</strong> Write comprehensive unit tests, integration tests, and acceptance tests to verify the correctness and robustness of the code.</li></ul> <p>By avoiding common mistakes and following best practices, developers can write cleaner, more maintainable code that is less prone to errors and easier to work with.</p>"
        },{
            "id": 10,
            "topic": "Challenges and Exercises",
            "description": "<p>Challenges and exercises are valuable tools for improving programming skills, reinforcing concepts, and gaining hands-on experience. They provide opportunities for developers to apply what they've learned in practical scenarios and to tackle real-world problems.</p> <br/> <h2>Benefits of Challenges and Exercises</h2> <p>Participating in challenges and exercises offers several benefits:</p> <ul><li><strong>Skill Development:</strong> Challenges help sharpen problem-solving skills, algorithmic thinking, and programming proficiency.</li><li><strong>Concept Reinforcement:</strong> Exercises reinforce understanding of programming concepts, data structures, and algorithms through practical application.</li><li><strong>Portfolio Enhancement:</strong> Completing challenges and exercises builds a portfolio of projects that demonstrate your skills and accomplishments to potential employers or collaborators.</li><li><strong>Community Engagement:</strong> Many challenges and exercises are hosted on online platforms or forums where developers can interact with peers, seek help, and share solutions.</li></ul> <h2>Types of Challenges and Exercises</h2> <p>There are various types of challenges and exercises tailored to different skill levels, interests, and objectives:</p> <ul><li><strong>Algorithmic Challenges:</strong> These challenges involve solving algorithmic problems, often with constraints or optimization goals.</li><li><strong>Programming Puzzles:</strong> Puzzles require creative problem-solving and thinking outside the box to find solutions.</li><li><strong>Project-Based Exercises:</strong> Exercises involve building projects or applications to solve specific problems or fulfill certain requirements.</li><li><strong>Code Golf:</strong> Code golf challenges focus on writing code with the fewest characters or shortest execution time.</li></ul> <h2>Getting Started</h2> <p>To get started with challenges and exercises:</p> <ol><li><strong>Choose a Platform:</strong> Explore online platforms like LeetCode, HackerRank, CodeSignal, or Project Euler that offer a wide range of challenges and exercises.</li><li><strong>Start Small:</strong> Begin with simpler challenges and gradually increase the difficulty as you gain confidence and experience.</li><li><strong>Stay Consistent:</strong> Set aside regular time for practicing challenges and exercises to maintain momentum and progress.</li><li><strong>Review and Reflect:</strong> After completing challenges, review your solutions, analyze any mistakes or inefficiencies, and reflect on lessons learned.</li></ol> <p>By actively participating in challenges and exercises, developers can continuously improve their skills, expand their knowledge, and stay engaged in the programming community.</p>"
        },{
            "id": 11,
            "topic": "Exercise",
            "description": "<p>Check out the</p>"
        }
    ];

    const handleOpenNotepad = async (req,res) => {
<TextForm/>
    }

    useEffect(() => {
        if (selectedTopic) {
          const topicName = importantTopics.find(topic => topic.id === selectedTopic)?.topic;
          if (topicName) {
            document.title = `${topicName} | Codesaarthi`;
            document.querySelector('meta[property="og:title"]').setAttribute("content", `${topicName} | Codesaarthi`);
          } else {
            document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
            document.title = "Codesaarthi";
          }
        } else {
          document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
          document.title = "Codesaarthi";
        }
      }, [selectedTopic]);
    
    
      return (
        <>
          <Helmet>
            <meta name="keywords" content="Array short revision , learn array in short time , start learning array , Basic array concept , array concepts " />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://codesaarthi.com/theory/array" />
            <meta name="description" content="Learn Array in short time , covering all important topics , practise important questions and interview round question in a single platform ." />
            <title></title>
            <meta property="og:title" content="" />
            <meta property="og:description" content="Learn Array in short time , covering all important topics , practise important questions and interview round question in a single platform . " />
            <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
            <meta property="og:url" content="https://codesaarthi.com/theory/array" />
            <meta property="og:type" content="Education-Website" />
            <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
          </Helmet>
          <div className="container-fluid design g-0" style={{ backgroundColor: '#1E1E1E' }}>
            <div className="container-fluid p-5">
              <div className=" d-lg-none d-block d-flex justify-content-end pt-2">
                <button
                  onClick={toggleSidebar}
                  className=" navbar-toggler  shadow-0 d-lg-none  d-block"
                  style={{ color: "#FFE164", fontSize: "1.8rem" }}
                >
                  <i className="fi fi-br-align-justify pt-2"></i>
                </button>
              </div>
              <div className="row g-0 p-lg-2 p-0 border border-dark">
    
                <div className="col-lg-3 col-0 p-lg-2 p-0 d-lg-block d-none border border-dark" style={{ backgroundColor: '#262626' }} >
                  <div className="d-flex justify-content-center py-2">
                  <img src=" https://codesaarthi.com/img/Array.jpg" className="img-fluid" style={{height:'200px'}} alt="Arrays logo" />
                  </div>
                  <h2 className="text-center pb-3 text-primary">ARRAY</h2>
                  {importantTopics.map(topic => (
                    <div
                      key={topic.id}
                      onClick={() => handleTopicClick(topic.id)}
                      style={{
                        cursor: 'pointer',
                        textDecoration: selectedTopic === topic.id ? 'underline' : 'none',
                        color : selectedTopic === topic.id ? '#FFE164' :'none'
                      }}
                    >
                      <p
                        className="text-capitalize topic-item"
                        style={{
                          color : selectedTopic === topic.id ? '#6D39F7' :'#FFE164'
                        }}
                      >
                        <i className="fi fi-ss-book-alt pe-1" ></i> {topic.topic}
                      </p>
                      <hr />
                    </div>
                  ))}
    
                </div>
                {isSidebarOpen ?
                  <>
                    <div className="d-lg-none d-block">
    
    
                      <div className="container-fluid  g-0 d-lg-none d-block">
                        <div
                          style={{ zIndex: "99" }}
                          className={`sidebar3 ${isSidebarOpen ? "show" : ""
                            } d-lg-none d-md-none d-sm-block`}
                        >
                          {importantTopics.map(topic => (
                    <div
                      key={topic.id}
                      onClick={() => handleTopicClick(topic.id)}
                      style={{
                        cursor: 'pointer',
                        textDecoration: selectedTopic === topic.id ? 'underline' : 'none',
                        color : selectedTopic === topic.id ? '#FFE164' :'none'
                      }}
                    >
                      <p
                        className="text-capitalize topic-item"
                        style={{
                          color : selectedTopic === topic.id ? '#6D39F7' :'#FFE164'
                        }}
                      >
                        <i className="fi fi-ss-book-alt pe-1" ></i> {topic.topic}
                      </p>
                      <hr />
                    </div>
                  ))}
                        </div>
                      </div>
                    </div>
                  </> : " "}
                <div className="col-lg-9 col-12">
                  
                  <div className="text-end">
                    <div className="btn rouned-8 bg-warning text-light text-capitalize" onClick={{handleOpenNotepad}}><i className="fi fi-rr-square-plus mx-1 fa-2x"></i> Save your notes</div>
                  </div>
                  
                  {/* Rendering corresponding descriptions */}
                  {selectedTopic !== null && (
                    <div className='p-2'>
                      <h3 className='text-capitalize text-warning'>{importantTopics[selectedTopic - 1].topic}</h3>
                      <div className='text-light p-2' dangerouslySetInnerHTML={{ __html: importantTopics[selectedTopic - 1].description }}></div>
                      <div className="row g-0">
                        <div className="col-6 text-start">
                          <div className="btn border text-capitalize text-warning" onClick={goToPreviousTopic}><i className="fi fi-rr-angle-small-left"></i>previous</div>
                        </div>
                        <div className="col-6 text-end">
                          <div className="btn  border text-capitalize text-warning" onClick={goToNextTopic}>Next <i className="fi fi-rr-angle-small-right"></i></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
export default Array;
