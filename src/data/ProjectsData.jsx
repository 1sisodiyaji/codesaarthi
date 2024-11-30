const ProjectData = [
  {
    id: "1",
    name: "HTML",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1718958922/codesaarthi/article-1718958916242.png",
    projects: [
      {
        number: "01",
        title: "Assignment page",
        description:
          "This is an Basic project to learn html tags and practise more tags. Here we will create an Assignment Page Where Some Questions and Answers .",
        headingDescription: `
          <div>
              <small>
                  This project is a simple assignment page created using basic HTML tags.
              </small>
              <p className= "text-decoration-underline" >Key Features:</p>
              <ul>
                  <li>Utilizes HTML tags to practice fundamental HTML coding.</li>
              </ul>
          </div>
          `,

        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719859968/codesaarthi/htmlProject1_qkydt6.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719859968/codesaarthi/htmlProject2_fi5uk1.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Assignment_Page.git",
          deployed: "https://assignment-page.vercel.app",
        },
        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Questions</title>
    </head>
    <body>
        <h2>Assignment test</h2>
        <details>
            <summary>Who is the current cm of Bihar ? </summary>
            <p>Nitish Kumar</p>
        </details>
        <details>
            <summary>Who is the current pm of India ? </summary>
            <p>Narendar Modi</p>
        </details>
        <details>
            <summary>Who is the current cm of Odisha ? </summary>
            <p>Naveen Pattnayak</p>
        </details>
        <details>
            <summary>Who is the current external affair minister ? </summary>
            <p>S. Jayshankar</p>
        </details>
        <details>
            <summary>Who is the current Governor of RBI ? </summary>
            <p>Shashikant Das</p>
        </details>
        <br>
        <h3>Multiple choice Question</h3>
        <p>
             Q1. Which of the following is a renewable source of energy?<br>
            <input type="radio" id="Coal" name="Question1" value="Coal">
            <label for="Coal">Coal</label><br>
            <input type="radio" id="Natural gas" name="Question1" value="Natural gas">
            <label for="Natural gas">Natural gas</label><br>
            <input type="radio" id="Solar power" name="Question1" value="Solar power">
            <label for="Solar power">Solar power</label><br>
            <input type="radio" id="Petroleum" name="Question1" value="Petroleum">
            <label for="Petroleum">Petroleum</label><br><br>
            
            <details>
                <summary>Answer</summary>
                <p>Solar Power</p>
            </details>
        
            Q2. Which of the following is an example of a chemical change?<br>
            <input type="radio" id=" Melting ice" name="Question1" value=" Melting ice">
            <label for=" Melting ice"> Melting ice</label><br>
            <input type="radio" id="Dissolving sugar in water" name="Question1" value="Dissolving sugar in water">
            <label for="Dissolving sugar in water">Dissolving sugar in water</label><br>
            <input type="radio" id=" Rusting of iron" name="Question1" value=" Rusting of iron">
            <label for=" Rusting of iron"> Rusting of iron</label><br>
            <input type="radio" id="Breaking a glass" name="Question1" value="Breaking a glass">
            <label for="Breaking a glass">Breaking a glass</label><br><br>
        
            <details>
                <summary>Answer</summary>
                <p>Rusting Of iron</p>
            </details>
        
            Q3. Which of the following is a characteristic of a plant cell?<br>
            <input type="radio" id="Cell wall and chloroplasts" name="Question1" value="Cell wall and chloroplasts">
            <label for="Cell wall and chloroplasts">Cell wall and chloroplasts</label><br>
            <input type="radio" id="Cell membrane and mitochondria" name="Question1" value="Cell membrane and mitochondria">
            <label for="Cell membrane and mitochondria">Cell membrane and mitochondria</label><br>
            <input type="radio" id="Nucleus and Golgi apparatus" name="Question1" value="Nucleus and Golgi apparatus">
            <label for="Nucleus and Golgi apparatus">Nucleus and Golgi apparatus</label><br>
            <input type="radio" id="Vacuoles and ribosomes" name="Question1" value="Vacuoles and ribosomes">
            <label for="Vacuoles and ribosomes">Vacuoles and ribosomes</label><br><br>
        
            <details>
                <summary>Answer </summary>
                <p>Cell wall and chloroplasts</p>
            </details>
        
            Q4.What is the largest planet in our solar system?<br><br>
            <input type="radio" id="C Earth" name="Question1" value="C Earth">
            <label for=" Earth">C Earth</label><br>
            <input type="radio" id="Venus" name="Question1" value="Venus">
            <label for="Venus">Venus</label><br>
            <input type="radio" id="Mars" name="Question1" value="Mars">
            <label for="Mars">Mars</label><br>
            <input type="radio" id=" Jupiter" name="Question1" value=" Jupiter">
            <label for=" Jupiter"> Jupiter</label><br>
        
            <details>
                <summary>Answer</summary>
                <p>Jupiter</p>
            </details>
        
            Q5. Who invented the telephone?<br><br>
            <input type="radio" id="Thomas Edison" name="Question1" value="Thomas Edison">
            <label for="Thomas Edison">Thomas Edison</label><br>
            <input type="radio" id="Alexander Graham Bell" name="Question1" value="Alexander Graham Bell">
            <label for="Alexander Graham Bell">Alexander Graham Bell</label><br>
            <input type="radio" id="Albert Einstein" name="Question1" value="Albert Einstein">
            <label for="Albert Einstein">Albert Einstein</label><br>
            <input type="radio" id=" Isaac Newton" name="Question1" value=" Isaac Newton">
            <label for=" Isaac Newton"> Isaac Newton</label><br>
        
            <details>
                <summary>Answer</summary>
                <p>Alexander Graham Bell</p>
            </details>
        
            <input type="submit">
        </p>
    </body>
    </html>
  `,
        additionalDescriptions: `
          <div>
              <h6 class = "fw-bold">Tech Stack:</h6>
              <ul>
                  <li>HTML: For page structure and content.</li>
              </ul>
              <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <h6 class = " "> But My personal Suggestion will be check the images and try it by your self if not then go with the code mention it here . </h6> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
          </div>
          `,
      },
      {
        number: "02",
        title: "Portfolio basic page",
        description:
          "This is an project to describe an portfolio by using only HTML. You can create with an amazing power of HTML You can see this..",
        headingDescription: `
          <div>
    <small>
        This project is a simple portfolio-based project created using only HTML. Where we will create the portfolio page simple by Html tags
    </small>
    <p class = "my-2" >Key Features:</p>
    <ul>
        <li>Utilizes HTML tags to practice fundamental HTML coding.</li>
    </ul>
    
</div>

          
          `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719862810/codesaarthi/portfolio1_otc8wc.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719862847/codesaarthi/portfolio2_bkxmjd.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/its_me-HTML.git",
          deployed: "https://its-me-html.vercel.app",
        },
        code: `  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>
<body>
    <div>
        <div>
            <h1>Golu Singh</h1>
            <p>Contact: <a href="mailto:637golusingh@gmail.com">637golusingh@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/golu-singh-602023204">My LinkedIn ID</a></p>
            <p>GitHub: <a href="https://github.com/1sisodiyaji">My GitHub ID</a></p>
        </div>
        <table>
            <tr>
                <td>
                    <img src="its_me.jpg" width="100px" alt="My pic">
                </td>
                <td>
                    I am a passionate and dedicated coder, seeking an exciting opportunity to showcase my skills
                    and contribute to a dynamic team. With a solid foundation in programming and a deep love for
                    creating innovative solutions, I am confident in my ability to make a significant impact.
                    This portfolio and CV will provide you with an insight into my experience, technical expertise,
                    and projects that demonstrate my passion for coding.
                </td>
            </tr>
        </table>
        <section>
            <h2>Education</h2>
            <ul>
                <li>Bachelor of Technology in Information Technology, Trident Academy of Technology.</li>
                <li>B.S.S.N. Deo College Secondary School</li>
            </ul>
        </section>
        <section>
            <h1>Work experience</h1>
            <h3>Currently Studying</h3>
            I am currently pursuing my college degree...
        </section>
        <section>
            <h2>Skills</h2>
            <ul>
                <li>Java</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
        </section>
        <section>
            <h2>Achievements</h2>
            <ul>
                <li>I have won the Runner-up prize in our College Tech Fest.</li>
                <li>I have recently placed 12th in a Coding competition.</li>
            </ul>
        </section>
        <section>
            <h2>Projects</h2>
            <ul>
                <li>
                    <h4>Bank Management System</h4>
                    <p>Bank Management Application - developed a desktop application using Java Swing and MySQL server.</p>
                    <p>Hosted Link: <a href="Not present.com">Not present at all</a></p>
                    <p>GitHub Link: <a href="https://github.com/1sisodiyaji/Bank_Management_System.git">My GitHub project link</a></p>
                </li>
                <li>
                    <h4>Calculator</h4>
                    <p>It is basically created using HTML, CSS, and JS, and performs basic calculations.</p>
                    <p>Hosted Link: <a href="https://calculator-vert-nine.vercel.app/">Click Here</a></p>
                    <p>GitHub Link: <a href="https://github.com/1sisodiyaji/Calculator.git">Project link</a></p>
                </li>
            </ul>
        </section>
    </div>
</body>
</html>

        `,
        additionalDescriptions: `
        <h6 class = "fw-bold">Tech Stack:</h6>
        <ul>
          <li>HTML For Page Structure and basic layout .</li>
        </ul>
    
       <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <h6 class = " "> But My personal Suggestion will be check the images and try it by your self if not then go with the code mention it here . </h6> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
        
     
      `,
      },
      {
        number: "03",
        title: "Product  Page",
        description:
          "This is an Product page where you can see a basic design of an product page shopping  page card by using HTML only an ecommerce webiste .",
        headingDescription: `
          <div>
    <small>
        This project is a simple design-based project focused on creating a product page and bookmarks using HTML.
    </small>
    <p className= "my-2" >Key Features:</p>
    <ul>
        <li>Utilizes HTML tags to practice fundamental HTML coding.</li>
        <li>Involves creating bookmarks and list tags.</li>
    </ul>
</div>

          
          `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719860740/codesaarthi/ProductCatalog2_owo7jd.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719860740/codesaarthi/ProductCatalog1_u6xxwv.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/E-commerce-HTML.git",
          deployed: "https://e-commerce-html-zeta.vercel.app",
        },
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Catalog</title>
</head>
<body>
    <div>
        <h1>Product Catalog</h1>
        <p>
            <a href="#Electronics">Electronics</a><br>
            <a href="#Clothing">Clothing</a><br>
            <a href="#Home">Home</a><br>
        </p>
        
        <section>
            <h2 id="Electronics">Electronics</h2>
            <h4>Laptop</h4>
            <p>
                <strong>Description:</strong> High-performance with the latest Processor and ample storage<br>
                <strong>Price:</strong> $5999.99<br>
                <strong>Availability:</strong> In stock<br>
                <img src="Laptop.png" alt="Laptop" width="200px"><br>
                <details>
                    <summary>View Details</summary>
                    <ul>
                        <li><strong>Brand:</strong> XYZ electronics</li>
                        <li><strong>Screen Size:</strong> 15.6 inches</li>
                        <li><strong>RAM:</strong> 8GB</li>
                        <li><strong>Storage:</strong> 512 GB SSD</li>
                    </ul>
                </details>
            </p>
        </section>
        
        <section>
            <h2>Smartphone</h2>
            <p>
                <strong>Description:</strong> Feature-rich smartphone with a high-resolution display and advanced camera<br>
                <strong>Price:</strong> $5699.99<br>
                <strong>Availability:</strong> Out of stock<br>
                <img src="Phone.jpg" alt="Smartphone image" width="150px"><br>
                <details>
                    <summary>View Details</summary>
                    <ul>
                        <li><strong>Brand:</strong> ABC model</li>
                        <li><strong>Screen Size:</strong> 6.5 inches</li>
                        <li><strong>RAM:</strong> 6GB</li>
                        <li><strong>Storage:</strong> 128GB</li>
                    </ul>
                </details>
            </p>
        </section>
        
        <section>
            <h2 id="Clothing">Clothing</h2>
            <h3>T-Shirt</h3>
            <p>
                <strong>Description:</strong> Casual and comfortable t-shirt made from premium quality cotton<br>
                <strong>Price:</strong> $59.99<br>
                <strong>Availability:</strong> In stock<br>
                <img src="T-shirt.jpg" alt="T-shirt image" width="150px"><br>
                <details>
                    <summary>View Details</summary>
                    <ul>
                        <li><strong>Brand:</strong> Fashion Apparel</li>
                        <li><strong>Color:</strong> Light-Grey</li>
                        <li><strong>Size:</strong> S, M, L</li>
                        <li><strong>Material:</strong> 100% cotton</li>
                    </ul>
                </details>
            </p>
        </section>
        
        <section>
            <h4>Jeans</h4>
            <p>
                <strong>Description:</strong> Casual jeans with a slim fit and stylish design<br>
                <strong>Price:</strong> $49.99<br>
                <strong>Availability:</strong> In stock<br>
                <img src="Jeans.jpg" alt="Jeans image" width="150px"><br>
                <details>
                    <summary>View Details</summary>
                    <ul>
                        <li><strong>Brand:</strong> Denim Co.</li>
                        <li><strong>Color:</strong> Grey</li>
                        <li><strong>Size:</strong> 30, 32, 34</li>
                        <li><strong>Material:</strong> Denim</li>
                    </ul>
                </details>
            </p>
        </section>
        
        <section>
            <h2 id="Home">Home</h2>
            <h4>Table</h4>
            <p>
                <strong>Description:</strong> Modern and stylish table lamp to enhance home decor<br>
                <strong>Price:</strong> $39.99<br>
                <strong>Availability:</strong> In stock<br>
                <img src="Table.jpg" alt="Table" width="150px"><br>
                <details>
                    <summary>View Details</summary>
                    <ul>
                        <li><strong>Brand:</strong> Home Essentials</li>
                        <li><strong>Color:</strong> White</li>
                        <li><strong>Size:</strong> 12 inches</li>
                        <li><strong>Material:</strong> Wood</li>
                    </ul>
                </details>
            </p>
        </section>
    </div>
</body>
</html>



`,

        additionalDescriptions: `
         <h6 className="fw-bold">Tech Stack:</h6>
    <ul>
        <li>HTML: For structuring the page and its content.</li>
    </ul>
 
    <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <h6 class = " "> But My personal Suggestion will be check the images and try it by your self if not then go with the code mention it here . </h6> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
        
         `,
      },
      {
        number: "04",
        title: "Job Application",
        description:
          " This project is an job application form where you can see a job application form as basic design of job application Form.",
        headingDescription: `
          <small>
    Basically, this is a project of creating a job application page where you can submit your job post. You can use this project as a skeleton for your main projects.
</small>
<p class = "my-2" >Key Features:</p>

<ul>
    <li>Good Design: It has a good design or we can say a basic simple design as we can start from here.</li>
    <li>High-Quality Code: The code is well maintained and written in a proper manner so you can edit and modify it more easily.</li>
    <li>Responsive Design: The design is responsive, allowing users to check it on any device. It will work seamlessly on every platform, and if not, you can try and add a fork on GitHub.</li>
</ul>

          `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719862683/codesaarthi/JobApplication_cfzxn2.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719862683/codesaarthi/JobApplication_cfzxn2.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Job_Application.git",
          deployed: "https://job-application-three-kappa.vercel.app",
        },
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application </title>
</head>
<body>
    <h2>Job Application </h2>
    <form >
    <label for="name"> Name :</label>
    <input type="text" id ="name" name = "name">
    <br>
    <br>
    <label for="EmailID">Email Id :</label>
    <input type="email" id="EmailID" name ="EmailID">
    <br>
    <br>
    <label for="PhoneNumber">Phone No:</label>
    <input type="tel" id="PhoneNumber" name ="PhoneNumber">
    <br>
    <br>
    <label for="FileUpload">Resume :</label>
    <input type="file" name ="FileUpload" id="FileUpload">
    <br>
    <br>
    <label for="Counter"> Experience (in Years)</label>
    <input type="number" id="Counter" name="Counter"min ="0" max = "50">
    <br>
    <fieldset>
        <legend>Skills</legend>
        <label for="Html">HTML</label>
        <input type="checkbox"id="html" name= "html">
        <br>
        <label for="css">CSS</label>
        <input type="checkbox" id="css" name ="css">
        <br>
        <label for="Javascript">JAVASCRIPT</label>
        <input type="checkbox" id ="Javascript" name ="Javascript">
    </fieldset>
    <br><br>
    <label for="EdcuationType">Hihgest Education</label>
    <select name="EdcuationType" id="EdcuationType">
        <option value="M.tech">M.tech</option>
        <option value="B.tech">B.tech</option>
        <option value="Secondary School">Secondary School</option>
        <option value="High School">High School</option>
        <option value="Diploma">Diploma</option>
        <option value="Others">Others</option> 
    </select>
<br><br>
<fieldset>
    <legend>Availability</legend>
    <label for="radio1">Full-Time</label>
    <input type="radio" id="radio1" name="radio">
    <br>
    <label for="radio2">Part-Time</label>
    <input type="radio" id="radio2" name="radio">
    <br>
</fieldset>
<br><br>
<label for="AdditionalComments">Additional Comments </label> <br>
<div style="padding: 5px;">
<textarea name="AdditionalComments" id="AdditionalComments" style="width: 100%;"  rows="10"></textarea>
</div>
<br>
<input type="Submit" value="Submit Application">
</form>
</body>
</html>
        
        `,
        additionalDescriptions: `
           <h5 class = "fw-bold" >Tech Stack:</h6>
        <ul>
          <li>HTML: Page structure and layout.</li>
        </ul>
    
        <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2"> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <h6> But My personal Suggestion will be check the images and try it by your self if not then go with the code mention it here . </h6> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
        
          `,
      },
      {
        number: "05",
        title: "Youtube based  page",
        description:
          " This is an page Where you can see the youtube videos as using iframe tag basically to show basic html tags",
        headingDescription: `
          <small>
    In these projects, we are going to add iframes, media such as images, audio, and all that in these projects.
</small>
<p class = "my-2" >Key Features:</p>

<ul>
    <li>Using tags to practice the basic HTML code.</li>
    <li>Practicing more to use media tags in code.</li>
</ul>

          `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719861815/codesaarthi/Media1_dxectj.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719861818/codesaarthi/Media2_sma0jd.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/HTML_TAGS.git",
          deployed: "https://html-tags01.vercel.app",
        },
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Welcome to Code Arena</h1>
    </header>
    <table>
        <tr>
            <td>
                <img src="Ram-Siyaram.jpg" alt="Ram Siyaram Images" width="200" loading="lazy">
            </td>
            <td>
                <nav>
                    <ul>
                        <li><a href="#roadmapSection">Roadmap Videos</a></li>
                        <li><a href="#operatingSection">Operating System Videos</a></li>
                        <li><a href="#DbmsSection">DBMS Videos</a></li>
                        <li><a href="#DsaSection">DSA Videos</a></li>
                        <li><a href="#WebDevelopment">Web Development Videos</a></li>
                    </ul>
                </nav>
            </td>
        </tr>
    </table>
    <div>
        <h2>Tech Stack:</h2>
        <ul>
            <li>HTML: Page structure and content.</li>
        </ul>
    </div>
    <div>
        <h2>How to Start:</h2>
        <p>After that, you can customize it according to your requirements.</p>
    </div>
    <div>
        <h2>HTML Code:</h2>
        <div className="container border rounded-8 p-3  ">
            <pre><code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Welcome to Code Arena</h1>
    </header>
    <table>
        <tr>
            <td>
                <img src="Ram-Siyaram.jpg" alt="Ram Siyaram Images" width="200" loading="lazy">
            </td>
            <td>
                <nav>
                    <ul>
                        <li><a href="#roadmapSection">Roadmap Videos</a></li>
                        <li><a href="#operatingSection">Operating System Videos</a></li>
                        <li><a href="#DbmsSection">DBMS Videos</a></li>
                        <li><a href="#DsaSection">DSA Videos</a></li>
                        <li><a href="#WebDevelopment">Web Development Videos</a></li>
                    </ul>
                </nav>
            </td>
        </tr>
    </table>
    <div>
        <h2>Tech Stack:</h2>
        <ul>
            <li>HTML: Page structure and content.</li>
        </ul>
    </div>
    <div>
        <h2>How to Start:</h2>
        <p>After that, you can customize it according to your requirements.</p>
    </div>
</body>
</html>

            </code></pre>
        </div>
    </div>
</body>
</html>
        
        `,
        additionalDescriptions: `
           <h6 class = "fw-bold" >Tech Stack:</h6>
            <ul>
                <li>HTML: Page structure and layout.</li>
            </ul>

             <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <h6 class = " "> But My personal Suggestion will be check the images and try it by your self if not then go with the code mention it here . </h6> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
        
          `,
      },
    ],
  },
  {
    id: "2",
    name: "Clone_Html",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719863601/codesaarthi/Projects/Clone/clone1_w5a9gw.png",
    projects: [
      {
        number: "01",
        title: "Amazon Clone",
        description:
          "This project is a frontend clone of Amazon, built using HTML, CSS, and JavaScript. It aims to provide users with an experience similar to an online shopping website.",
        headingDescription: `
          <small>
            This project is a frontend clone of Amazon, created using HTML, CSS, and JavaScript. It aims to provide users with an experience similar to an online shopping website.
          </small>
          <p className="mt-2">Key Features:</p>
          <ul>
            <li>Good Design</li>
            <li>High-Quality Images:</li>
            <li>Categories and Search:</li>
            <li>Responsive Design:</li>
            <li>Product Details:</li>
          </ul>
        `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719865094/codesaarthi/Projects/Clone/amazon1_q7aqwn.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719865095/codesaarthi/Projects/Clone/amazon2_g7ucqj.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Amazon-Clone.git",
          deployed: "https://amazon-clone-indol-zeta.vercel.app",
        },
        additionalDescriptions: `
          <h6 className="fw-bold">Tech Stack</h6>
          <ul>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
            <li>JavaScript: Implemented for interactive features and user interface enhancements.</li>
          </ul>
         <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " "> But My personal Suggestion will be check the images and try it by your self it will boost your confidence and clone projects are the best to start as result were shown earlier . </p> 
             
             </div>
              <small className="my-lg-4 my-2">Thank you for exploring these projects. You can also discover more here.</small>
        
              <div className= " my-2 bg-warning p-2 "> 
              <h4> Task  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p >We have left these Project incomplete for you as Base design is done rest all is up to you please try to make it and send Via Email : codesaarthi@gmail.com</p> 
             
             </div>
         
          `,
      },
      {
        number: "02",
        title: "Discord Clone",
        description:
          "This project is a frontend clone of the Discord application, developed using HTML, CSS, and JavaScript. It mimics the look and feel of Discord for educational purposes.",
        headingDescription: `
           
          <h6>Key Features:</h6>
          <ul>
            <li>Modern Design:</li>
            <li>Visual Appeal:</li>
            <li>Responsive Layout:</li>
            <li>Frontend Only:</li>
          </ul>
        `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864902/codesaarthi/Projects/Clone/Discord1_ptwem1.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864903/codesaarthi/Projects/Clone/Discord2_aggnql.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/DIscord.git",
          deployed: "https://d-iscord-indol.vercel.app",
        },
        additionalDescriptions: `
          <h6 className="fw-bold">Tech Stack:</h6>
          <ul>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Handled by Tailwind CSS for efficient design and styling.</li>
            <li>JavaScript: Implements interactive features and enhances user interface.</li>
          </ul>
          <h6 className="text-decoration-underline">Getting Started:</h6>
           
          <small>
          You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
            Explore the frontend structure and customize it according to your educational or personal requirements.
          </small>
           <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " "> But My personal Suggestion will be check the images and try it by your self it will boost your confidence and clone projects are the best to start as result were shown earlier . </p> 
             
             </div>
          <small>
            Thank you for exploring this Discord frontend clone project. Discover more frontend projects below:
          </small>
        `,
      },
      {
        number: "03",
        title: "Razorpay Clone",
        description:
          "This project is a frontend clone of the Razorpay payment gateway, developed using HTML, Tailwind CSS, and React. It simulates the user interface and functionality..",
        headingDescription: `
          
          <h6 className="my-2">Key Features:</h6>
          <ul>
            <li>Modern Design: </li>
            <li>Payment Gateway Simulation: </li>
            <li>Responsive Layout:</li>
            <li>Frontend Only:</li>
          </ul>
        `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864673/codesaarthi/Projects/Clone/Razorpay1_hdzwco.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864673/codesaarthi/Projects/Clone/Razorpay2_ktiyrk.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Razor_Pay.git",
          deployed: "https://razor-pay-chi.vercel.app",
        },
        additionalDescriptions: `
          <h6 className="fw-bold">Tech Stack:</h6>
          <ul>
            <li>HTML: Used for page structure and content.</li>
            <li>Tailwind CSS: Responsible for design and styling.</li>
            <li>React: Implemented for interactive features and user interface enhancements.</li>
          </ul>
          <h6 className="text-decoration-underline">Getting Started:</h6>
           
          <small>
          You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
            Explore the frontend structure and customize it according to your educational or personal requirements.
          </small>
           <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " "> But My personal Suggestion will be check the images and try it by your self it will boost your confidence and clone projects are the best to start as result were shown earlier . </p> 
             
             </div>
          <small>
          <small className="my-lg-4 my-2">Thank you for exploring this Razorpay frontend clone project. Check out more frontend projects below:</small>
        `,
      },
      {
        number: "04",
        title: "Spotify",
        description:
          "This project is a frontend clone of the Spotify music streaming application, developed using Html , CSS. It replicates the user interface and functionality of Spotify, providing an immersive music streaming experience.",
        headingDescription: `
     
    <h6 className="my-2">Key Features:</h6>
    <ul>
      <li>Responsive Design:</li>
      <li>Music Playback:</li>
      <li>Song Management:</li>
      <li>Search Functionality:</li>
    </ul>
  `,
        images: {
          image1:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864145/codesaarthi/Projects/Clone/Spotify1_ekbnqz.jpg",
          image2:
            "https://res.cloudinary.com/dbqq41bpc/image/upload/v1719864145/codesaarthi/Projects/Clone/Spotify2_wcphzr.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Spotify-Clone.git",
          deployed: "https://spotify-clone-rho-taupe.vercel.app",
        },
        additionalDescriptions: `
    <h6 className="fw-bold">Tech Stack:</h6>
    <ul>
      <li>HTML: Used for building the Structure</li>
      <li>CSS : Responsible for styling and  design.</li>
      <li>JS: Implemented for navigation within the muisc and players.</li>
    </ul>
     <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " "> But My personal Suggestion will be check the images and try it by your self it will boost your confidence and clone projects are the best to start as result were shown earlier . </p> 
             
             </div> 
        
              <div className= " my-2 bg-warning p-2 "> 
              <h4> Task  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p >We have left these Project incomplete for you as Base design is done rest all is up to you please try to make it and send Via Email : codesaarthi@gmail.com</p> 
             
             </div>
    <small className="my-lg-4 my-2">Thank you for exploring this Spotify frontend clone project. Check out more frontend projects below:</small>
  `,
      },
    ],
  },
  {
    id: "3",
    name: "HTML_CSS",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
      {
        number: "01",
        title: "Chair Page",
        description: "Basically this is a project based on a Chair selling company with a good design and amazing color scheme of chair. Check it out!",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109159/codesaarthi/Projects/HTML_CSS/chairPage_iortdq.jpg",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109230/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_112323_nc4oe1.png",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Chair_page.git",
          deployed: "https://chair-page.vercel.app",
        },
        additionalDescriptions: `
          <h6 className='textColor'>Key Features:</h6>
          <ul className=' '>
            <li>Good Design: It has a simple yet effective design to start from.</li>
            <li>High-Quality Code: Well-maintained code that is easily editable and modifiable.</li>
            <li>Responsive Design: Works seamlessly on any device.</li>
          </ul>
        
          <h6 className='textColor'>Tech Stack:</h6>
          <ul className=' '>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
       <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it by your self first it is not that much level of hard know the design concepts of color code  . </p> 
             
             </div> 
        
              
      
          <small className='  my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</small>
          
        `,
      },
      {
        number: "02",
        title: "Hire Me Button",
        description: "Basically this is a project of creating a simple design of a hire me button that can be used as a component in your app. It features a basic design for a hire me button.",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109497/codesaarthi/Projects/HTML_CSS/HireMe_r7wzsb.jpg",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109563/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_112908_n4lyn6.png",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Hire_Me-Button.git",
          deployed: "https://hire-me-button-dusky.vercel.app",
        },
        additionalDescriptions: `
          <h6 className='my-2'>Key Features:</h6>
          <ul>
            <li>Good Design: </li>
            <li>High-Quality Code: </li>
            <li>Responsive Design: </li>
          </ul>
       
          <h6 className='fw-bold'>Tech Stack:</h6>
          <ul className=' '>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
      
          <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it by your self first it is not that much level of hard know the design concepts of center align and hover effect . You can use it as a component in your project . </p> 
             
             </div> 
        
      
          <small className='my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..<small>
         
        </div>
        `,
      },
      {
        number: "03",
        title: "Image Gallery",
        description: "Basically this is a project which will help you in creating a gallery of images in grid mode. You can use the code as a template in your projects.",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109808/codesaarthi/Projects/HTML_CSS/imageGallery_yjfkiv.jpg",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721109912/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_113456_uskmre.png",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Image_gallery.git",
          deployed: "https://image-gallery-tan-rho.vercel.app",
        },
        additionalDescriptions: `
          <h6 className='my-2'>Key Features:</h6>
          <ul>
            <li>Good Design:</li>
            <li>High-Quality Code:</li>
            <li>Responsive Design:</li>
          </ul>
      
          <h6 className='fw-bold'>Tech Stack:</h6>
          <ul>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
       <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it is basically used hover effect and grayscale the images so if you get the hint try by yourself it will boost your journey. </p> 
             
             </div> 
        
      
          <small className='  my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</small>
           
        </div>
        `,
      },
      {
        number: "04",
        title: "Product Card",
        description: "Basically this is a project based on a Product Card of a coffee mug as an example, creating a responsive design of a coffee mug as a product.",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721110144/codesaarthi/Projects/HTML_CSS/productCard_zjgvfi.jpg",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721110227/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_114012_c4mrft.png",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Product_Card2.git",
          deployed: "https://product-card2-ruby.vercel.app",
        },
        additionalDescriptions: `
          <h6 className='my-2'>Key Features:</h6>
          <ul>
            <li>Good Design: </li>
            <li>High-Quality Code:  </li>
            <li>Responsive Design:  </li>
          </ul>
       
      
          <h6 className='fw-bold'>Tech Stack:</h6>
          <ul  >
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
      
            <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it is nothing but a product page okay you can use it as practise or add these code in your projects and treat it as component </p> 
             
             </div> 
      
          <small className='  my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</small>
           
        </div>
        `,
      },
      {
        number: "05",
        title: "Recipe Website",
        description: "Basically this is a project based on a restaurant website. It's an incomplete design, serving as a skeleton from which you can develop further designs and fork this website.",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721110715/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_114814_vmfbpg.png",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721111482/codesaarthi/Projects/HTML_CSS/Screenshot_2024-07-16_120056_gqoblg.png",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Recipe_Website.git",
          deployed: "https://recipe-website-eosin.vercel.app",
        },
        additionalDescriptions: `
          <h6 className='my-2'>Key Features:</h6>
          <ul className=' '>
            <li>Good Design: </li>
            <li>High-Quality Code: </li>
            <li>Responsive Design:</li>
          </ul>
       
      
          <h6 className='fw-bold'>Tech Stack:</h6>
          <ul className=' '>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
      
           
            <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it by yourself it is an restarunt a single page of recipe so you can try it and create much more beautiful pages as taking base code it as. </p> 
             
             </div> 
      
          <small className='  my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</small>
           
        </div>
        `,
      },
      {
        number: "06",
        title: "Shopping last page - (Frontend)",
        description: "Basically This project is the design of the last page for a shopping website using only HTML and CSS. As the last page of Product an Perfume Product.",
        headingDescription: " ",
        images: {
          image1: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721111610/codesaarthi/Projects/HTML_CSS/shopping_last_page_ltfqkb.jpg",
          image2: "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721111610/codesaarthi/Projects/HTML_CSS/shopping_last_page_ltfqkb.jpg",
        },
        links: {
          github: "https://github.com/1sisodiyaji/Shopping_Last_Page.git",
          deployed: "https://shopping-last-page.vercel.app/",
        },
        additionalDescriptions: `
          <h6  className='my-2'>Key Features:</h6>
          <ul  className=' '>
            <li>Good Design: </li>
            <li>High-Quality Code:</li>
            <li>Responsive Design:</li>
          </ul>
       
      
          <h6  className='fw-bold'>Tech Stack:</h6>
          <ul  className=' '>
            <li>HTML: Used for page structure and content.</li>
            <li>CSS: Used for design and styling.</li>
          </ul>
      
            <h6 className="text-decoration-underline">Getting Started:</h6>
              <small>You can go through the Github link and clone it and start working .
                  After this, you can customize it according to your requirements.
              </samll>
              <div className= " my-2 bg-success p-2 "> 
              <h4> Tips  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p class = " ">   My personal Suggestion will be try it by yourself it is an perfume last page so this one is basic. </p> 
             </div> 
           
             <div className= " my-2 bg-warning p-2 "> 
              <h4> Task  <i className="fi fi-rr-lightbulb-on "></i> </h4>
              <p>This one is base as last coffee  page where  i have shared the best deisgn but these one is for you to customise and send us via Email : codesaarthi@gmail.com</p> 
             </div> 

      
          <small  className='  my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</small>
          
        </div>
        `,
      }
       
    ],
  },
  {
    id: "4",
    name: "Java",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
    ]
  },
  {
    id: "5",
    name: "Php",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
    ]
  },
  {
    id: "6",
    name: "React",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
    ]
  },
  {
    id: "7",
    name: "Javascript",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
    ]
  }
  ,
  {
    id: "8",
    name: "Angular",
    thumbnail:
      "https://res.cloudinary.com/dbqq41bpc/image/upload/v1721108419/codesaarthi/Projects/HTML_CSS/htmlcss1_qiau0p.png",
    projects: [
    ]
  }
];
export default ProjectData;
