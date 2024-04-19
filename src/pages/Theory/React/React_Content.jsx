import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
const React_Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // State to keep track of the selected topic
  const [selectedTopic, setSelectedTopic] = useState(1);

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
    { id: 1, topic: 'Introduction to React', description: 'React is a powerful JavaScript library for building user interfaces. Developed by <strong> Facebook </strong>, React has gained widespread popularity among developers due to its simplicity, flexibility, and performance. With React, developers can create dynamic and interactive web applications with ease. <br/> <br/> <img class ="imageHeight" src = "img/reactLogo2.png" class ="imageHeight" /> <br/> <br/>  At its core, React is based on the concept of components. <strong>Components are reusable building blocks that encapsulate a piece of user interface along with its behavior and state.</strong> This component-based architecture promotes code reusability, modularity, and maintainability, making it easier to manage complex applications.<br/> <br/> One of the key features of React is its use of a virtual DOM (Document Object Model). Instead of directly manipulating the DOM, React maintains a lightweight virtual representation of the DOM in memory. When changes occur, React compares the virtual DOM with the actual DOM and only updates the parts that have changed. This approach significantly improves performance by minimizing DOM manipulation and reducing unnecessary re-renders.<br/> <br/> Another important concept in React is JSX (JavaScript XML). JSX is a syntax extension that allows developers to write HTML-like code directly within JavaScript. This enables a more declarative and intuitive way of defining UI components, making the code easier to read and write. Under the hood, JSX is transpiled to regular JavaScript function calls, which are then executed by the React runtime.<br/>React also emphasizes unidirectional data flow and immutable data patterns. In React applications, data flows in a single direction, from parent components to child components. This helps maintain a clear and predictable data flow, making it easier to debug and reason about the application behavior. Additionally, React encourages the use of immutable data structures, which prevents unexpected side effects and simplifies state management.<br/> <br/>One of the reasons for React popularity is its vibrant ecosystem and strong community support. React is backed by a rich ecosystem of tools, libraries, and extensions that enhance developer productivity and extend the capabilities of React applications. Popular libraries like React Router for routing, Redux for state management, and Material-UI for UI components are widely used in conjunction with React. <br/><br/>Moreover, Reactcomponent-based architecture makes it highly suitable for building large-scale applications with complex user interfaces. By breaking down the UI into smaller, reusable components, developers can efficiently manage application complexity and scale their codebase as the project grows.<br/><br/>In conclusion, the introduction to React provides a solid foundation for understanding the core concepts and principles of React development. With its component-based architecture, virtual DOM, JSX syntax, and unidirectional data flow, React offers a modern and efficient approach to building dynamic web applications. Whether you are a beginner or an experienced developer, mastering React opens up a world of possibilities for building fast, responsive, and maintainable web applications.' },

    {
      id: 2, topic: 'Setting Up Your Development Environment', description: ` <div className = "my-2">Certainly! Here's a sample content for "Setting Up Your Development Environment":</div>
    <br/>
    Setting up your development environment is the first step towards embarking on your journey as a React developer. A well-configured environment ensures smooth development, efficient debugging, and seamless deployment of your applications.
    <br/>  <br/>
    <strong> 1. Choose Your Text Editor or IDE </strong>
    <br/>
    Before diving into React development, it's essential to select a text editor or integrated development environment (IDE) that suits your preferences and workflow. Popular choices among React developers include<strong> Visual Studio Code, Sublime Text, Atom, and WebStorm.</strong> These editors offer robust features such as syntax highlighting, code completion, and integrated terminal for enhanced productivity.
    <br/>
     <img class ="imageHeight" src = "img/vs-code.png" class ="imageHeight" /> <br/> <br/>
    <strong>  2. Install Node.js and npm </strong>
    <br/>
    Node.js and npm (Node Package Manager) are indispensable tools for building React applications. Node.js provides a runtime environment for executing JavaScript code outside the browser, while npm serves as a package manager for installing and managing project dependencies. Visit the official Node.js website <Link to = "https://nodejs.org" > (https://nodejs.org)</Link> to download and install the latest version of Node.js, which includes npm by default.
    <br/><br/>
    <strong>  3. Create a New React Project </strong>
    <br/>
    Once Node.js and npm are installed, you can create a new React project using Create React App, a popular toolchain for bootstrapping React applications with minimal configuration. Open your terminal and run the following command to install Create React App globally:
    <br/>  <br/>
<strong> 
    npm install -g create-react-app
   </strong>
   <br/>  <br/>
    After installing Create React App, navigate to your desired directory and run the following command to create a new React project named <strong> my-react-app</strong>
    
    <br/>  <br/>
    <strong>  npx create-react-app my-react-app </strong>

    <br/>  <br/>
     <img class ="imageHeight" src = "https://media.geeksforgeeks.org/wp-content/uploads/20211015201442/immgg.jpg" class ="imageHeight" /> <br/>  <br/>
    <strong>  4. Set Up Version Control with Git </strong>
    <br/>
    Version control is crucial for managing code changes, collaborating with team members, and tracking project history. Git, a distributed version control system, is widely used in the software development industry. Install Git from the official website (https://git-scm.com) and initialize a new Git repository within your React project directory:
    <br/>  <br/>
    <strong>
    cd my-react-app
    git init
    </strong>
    <br/>  <br/>
    <strong> 5. Explore React Developer Tools </strong>
    <br/>
    As a React developer, you'll benefit from using browser extensions such as <strong> React Developer Tools </strong>, which provide insights into the React component hierarchy, state, and props of your application. Install React Developer Tools for your preferred browser (available for Chrome, Firefox, and Edge) and leverage its features to debug and optimize your React applications.
    <br/>  <br/>
   <strong> Conclusion </strong>
    <br/>
    By following these steps, you can set up a robust development environment for React and kickstart your journey as a React developer. Remember to stay updated with the latest tools and best practices in the React ecosystem to streamline your development workflow and build high-quality applications.
    <br/>` },
    { id: 3, topic: 'Understanding JSX', description: '<strong> Understanding JSX in React Development </strong> </br> </br>JSX, or JavaScript XML, is a syntax extension for JavaScript often used with React. It allows developers to write HTML-like code directly within JavaScript, making it easier to define and render user interfaces in React applications.</br></br><strong> What is JSX? </strong></br> JSX resembles HTML but is essentially syntactic sugar for JavaScript. It allows you to write XML-like syntax directly within your JavaScript code. For example:</br><strong>const element = Hello, world!;</strong></br>This JSX expression is equivalent to:<strong></br> const element = React.createElement(`h1`, null, `Hello, world!`);</strong> </br></br> <div className = "container p-3">  <img class ="imageHeight" src = "img/jsx.jpeg" class ="imageHeight" /></div> <br/><br/> <strong> Benefits of Using JSX </strong></br></br>1. <strong>Readability </strong>: JSX makes code more readable and intuitive, especially for developers familiar with HTML. It resembles the structure of the UI, making it easier to visualize the component hierarchy.</br></br>2. <strong>Expressiveness</strong>: JSX allows you to express complex UI components more concisely compared to traditional JavaScript syntax. It enables you to embed JavaScript expressions within curly braces {} directly in the markup.</br></br>3. <strong>Integration with JavaScript </strong>: JSX seamlessly integrates with JavaScript, allowing you to use JavaScript expressions, functions, and variables within JSX elements. This flexibility enables dynamic content generation and conditional rendering.</br></br><strong> JSX Transformations </strong></br>Under the hood, JSX is transformed into regular JavaScript function calls by tools like Babel during the build process. For instance, the JSX element <strong>Hello, world! </strong> gets transformed into:</br> <strong>React.createElement(`h1`, null, `Hello, world!`);</strong> </br> This transformation ensures compatibility with all modern browsers and ensures that JSX syntax can be understood by the JavaScript engine.</br></br><strong> Conclusion </strong></br>Understanding JSX is essential for developing React applications efficiently. By leveraging JSXs expressiveness and readability, developers can build complex user interfaces with ease. Embrace JSX in your React projects to streamline development and enhance code maintainability.' },
    {
      id: 4, topic: 'Components and Props', description: `
    <strong>Components and Props</strong> <br/>
    In React, components are the building blocks of a user interface. They encapsulate the UI's logic and state, allowing developers to create reusable and modular code. Components can be divided into two types: functional components and class components. <br/><br/>
    <strong>What are Components?</strong> <br/>
    Components in React are independent, reusable units of code that render a part of the UI. They can be nested within other components to create complex UI structures. Components can accept input data, known as props, and return React elements representing the UI. <br/><br/>
     <img class ="imageHeight"  src="https://www.scaler.com/topics/images/react-functional-vs-class-components_thumbnail.webp"   alt="React Components" />

    <br/><br/>
    <h4>Types of Components </h4>
    <strong>Functional Components:</strong> <br/>
    Functional components are JavaScript functions that return JSX elements. They are simpler and more lightweight than class components, making them ideal for rendering UI based solely on props. Functional components are typically stateless and can be written as arrow functions or regular functions. <br/><br/>
    
    <strong>Class Components:</strong> <br/>
    Class components are JavaScript classes that extend the React.Component class. They have additional features such as lifecycle methods and local state management. Class components are used when you need to manage state or use lifecycle methods in your component.In Latest these is not used as more over functional based componenet are used. <br/><br/>
    <strong>Props:</strong> <br/>
    Props, short for properties, are a way of passing data from parent to child components in React. They are read-only and cannot be modified by the child components. Props allow components to be customizable and reusable by accepting different sets of data.They are in read only mode data. <br/><br/>
    <strong>Using Props:</strong> <br/>
    To pass props to a component, you simply add attributes to the component tag when it's being used. Inside the component, you can access props using the props object. Props are passed as key-value pairs, where the key is the name of the prop and the value is the data being passed. <br/><br/>
    <strong>Conclusion:</strong> <br/>
    Understanding components and props is fundamental to React development. Components provide a modular structure for building UI , while props enable data flow between components. By mastering components and props, developers can create scalable and maintainable React applications. <br/>
  ` },
    {
      id: 5, topic: 'State and Lifecycle', description: `
    <strong>State and Lifecycle in React</strong> <br/>
    State and lifecycle management are fundamental concepts in React that allow components to manage their data and respond to changes over time. Understanding how to effectively manage state and lifecycle methods is crucial for building dynamic and interactive user interfaces. <br/><br/>
    <strong>What is State?</strong> <br/>
    State represents the data that a component can maintain and modify over time. It is an object that contains dynamic information and determines the component's behavior and appearance. State is managed internally within a component and can be updated using the setState() method provided by React. <br/><br/>
    <div className = "container"> <img class ="imageHeight"  src = "https://media.geeksforgeeks.org/wp-content/uploads/20230804133715/gfg.png"   alt ="geeks for geeks image" /></div>
    <strong>Class Components and State:</strong> <br/>
    Class components in React can have state, which allows them to manage data and trigger UI updates when the state changes. Stateful components extend the React.Component class and initialize their state in the constructor method. Once initialized, state can be accessed and updated using this.state and this.setState() respectively. <br/><br/>
    <strong>Functional Components and Hooks:</strong> <br/>
    Functional components in React traditionally did not have state. However, with the introduction of Hooks in React 16.8, functional components can now use state and other React features previously available only to class components. The useState() Hook enables functional components to manage state in a concise and declarative manner.<br/> <br/>
    <strong>Lifecycle Methods:</strong> <br/>
    Lifecycle methods are special methods provided by React that allow components to execute code at specific points in their lifecycle. These methods include componentDidMount(), componentDidUpdate(), componentWillUnmount(), and more. Lifecycle methods are useful for performing actions such as fetching data, subscribing to events, and cleaning up resources. <br/><br/>
    <strong>Mounting Phase:</strong> <br/>
    During the mounting phase, React creates an instance of the component and inserts it into the DOM. The componentDidMount() method is called once after the component is mounted, making it an ideal place for initializing state, fetching data from external sources, or setting up event listeners. <br/><br/>
    <strong>Updating Phase:</strong> <br/>
    In the updating phase, React updates the component in response to changes in props or state. The componentDidUpdate() method is called after the component's updates are applied to the DOM, allowing developers to perform side effects or additional updates based on the new state or props. <br/><br/>
    <strong>Unmounting Phase:</strong> <br/>
    During the unmounting phase, React removes the component from the DOM. The componentWillUnmount() method is called just before the component is unmounted, providing an opportunity to clean up any resources or subscriptions created during the component's lifecycle. <br/><br/>
    <strong>Conclusion:</strong> <br/>
    State and lifecycle management are essential aspects of React development that enable developers to build dynamic and responsive user interfaces. By understanding how to manage state and utilize lifecycle methods effectively, developers can create robust and maintainable React applications that meet the needs of their users. <br/>
  ` },
    {
      id: 6, topic: 'Handling Events', description: `
    <strong>Handling Events in React</strong> <br/>
    Handling events is a crucial aspect of building interactive user interfaces in React. In traditional web development, event handling involves attaching event listeners directly to DOM elements. However, in React, event handling is slightly different due to its declarative and component-based nature. <br/><br/>
    <strong>Event Handling in JSX:</strong> <br/>
    In React, event handlers are defined as camelCase attributes in JSX and assigned callback functions that handle the events. For example, to handle a button click event, you would define an onClick attribute and assign it a function that gets executed when the button is clicked. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code2.jpg"   />
    <br/><br/>
    <strong>Passing Parameters to Event Handlers:</strong> <br/>
    Sometimes, you may need to pass additional parameters to your event handlers. In such cases, you can use arrow functions or bind the parameters to the callback function. Arrow functions are commonly used for this purpose because they automatically capture the surrounding context. <br/>
    <strong>Example:</strong> <br/><br/>
    <img class ="imageHeight"  src = "img/code1.jpg"   />
    <br/><br/>
    <strong>Preventing Default Behavior:</strong> <br/>
    In some cases, you may want to prevent the default behavior of certain events, such as form submissions or link clicks. In React, you can call the preventDefault() method on the event object passed to the event handler to prevent the default action from occurring. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src = "img/code3.jpg"   />
     <br/><br/>
    <strong>Conclusion:</strong> <br/>
    Handling events in React follows a declarative approach where event handlers are defined as attributes in JSX. By understanding how to handle events and pass parameters to event handlers, developers can create interactive and responsive user interfaces in React applications.
  ` },
    {
      id: 7, topic: 'Conditional Rendering', description: `
    <strong>Conditional Rendering in React</strong> <br/>
    Conditional rendering is the process of displaying different UI components or content based on certain conditions in React applications. It allows developers to create dynamic and responsive user interfaces that adapt to changing data or user interactions. <br/><br/>
    <strong>Using Conditional Statements:</strong> <br/>
    In React, conditional rendering can be achieved using standard JavaScript conditional statements such as if statements or ternary operators within JSX. These conditional statements evaluate a condition and render different components or content based on the result. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code4.jpg"   />
    <br/>
    <br/>
    <strong>Using Logical && Operator:</strong> <br/>
    Another approach to conditional rendering in React is using the logical && operator, also known as the short-circuit operator. This operator evaluates the expression on its left-hand side and, if true, returns the expression on its right-hand side. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code5.jpg"   />
    <br/> <br/>
    <strong>Using Conditional (ternary) Operator:</strong> <br/>
    The conditional (ternary) operator is another concise way to perform conditional rendering in React. It allows you to conditionally render components or content based on a condition in a single line of code. <br/>
    <strong>Example:</strong> <br/>
    <br/><br/>
     <img class ="imageHeight"  src="img/code6.jpg"   />
    <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    Conditional rendering is a powerful feature in React that allows developers to create dynamic and adaptive user interfaces. By leveraging conditional statements, logical operators, and ternary operators, developers can build applications that respond to changing data and user interactions effectively.
  ` },
    {
      id: 8, topic: 'Lists and Keys', description: `
    <strong>Lists and Keys in React</strong> <br/>
    Lists are a common feature in web applications, and React provides a convenient way to render dynamic lists of data efficiently. In addition to rendering lists, React requires each list item to have a unique "key" prop, which helps React identify which items have changed, added, or removed. <br/> <br/>
    <strong>Rendering Lists:</strong> <br/>
    In React, you can render lists by mapping over an array of data and returning JSX elements for each item in the array. This approach allows you to dynamically generate UI components based on the data, making your applications more flexible and scalable. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code7.jpg"   />
    <br/><br/>
    <strong>Keys:</strong> <br/>
    Keys are special attributes that help React identify which items have changed, added, or removed in a list. Keys should be unique among siblings but do not need to be globally unique. They are used by React to optimize the rendering process and improve performance. <br/><br/>
    <strong>Choosing Keys:</strong> <br/>
    When choosing keys for list items, it's important to use stable identifiers that do not change over time. Avoid using indexes as keys, as they can lead to unexpected behavior when the order of items changes. Instead, use unique identifiers associated with each item, such as IDs from a database. <br/>
    <strong>Example:</strong>  <br/><br/>
     <img class ="imageHeight"  src="img/code8.jpg"   />
    <br/>
    <br/>
    <strong>Conclusion:</strong> <br/>
    Lists and keys are essential concepts in React that enable developers to render dynamic lists of data efficiently. By understanding how to render lists and choose appropriate keys, developers can build scalable and maintainable React applications that provide a seamless user experience.
  ` },
    {
      id: 9, topic: 'Forms and Controlled Components', description: `
    <strong>Forms and Controlled Components in React</strong> <br/>
    Forms are a fundamental part of web applications, allowing users to input data and interact with the application. In React, forms can be created using standard HTML form elements, and their state can be managed using controlled components. Controlled components keep the form data in sync with the component's state, enabling developers to implement complex form behaviors with ease. <br/><br/>
    <strong>Controlled Components:</strong> <br/>
    In React, a controlled component is a form element whose value is controlled by React state. This means that the value of the input element is controlled by React, and any changes to the input value are reflected in the component's state. Controlled components provide a single source of truth for form data, making it easier to manage and validate user input. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code9.jpg"   />
    <br/><br/>
    <strong>Benefits of Controlled Components:</strong> <br/>
    <ul>
      <li><strong>Single Source of Truth:</strong> Controlled components maintain the form data in React state, providing a single source of truth for the input values.</li>
      <li><strong>Dynamic Updates:</strong> Any changes to the input values are immediately reflected in the component's state, enabling dynamic updates to the UI.</li>
      <li><strong>Validation:</strong> Since the form data is stored in React state, it can be easily validated and manipulated before submission.</li>
    </ul>
    <strong>Uncontrolled Components:</strong> <br/>
    In addition to controlled components, React also supports uncontrolled components where the form data is handled by the DOM itself. While uncontrolled components can be useful in certain scenarios, controlled components offer better control and predictability over form behavior, especially in larger applications. <br/><br/>
    <strong>Conclusion:</strong> <br/>
    Forms and controlled components play a crucial role in building interactive web applications with React. By using controlled components to manage form data, developers can create forms that are easy to maintain, validate, and interact with, providing a seamless user experience.
  ` },
    {
      id: 10, topic: 'React Hooks', description: `
    <strong>React Hooks</strong> <br/>
    React Hooks are a feature introduced in React 16.8 that allows developers to use state and other React features without writing class components. Hooks are functions that let you use React state and lifecycle methods inside functional components. They provide a more straightforward and cleaner way to manage component logic and state, leading to more concise and readable code.<br/> <br/>
    <strong>useState Hook:</strong> <br/>
    The useState Hook allows functional components to have state by enabling them to declare state variables. It returns a pair of values: the current state value and a function that updates the state value. useState Hook can be called multiple times in a single component to manage multiple state variables independently. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code10.jpg" class="img-fluid my-2" />
    <br/><br/>
    <strong>useEffect Hook:</strong> <br/>
    The useEffect Hook enables functional components to perform side effects such as data fetching, subscriptions, or DOM manipulations. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components combined. useEffect accepts a function that contains the code for the side effect and an optional array of dependencies to control when the effect is executed. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code11.jpg" class="img-fluid my-2" />
    <br/><br/>
    <strong>Other Hooks:</strong> <br/>
    React provides several built-in Hooks for common use cases, such as useContext for accessing context in functional components, useRef for accessing DOM elements and keeping mutable values between renders, and more. Additionally, developers can create custom Hooks to encapsulate reusable logic and share it across components. <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    React Hooks revolutionize the way developers write React components by providing a more functional and declarative approach to managing state and side effects. By using Hooks, developers can write cleaner, more modular, and more maintainable code, leading to a more efficient and enjoyable development experience.
  ` },
    {
      id: 11, topic: 'Context API', description: `
    <strong>Context API in React</strong> <br/>
    The Context API is a feature introduced in React 16.3 that provides a way to pass data through the component tree without having to pass props manually at every level. It allows you to share data between components without having to explicitly pass props down the component tree, making it easier to manage global state and avoid prop drilling. <br/>  <br/>
    <strong>Creating a Context:</strong> <br/>
    To create a new context, you use the createContext function provided by React. This function returns a Context object that consists of two components: Provider and Consumer. The Provider component allows you to pass a value to all descendants of the component tree, while the Consumer component allows you to access the value from any descendant component. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code12.jpg" class="img-fluid my-2" />
    <br/><br/>
    <strong>Using Context in Class Components:</strong> <br/>
    In class components, you can use the static contextType property or the Consumer component to access context values. The static contextType property allows you to access the context value directly as a property of the class instance, while the Consumer component provides a render prop function to access the context value. <br/>
    <strong>Example:</strong> <br/><br/>
     <img class ="imageHeight"  src="img/code13.jpg" class="img-fluid my-2" />
    <br/><br/>
    <strong>Benefits of Context API:</strong> <br/>
    - <strong>Simplifies Prop Drilling:</strong> Context API eliminates the need to pass props down the component tree manually, reducing boilerplate code and making the codebase cleaner and more maintainable. <br/>
    - <strong>Global State Management:</strong> Context API can be used to manage global state in React applications, allowing multiple components to access and update shared data without the need for external state management libraries like Redux. <br/>
    - <strong>Improved Component Composition:</strong> Context API promotes better component composition by decoupling components from their data dependencies, making them more reusable and easier to test. <br/><br/>
    <strong>Conclusion:</strong> <br/>
    The Context API is a powerful feature in React that simplifies state management and component communication in complex component trees. By using context, developers can avoid prop drilling, manage global state, and improve component composition, leading to cleaner, more maintainable, and more scalable React applications.
  ` },
    {
      id: 12, topic: 'React Router', description: `
    <strong>React Router</strong> <br/>
    React Router is a powerful routing library for React applications that allows you to define navigation and routing logic declaratively. It enables you to create single-page applications with multiple views and URLs, providing a seamless navigation experience similar to traditional multi-page websites. <br/><br/>
    <strong>Features of React Router:</strong> <br/>
    - <strong>Declarative Routing:</strong> React Router uses a declarative approach to define routes, making it easy to specify which components should render for different URLs. This allows you to define complex routing logic using simple JSX syntax. <br/>
    - <strong>Dynamic Routing:</strong> React Router supports dynamic routing, allowing you to pass parameters and query strings in the URL and access them in your components. This enables you to create dynamic and data-driven routes based on user input or application state. <br/>
    - <strong>Nested Routing:</strong> React Router supports nested routing, allowing you to nest routes within other routes to create hierarchical navigation structures. This enables you to organize your application's UI into nested components and define separate routes for each component. <br/><br/>
    <strong>Installation:</strong> <br/>
    To use React Router in your project, you can install it via npm or yarn using the following command: <br/>
    <code>
      npm install react-router-dom
      // or
      yarn add react-router-dom
    </code> <br/><br/>
    <strong>Basic Usage:</strong> <br/>
    React Router provides several components for defining routes and navigation in your application, such as BrowserRouter, Route, Link, and Switch. Here's a basic example of how to use React Router in a React application: <br/><br/><br/>
     <img class ="imageHeight"  src="img/code14.jpg" class="img-fluid my-2" />
    <br/><br/>
    <strong>Conclusion:</strong> <br/>
    React Router is an essential tool for building modern single-page applications with React. By providing a declarative and flexible way to define routes and navigation, React Router simplifies the development of complex routing logic and enables developers to create seamless navigation experiences for their users.
  ` },
    {
      id: 13, topic: 'Redux Fundamentals', description: `
    <strong>Redux Fundamentals</strong> <br/>
    Redux is a predictable state container for JavaScript applications, commonly used with React for managing application state in large-scale and complex applications. It provides a centralized store to manage the state of your entire application and enables you to write predictable and maintainable code by enforcing unidirectional data flow and immutable state. <br/> <br/>
     <img class ="imageHeight"  src ="img/reactRedux.png" className = "img-fluid" /> <br/>
    <strong>Core Concepts of Redux:</strong> <br/>
    - <strong>Store:</strong> The store is the central hub of Redux applications, containing the entire state tree of your application. It provides methods to dispatch actions, subscribe to changes, and access the current state. <br/>
    - <strong>Action:</strong> Actions are plain JavaScript objects that represent events or payloads of data that describe state changes in your application. They are dispatched to the Redux store using the store.dispatch() method. <br/>
    - <strong>Reducer:</strong> Reducers are pure functions responsible for specifying how the application's state changes in response to actions. They take the current state and an action as arguments and return the next state of the application. <br/>
    - <strong>Store Subscription:</strong> Redux allows you to subscribe to the store to receive updates whenever the state changes. This enables components to react to state changes and re-render as necessary. <br/> <br/>
    <strong>Benefits of Redux:</strong> <br/>
    - <strong>Centralized State Management:</strong> Redux provides a single source of truth for your application's state, making it easier to manage and debug complex state logic across multiple components. <br/>
    - <strong>Predictable State Updates:</strong> By enforcing strict rules for state mutation through reducers, Redux ensures that state changes are predictable and traceable, making it easier to understand and reason about application behavior. <br/>
    - <strong>Time-Travel Debugging:</strong> Redux enables time-travel debugging by keeping a history of state changes. This allows developers to rewind and replay actions to debug issues and understand how the application's state evolves over time. <br/> <br/>
    <strong>Integration with React:</strong> <br/>
    Redux is commonly used with React to manage application state in React applications. The react-redux library provides bindings to connect Redux with React components, enabling components to access state from the Redux store and dispatch actions to update the state. <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    Redux is a powerful state management tool for JavaScript applications, providing a centralized store, predictable state updates, and time-travel debugging capabilities. By adopting Redux, developers can write scalable and maintainable applications with predictable state behavior and improved debugging capabilities.
  ` },
    {
      id: 14, topic: 'Async Operations in React', description: `
    <strong>Async Operations in React</strong> <br/>
    Asynchronous operations, such as data fetching from APIs or handling user input events, are common tasks in modern web applications. React provides several approaches for handling asynchronous operations and managing asynchronous data in components, including using built-in JavaScript features, external libraries, or React-specific patterns. <br/> <br/>
     <img class ="imageHeight"  src = "img/async.jpg" className = "img-fluid" /> <br/> <br/>
    <strong>Common Patterns for Handling Async Operations:</strong> <br/>
    - <strong>Using Promises:</strong> JavaScript Promises are a built-in feature that provides a clean and concise way to handle asynchronous operations and represent eventual completion or failure of an asynchronous operation. You can use Promise-based APIs like fetch for data fetching and axios for making HTTP requests in React components. <br/>
    - <strong>Using async/await:</strong> async/await is a modern JavaScript feature that provides a more elegant syntax for writing asynchronous code compared to traditional callback or Promise-based approaches. You can use async/await syntax with functions marked as async to perform asynchronous operations and wait for their completion before proceeding. <br/>
    - <strong>Using External Libraries:</strong> React ecosystem offers several external libraries and utilities for managing asynchronous operations and side effects in components, such as Redux Thunk, Redux Saga, or React Query. These libraries provide advanced features for handling complex async logic, managing state, and coordinating side effects in React applications. <br/> <br/>
    <strong>Best Practices for Handling Async Operations:</strong> <br/>
    - <strong>Separation of Concerns:</strong> Keep your async logic separate from your UI components to improve code maintainability and reusability. Use services or utility functions to encapsulate async operations and expose simple interfaces for components to interact with. <br/>
    - <strong>Error Handling:</strong> Handle errors gracefully by implementing error handling mechanisms, such as try/catch blocks or Promise.catch(), to catch and handle errors that occur during async operations. Display meaningful error messages to users and provide fallback strategies when necessary. <br/>
    - <strong>Optimistic UI Updates:</strong> Implement optimistic UI updates to provide a more responsive user experience by updating the UI optimistically before the async operation completes. Use loading indicators or placeholders to indicate ongoing async operations and update the UI once the operation completes successfully. <br/>  <br/>
    <strong>Conclusion:</strong> <br/>
    Handling asynchronous operations in React is a critical aspect of building modern web applications. By leveraging built-in JavaScript features, external libraries, and React-specific patterns, developers can effectively manage async logic, improve application performance, and deliver a seamless user experience in their React applications.
  ` },
    {
      id: 15, topic: 'Testing React Applications', description: `
    <strong>Testing React Applications</strong> <br/>
    Testing is an essential part of the software development process that ensures the reliability, stability, and correctness of your code. React applications can be tested using various testing techniques and tools, including unit tests, integration tests, end-to-end tests, and component tests. <br/> <br/>
     <img class ="imageHeight"  src="img/reacttesting.png"
    className = "img-fluid" alt = "testing image" /> <br/> <br/>
    <strong>Common Testing Frameworks for React:</strong> <br/>
    - <strong>Jest:</strong> Jest is a popular JavaScript testing framework developed by Facebook. It comes bundled with create-react-app and provides built-in support for snapshot testing, mocking, and assertion utilities. Jest is widely used for writing unit tests and integration tests in React applications. <br/>
    - <strong>React Testing Library:</strong> React Testing Library is a lightweight testing library for React that encourages writing tests from the user's perspective. It provides utilities for querying and interacting with rendered components, making it easy to write accessible and maintainable tests for React components. <br/>
    - <strong>Enzyme:</strong> Enzyme is a testing utility for React developed by Airbnb. It provides a set of APIs for traversing, querying, and asserting on React components' output. Enzyme is commonly used for writing component tests and shallow rendering components in isolation. <br/> <br/>
    <strong>Types of Tests:</strong> <br/>
    - <strong>Unit Tests:</strong> Unit tests focus on testing individual units of code, such as functions or components, in isolation. They verify that each unit behaves as expected and meets the specified requirements. Unit tests help identify bugs early in the development process and ensure code reliability and maintainability. <br/>
    - <strong>Integration Tests:</strong> Integration tests verify the interactions between different units of code, such as components or modules, to ensure that they work together correctly. Integration tests help validate the integration points and dependencies between components and detect integration issues early in the development cycle. <br/>
    - <strong>End-to-End Tests:</strong> End-to-end tests simulate user interactions with the application from start to finish, including user input, navigation, and data fetching. They validate the application's behavior and functionality across multiple components and layers, ensuring that the application works as expected from the user's perspective. <br/> <br/>
    <strong>Best Practices for Testing React Applications:</strong> <br/>
    - <strong>Write Testable Code:</strong> Design your React components with testability in mind by keeping them small, modular, and focused on a single responsibility. Minimize side effects and external dependencies to make it easier to write unit tests and isolate components for testing. <br/>
    - <strong>Use Mocks and Stubs:</strong> Use mocking and stubbing techniques to isolate components and simulate external dependencies or side effects, such as API calls or asynchronous operations. Mocking allows you to replace real implementations with fake ones to control test behavior and improve test reliability. <br/>
    - <strong>Test Coverage:</strong> Aim for high test coverage by writing comprehensive tests that cover critical paths and edge cases in your application. Use code coverage tools to measure test coverage and identify areas of the codebase that need additional testing. <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    Testing React applications is crucial for ensuring code quality, reliability, and maintainability. By adopting testing best practices, leveraging testing frameworks and libraries, and following a disciplined testing approach, developers can build robust and resilient React applications that meet the highest quality standards and deliver an exceptional user experience.
  ` },
    {
      id: 16, topic: 'Best Practices and Performance Optimization', description: `
    <strong>Best Practices and Performance Optimization</strong> <br/>
    Building high-performance React applications requires adherence to best practices and optimization techniques to ensure fast rendering, smooth user experience, and efficient resource utilization. By following established guidelines and applying optimization strategies, developers can improve application performance, reduce load times, and enhance overall user satisfaction. <br/> <br/>
     <img class ="imageHeight"  src="img/reactbest.png"
    className = "img-fluid" alt = "testing image" /> <br/> <br/>
    <strong>Common Best Practices for React:</strong> <br/>
    - <strong>Component Optimization:</strong> Optimize React components for performance by minimizing re-renders, leveraging PureComponent or memoization techniques, and avoiding unnecessary renders using shouldComponentUpdate or React.memo. Use key props effectively to optimize component rendering and reconciliation. <br/>
    - <strong>Code Splitting:</strong> Implement code splitting to break down large bundles into smaller chunks and load them dynamically as needed. Use React.lazy and Suspense to lazily load components and optimize initial page load times by deferring the loading of non-critical code until it's required. <br/>
    - <strong>Bundle Optimization:</strong> Optimize bundle size by eliminating dead code, removing unused dependencies, and leveraging tree-shaking and code minification techniques. Use tools like Webpack Bundle Analyzer to analyze bundle composition and identify opportunities for optimization. <br/>
    <strong>Performance Optimization Techniques:</strong> <br/>
    - <strong>Lazy Loading:</strong> Lazy load resources, such as images, scripts, or data, to defer their loading until they're needed. Lazy loading reduces initial page load times, improves perceived performance, and conserves network bandwidth by loading resources on-demand. <br/>
    - <strong>CSS Optimization:</strong> Optimize CSS performance by minimizing CSS file size, reducing the number of style rules, and using efficient CSS selectors. Avoid inline styles and prefer external stylesheets for better caching and optimization. Use CSS-in-JS libraries with server-side rendering (SSR) support for improved performance. <br/>
    - <strong>Network Optimization:</strong> Optimize network performance by minimizing the number of HTTP requests, reducing payload size, and leveraging HTTP/2 or HTTP/3 for multiplexing and faster data transfer. Use content delivery networks (CDNs) to cache static assets and serve them from geographically distributed servers for improved latency and performance. <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    Implementing best practices and performance optimization techniques is essential for building high-performance React applications that deliver a seamless user experience across devices and network conditions. By following established guidelines, leveraging optimization strategies, and continuously monitoring and optimizing application performance, developers can ensure that their React applications are fast, responsive, and efficient.
  ` },
    {
      id: 17, topic: 'Deploying React Applications', description: `
    <strong>Deploying React Applications</strong> <br/>
    Deploying a React application involves making it available to users on the internet by hosting it on a web server or a cloud platform. There are several deployment options available for React applications, ranging from simple static hosting to more complex server setups with dynamic rendering and server-side rendering (SSR). <br/> <br/>
     <img class ="imageHeight"  src="img/reactDeploy.png"
    alt = "testing image" /> <br/> <br/>
    <strong>Common Deployment Options for React:</strong> <br/>
    - <strong>Static Hosting:</strong> Deploy your React application as a static site by serving static files, such as HTML, CSS, and JavaScript, from a web server or a cloud storage service. Static hosting options include platforms like Netlify, Vercel, GitHub Pages, and AWS S3, which provide simple and cost-effective hosting solutions for static sites. <br/>
    - <strong>Server-Side Rendering (SSR):</strong> Implement server-side rendering (SSR) to generate HTML on the server and send pre-rendered content to the client for improved performance and SEO. SSR enables faster initial page loads, better search engine indexing, and improved user experience, especially for content-heavy or dynamic applications. Use frameworks like Next.js or Gatsby.js for seamless SSR integration with React applications. <br/>
    - <strong>Containerized Deployment:</strong> Package your React application as a Docker container and deploy it to container orchestration platforms like Kubernetes or Docker Swarm for scalable and reliable deployment. Containerization enables consistent deployment across different environments, easy scalability, and efficient resource utilization, making it ideal for microservices architectures and cloud-native applications. <br/>
    <strong>Deployment Best Practices:</strong> <br/>
    - <strong>Automated Deployment:</strong> Implement continuous integration and continuous deployment (CI/CD) pipelines to automate the deployment process and ensure fast and reliable deployments. Use tools like GitHub Actions, GitLab CI/CD, or Jenkins for automating builds, tests, and deployments, enabling developers to ship code quickly and confidently. <br/>
    - <strong>Monitoring and Logging:</strong> Monitor your deployed React application's performance, availability, and error rates using monitoring tools like Datadog, New Relic, or Prometheus. Set up logging and alerting mechanisms to detect and respond to issues quickly, ensuring optimal application performance and uptime. <br/>
    - <strong>Security Considerations:</strong> Secure your deployed React application by implementing security best practices, such as HTTPS encryption, content security policy (CSP), and protection against common web application security threats like cross-site scripting (XSS) and SQL injection. Regularly update dependencies and libraries to patch security vulnerabilities and ensure a secure deployment environment. <br/> <br/>
    <strong>Conclusion:</strong> <br/>
    Deploying a React application involves selecting the right deployment option, implementing deployment best practices, and ensuring optimal performance, security, and reliability. By following established deployment strategies, automating deployment processes, and leveraging monitoring and security tools, developers can deploy React applications efficiently and deliver a seamless user experience to their audience.
  ` },
    {
      id: 18, topic: 'Interview Preparation Question', description: `
          <h4>Q1: What is React.js?</h4><br/>
          <p>React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage their state efficiently. React uses a virtual DOM to improve performance by minimizing DOM manipulation and efficiently updating the UI when data changes. It also supports server-side rendering for better SEO and initial page load performance. React.js follows a component-based architecture, where UIs are composed of independent and reusable components, making it easier to maintain and scale applications.</p><br/><br/>
       
          <h4>Q2: What are the differences between class components and functional components in React?</h4><br/>
          <p>In React, class components are ES6 classes that extend from React.Component and can have state and lifecycle methods. Functional components are simpler, pure JavaScript functions that accept props as an argument and return React elements. They don't have state or lifecycle methods but are lightweight and easy to read. With the introduction of React hooks, functional components can now manage state and use lifecycle methods using hooks like useState, useEffect, etc.</p><br/><br/>
       
          <h4>Q3: What is JSX?</h4><br/>
          <p>JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. It provides a more concise and readable way to describe the structure of UI components in React applications. JSX is transpiled into standard JavaScript using tools like Babel before being rendered in the browser. It allows developers to write UI components as functions or classes and seamlessly integrate JavaScript logic with HTML-like markup.</p><br/><br/>
       
          <h4>Q4: What are props in React?</h4><br/>
          <p>Props (short for properties) are a mechanism for passing data from parent to child components in React. They are read-only and are used to customize the behavior or appearance of a component. Props are passed as attributes to a component when it is used in JSX. Inside the component, props can be accessed using the props object. They allow components to be reusable and configurable, making it easy to create dynamic and interactive UIs in React.</p><br/><br/>
       
          <h4>Q5: What is state in React?</h4><br/>
          <p>State is a built-in feature in React that represents the mutable data of a component. It is managed internally by the component and can be updated using the setState method. State allows components to maintain and update their data over time, enabling them to respond to user input and other events. Stateful components have state data that can change over time, while stateless components rely solely on props for their data. State management is essential for building dynamic and interactive user interfaces in React.</p><br/><br/>
       
          <h4>Q6: What are the lifecycle methods in React?</h4><br/>
          <p>Lifecycle methods are special methods provided by React that allow developers to hook into various stages of a component's lifecycle. These methods are called at specific points in a component's lifecycle, such as when it is created, updated, or destroyed. Lifecycle methods can be used to perform tasks like initializing state, fetching data from APIs, updating the UI in response to state changes, and cleaning up resources when a component is unmounted. Examples of lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.</p><br/><br/>
       
          <h4>Q7: What is the virtual DOM in React?</h4><br/>
          <p>The virtual DOM (Document Object Model) is a lightweight, in-memory representation of the real DOM in React. It is a JavaScript object that mirrors the structure of the actual DOM elements but lacks the ability to directly manipulate the browser's DOM. React uses the virtual DOM to perform efficient DOM updates by comparing the current virtual DOM with the previous one and only applying the necessary changes to the actual DOM. This approach minimizes DOM manipulation and improves the performance of React applications, especially for complex and frequently updated UIs.</p><br/><br/>
       
          <h4>Q8: What are keys in React and why are they important?</h4><br/>
          <p>Keys are special attributes in React that provide a hint to React about the identity of each component in a list. They help React identify which items have changed, been added, or been removed in a list, and update the UI accordingly. Keys should be unique among siblings and stable across re-renders to ensure proper reconciliation. Using keys correctly ensures efficient updates and prevents unnecessary re-renders, improving the performance and stability of React applications, especially when rendering lists or dynamically generated components.</p><br/><br/>
      
          <h4>Q9: What is the purpose of the useEffect hook in React?</h4><br/>
          <p>The useEffect hook in React is used to perform side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM in React components. The useEffect hook replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in functional components. It allows developers to perform side effects safely and efficiently by specifying dependencies and cleanup functions. The useEffect hook runs after every render by default, but developers can control its behavior using dependency arrays and cleanup functions.</p><br/><br/>
       
          <h4>Q10: How does React Router work?</h4><br/>
          <p>React Router is a popular library for declarative routing in React applications. It allows developers to define the navigation structure of their application using a declarative syntax similar to the one used for rendering UI components. React Router uses a component-based approach to define routes, where each route is represented by a React component. When a user navigates to a specific URL, React Router matches the URL against the defined routes and renders the corresponding component. React Router provides features like nested routes, route parameters, programmatic navigation, and dynamic route matching, making it easy to build complex and dynamic navigation systems in React applications.</p><br/><br/>
       
          <h4>Q11: What are higher-order components (HOCs) in React?</h4><br/>
          <p>Higher-order components (HOCs) are a pattern in React used to enhance the functionality of components. A higher-order component is a function that takes a component as an argument and returns a new component with additional features or behavior. HOCs allow developers to reuse logic across multiple components, such as data fetching, state management, or authentication. They promote code reusability and modularity by separating concerns and encapsulating common functionality into reusable components. Examples of higher-order components include withRouter, connect, and memoize.</p><br/><br/>
       
          <h4>Q12: What are hooks in React?</h4><br/>
          <p>Hooks are a new addition in React 16.8 that allow developers to use state and other React features in functional components. Hooks are functions that enable developers to "hook into" React state and lifecycle features from functional components without writing a class. React provides built-in hooks like useState, useEffect, useContext, and useReducer, which cover common use cases such as managing state, performing side effects, accessing context, and implementing complex logic in functional components. Hooks provide a simpler and more concise way to write React components and encourage the use of functional components over class components.</p><br/><br/>
        
          <h4>Q13: What are controlled components in React?</h4><br/>
          <p>Controlled components are React components whose form elements (like inputs, selects, and textareas) are controlled by React state. In a controlled component, the value of the form element is controlled by React state and is updated through React event handlers. This allows developers to maintain full control over the form data and synchronize it with React state, enabling features like validation, conditional rendering, and dynamic updates. Controlled components ensure a single source of truth for form data and make it easier to implement complex form behavior in React applications.</p><br/><br/>
        
          <h4>Q14: What is context in React and how is it used?</h4><br/>
          <p>Context is a feature in React that allows data to be passed through the component tree without having to pass props manually at every level. Context provides a way to share data between components without having to explicitly pass props through every level of the component tree. It consists of two main parts: the context provider and the context consumer. The context provider is used to define the data that needs to be shared, while the context consumer is used to access that data within the component tree. Context is commonly used for global state management, theme management, and localization in React applications.</p><br/><br/>
        
          <h4>Q15: What are the advantages of using React.js for web development?</h4><br/>
          <p>React.js offers several advantages for web development, including:</p>
          <ul>
            <li><strong>Component-based architecture:</strong> React's component-based architecture allows developers to build reusable and modular UI components, making it easier to manage and scale complex applications.</li>
            <li><strong>Virtual DOM:</strong> React uses a virtual DOM to efficiently update the UI by only rendering the components that have changed, resulting in improved performance and faster rendering times.</li>
            <li><strong>JSX:</strong> JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript, making it easier to create and maintain UI components.</li>
            <li><strong>React Native:</strong> React.js can be used to build cross-platform mobile applications using React Native, allowing developers to reuse code and skills across web and mobile platforms.</li>
            <li><strong>Strong community and ecosystem:</strong> React.js has a large and active community of developers, along with a rich ecosystem of libraries, tools, and resources to support development and solve common challenges.</li>
          </ul>
          <p>Overall, React.js provides a powerful and efficient framework for building modern web applications with a focus on performance, scalability, and developer productivity.</p><br/><br/>
  `
    },
    {
      id: 19, topic: 'Projects / Practise React', description: ` <div class="container-fluid design g-0">
      <h3 class='text-success text-center text-capitalize pt-5'>here We have Some projects Based on React </h3>
      <div class="container py-5">
          <div class="row">
              <div class="col-lg-6  my-2 col-12">
                  <div class="card border p-3" style="background-color:#6aa1b4">
                      <div
                          class="bg-image hover-overlay ripple"
                          data-mdb-ripple-color="light"
                      >
                          <div class="row">
                              <div class="col-4">
                                  <img src="../img/amazon1.jpg" class="img-fluid tilt-effect2" />
                              </div>
                              <div class="col-8 align-self-center">
                                  <div>
                                      <h5 class="card-title text-light">
                                          Blog Apps
                                      </h5>
                                  </div>

                                  <div>
                                      <Link to="/blog-app-react">
                                          <div class="btn text-warning text-capitalize bg-dark">
                                              Get it
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>`
    },
    {
      id:20 , topic: 'React-SEO' , description: '<p> AS reading react an implementation of react in real life is not similar as it is fast and reliable but it has so many disadvantages like its seo is poor . Mainly react is used for product building if your site need seo to rank on google then react is mainly for you . But i have  made a way that in terms of seo </p> <br/> <h3> What Seo Actually Needs </h3> <br/> Sitemap that we submit to google on google analytics or google search console so to create sitemap i have written a code in normal Html ,css ,js use it and upload your seo to google that will make your webiste good reach as google will able to know how many pages you have and index them . <br/> <a href = "https://codesaarthi.com/React-Seo" target="_blank" >Click Here</a> <br/> Okay how to use it so you have to put all your Routes only here noting else and it will create the sitemap .<br/> Like in place of url submit :-> https://codesaarthi.com <br/> do not end with / <br/>  the routes must be maintained like this in input field of routes .<br/><h4>Routes:- </h4> <br/> <img src = "img/routes.jpg" class ="imageHeight" alt = "routes information" /> <br/><br/><p> You will get dowmloaded your own sitemap here. '
    },

  ];

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
        <meta name="keywords" content="React , New Version react , Learn React , React with examples ." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Read-Content" />
        <meta name="description" content="here you will get all the content related to react  as newest version of learning in react all updates." />
        <title></title>
        <meta property="og:title" content="" />
        <meta property="og:description" content="here you will get all the content related to react  as newest version of learning in react all updates." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/Read-Content" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      <div class="container-fluid design g-0" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container">
        <div class=" d-lg-none d-block">
          <button
            onClick={toggleSidebar}
            class=" navbar-toggler  shadow-0 d-lg-none  d-block"
            style={{ color: "#FFE164", fontSize: "1.8rem" }}
          >
            <i class="fi fi-br-align-justify ps-2"></i>
          </button>
        </div>
        <h1 class='py-2 text-success text-decoration-underline'>Let's Learn React in the New Version</h1>
        <div class="row g-0 p-lg-2 p-0 border border-dark">

          <div class="col-lg-3 col-0 p-lg-2 p-0 d-lg-block d-none border border-dark"style={{ backgroundColor: '#262626' }} >
            {/* Rendering topic titles */}
            {importantTopics.map(topic => (
              <div key={topic.id} onClick={() => handleTopicClick(topic.id)} style={{ cursor: 'pointer' }}>
                <p class='text-capitalize' style={{ color: '#FFE164' }}>{topic.topic}</p>
                <hr />
              </div>
            ))}
          </div>
          {isSidebarOpen ?
            <>
              <div class="d-lg-none d-block">


                <div class="container-fluid  g-0 d-lg-none d-block">
                  <div
                    style={{ zIndex: "99" }}
                    class={`sidebar3 ${isSidebarOpen ? "show" : ""
                      } d-lg-none d-md-none d-sm-block`}
                  >
                    {/* Rendering topic titles */}
                    {importantTopics.map((topic) => (
                      <div
                        key={topic.id}
                        onClick={() => handleTopicClick(topic.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <small class="text-capitalize">
                          {topic.topic}
                        </small>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </> : " "}
          <div class="col-lg-9 col-12 ">
            {/* Rendering corresponding descriptions */}
            {selectedTopic !== null && (
              <div class='p-2'>
                <h3 class='text-capitalize text-warning'>{importantTopics[selectedTopic - 1].topic}</h3>
                <div class='text-light p-2' dangerouslySetInnerHTML={{ __html: importantTopics[selectedTopic - 1].description }}></div>
                <div class="row">
                  <div class="col-6 text-start">
                    <div class="btn border text-capitalize text-warning" onClick={goToPreviousTopic}><i class="fi fi-rr-angle-small-left"></i>previous</div>
                  </div>
                  <div class="col-6 text-end">
                    <div class="btn  border text-capitalize text-warning" onClick={goToNextTopic}>Next <i class="fi fi-rr-angle-small-right"></i></div>
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

export default React_Content;
