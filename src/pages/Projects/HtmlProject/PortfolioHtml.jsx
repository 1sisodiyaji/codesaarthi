import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const PortfolioHtml = () => {
    return (
        <>
        <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="basic html project , top 5 easy html projects, learn html with projects., portfolio page in html , easy projects in html." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/PortfolioHtml" />
                <meta name="description" content="basically these page is a portfolio of  a person in html , tried to learn more tags in html .  Portfolio based on only html ." />
                <title>Portfolio page in html | CodeSaarthi</title>
                <meta property="og:title" content="Portfolio page in html | CodeSaarthi" />
                <meta property="og:description" content="basically these page is a portfolio of  a person in html , tried to learn more tags in html .  Portfolio based on only html ." />
                <meta property="og:image" content="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
                <meta property="og:url" content="https://codesaarthi.com/PortfolioHtml" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'> Project Title: Portfolio Project</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        Ye Project ek simple Portfolio based project h jo ki sirf html se bnaya gya h .
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Using Tags to practise the basic html code.</li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/portfolio1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="img/portfolio2.jpg" alt="" className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li>  HTML: Page structure aur content ke liye.</li>

                    </ul>

                    <h6 className='textColor'> Kaise Shuru Karein:</h6>


                    <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>

                    <h6 className='text-warning'>Html Code :</h6>
                    <div className="container border rounded-8 p-3 text-light">
                    <pre>
    <code>
        &lt;!DOCTYPE html&gt;<br/>
        &lt;html lang="en"&gt;<br/>
        &lt;head&gt;<br/>
            &lt;meta charset="UTF-8"&gt;<br/>
            &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br/>
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br/>
            &lt;title&gt;Portfolio&lt;/title&gt;<br/>
        &lt;/head&gt;<br/>
        &lt;body&gt;<br/>
            &lt;div&gt;<br/>
                &lt;div&gt;<br/>
                    &lt;h1&gt;Golu Singh&lt;/h1&gt;<br/>
                    &lt;p&gt;Contact: &lt;a href="637golusingh@gmail.com"&gt;637golusingh@gmail.com&lt;/a&gt;&lt;/p&gt;<br/>
                    &lt;p&gt;Linkedin: &lt;a href="https://www.linkedin.com/in/golu-singh-602023204"&gt;My Linkedin id&lt;/a&gt;&lt;/p&gt;<br/>
                    &lt;p&gt;Github: &lt;a href="https://github.com/1sisodiyaji"&gt;My Github id&lt;/a&gt;&lt;/p&gt;<br/>
                &lt;/div&gt;<br/>
                &lt;table&gt;&lt;tr&gt;<br/>
                    &lt;tr&gt;<br/>
                        &lt;td&gt;<br/>
                            &lt;img src="its_me.jpg" width="100px" alt="My pic"&gt;<br/>
                        &lt;/td&gt;<br/>
                        &lt;td&gt;<br/>
                            I am a passionate and dedicated coder, seeking an exciting opportunity to showcase my skills<br/>
                            and contribute to a dynamic team. With a solid foundation in programming and a deep love for<br/>
                            creating innovative solutions, I am confident in my ability to make a significant impact.<br/>
                            This portfolio and CV will provide you with an insight into my experience, technical expertise,<br/>
                            and projects that demonstrate my passion for coding.<br/>
                        &lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                &lt;/tr&gt;&lt;/table&gt;<br/>
                &lt;section&gt;<br/>
                    &lt;h2&gt;Education&lt;/h2&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt; BAchelor of Technology in Information Technology , Trident Academy<br/>
                        of Technology.<br/>
                    &lt;/li&gt;<br/>
                    &lt;li&gt;<br/>
                        B.S.S.N  Deo College Secondary School<br/>
                    &lt;/li&gt;<br/>
                &lt;/ul&gt;<br/>
                &lt;/section&gt;<br/>
                &lt;section&gt;<br/>
                    &lt;h1&gt;Work experience&lt;/h1&gt;<br/>
                    &lt;h3&gt;Currently Studying&lt;/h3&gt;<br/>
                    I am currently pursuring my collge degree ...<br/>
                &lt;/section&gt;<br/>
                &lt;section&gt;<br/>
                    &lt;h2&gt;skills&lt;/h2&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;Java&lt;/li&gt;<br/>
                    &lt;li&gt;C&lt;/li&gt;<br/>           
                    &lt;li&gt;Html&lt;/li&gt;<br/>
                    &lt;li&gt;Css&lt;/li&gt;<br/>
                    &lt;li&gt;JavaScript&lt;/li&gt;<br/>
                    &lt;li&gt;Sql&lt;/li&gt;<br/>
                    &lt;li&gt;mongo Db&lt;/li&gt;<br/>
                &lt;/ul&gt;<br/>
                &lt;/section&gt;<br/>
                &lt;section&gt;<br/>
                    &lt;h2&gt;Achievements&lt;/h2&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;<br/>
                        I have Won the Runner prize in our College tech fest <br/>
                    &lt;/li&gt;<br/>
                    &lt;li&gt;<br/>
                         I have recently Won in a Coding platform as 12th Poistion.<br/>
                    &lt;/li&gt;<br/>
                    &lt;/ul&gt;<br/>
                &lt;/section&gt;<br/>
                &lt;section&gt;<br/>
                   &lt;h2&gt; Projects&lt;/h2&gt;<br/>
                   &lt;ul&gt;<br/>
                    &lt;li&gt;<br/>
                    &lt;h4&gt;Bank Management System&lt;/h4&gt;<br/>
                    &lt;p&gt;Bank Management Application - developed a desktop Application<br/>
                        by using java swing and mySQL server.<br/>
                    &lt;/p&gt;<br/>
                    &lt;p&gt;Hosted Link &lt;a href="Not present.com"&gt; Not present at all&lt;/a&gt;&lt;/p&gt;<br/>
                    &lt;p&gt;Github Link &lt;a href="https://github.com/1sisodiyaji/Bank_Management_System.git"&gt; My Github_project link&lt;/a&gt;&lt;/p&gt;<br/>
    
                   &lt;/li&gt;<br/>
                   &lt;li&gt;<br/>
                        &lt;h4&gt;Calculator&lt;/h4&gt;<br/>
                        &lt;p&gt;It  is basicaaaly created by html css js and perform basic activity&lt;/p&gt;<br/>
                        &lt;p&gt;Hosted Link &lt;a href="https://calculator-vert-nine.vercel.app/"&gt;Click Here ..&lt;/a&gt;&lt;/p&gt;<br/>
                        &lt;p&gt;Github Link : &lt;a href="https://github.com/1sisodiyaji/Calculator.git"&gt;Project link&lt;/a&gt;&lt;/p&gt;<br/>
        
                   &lt;/li&gt;<br/>
                &lt;/ul&gt;<br/>
                &lt;/section&gt;<br/>
            &lt;/div&gt;<br/>
        &lt;/body&gt;<br/>
    &lt;/html&gt;<br/>
    </code>
</pre>

                    </div>


                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/AssignmentProject" className="btn bg-dark text-warning text-capitalize">Assingment page <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/ProductCatalog" className="btn bg-dark text-warning text-capitalize">Product Catalog <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/youtubeBasedProject" className="btn bg-dark text-warning text-capitalize">Youtube Based  <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PortfolioHtml