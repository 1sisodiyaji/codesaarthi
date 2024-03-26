import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const AmazonClone = () => {
    return (
        <>
      <Helmet>
        <meta name="keywords" content="Amazon clone project , basic frontend of amazon clone , amazon clone , amazon ui clone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Amazon-clone" />
        <meta name="description" content="Amazon clone project based on simple ui and responsive , based on learning making people to move it further and learn the core . " />
        <title>Amazon Clone Projects | Codesaarthi</title>
        <meta property="og:title" content="Amazon Clone Projects | Codesaarthi" />
        <meta property="og:description" content="Amazon clone project based on simple ui and responsive , based on learning making people to move it further and learn the core . " />
        <meta property="og:image" content="https://codesaarthi.com/img/amazon1.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Amazon-clone" />
        <meta property="og:type" content="Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'> Project Title: Amazon Clone - (Frontend)</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        Ye project ek Amazon ki frontend ka clone hai, jise maine HTML, CSS, aur JavaScript ka use karke banaya hai. Isme aapko ek online shopping website ki tarah feel hoga.
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Good Design: Website ka design Amazon ki tarah hai, jisse users ko familiar feel hota hai aur wo aasani se navigation kar sakein.</li>
                        <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                        <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                        <li>Categories aur Search: Products ko alag-alag categories mein divide kiya gaya hai aur ek search bar diya gaya hai taaki users apne pasandeeda products ko jaldi se khoj sakein.</li>
                        <li>Responsive Design: Website mobile aur desktop dono platforms ke liye responsive hai, jisse users apne preferred device pe seamlessly access kar sakein.</li>
                        <li>Product Details: Har product ke saath detailed information aur pricing di gayi hai, taaki users apne purchase ke decisions ko informed taur par le sakein.
                        </li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/amazon1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="img/amazon2.jpg" alt="" className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li>  HTML: Page structure aur content ke liye.</li>
                        <li>   CSS: Design aur styling ke liye.</li>
                        <li> JavaScript: Interactive features aur user interface ke liye.</li>
                    </ul>

                    <h6 className='textColor'> Kaise Shuru Karein:</h6>

                    <ol className='text-light'>
                        <li>Clone karein: GitHub se project ko clone karein. <br />
                            ```bash <br />
                            https://github.com/1sisodiyaji/Amazon-Clone.git <br />
                            <Link to="https://github.com/1sisodiyaji/Amazon-Clone.git" target='blank'>Click Here</Link>
                        </li>
                        <li>Installation: Kisi bhi specific server ya build process ki zarurat nahi hai. Sirf clone karein aur local browser mein open karein.
                        </li>
                        <li> Launch Karein: Project directory mein jaake `index.html` file ko browser mein open karein.
                        </li>
                    </ol>


                    <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>
                    <div className="d-flex justify-content-between my-3 ">
                        <Link to="https://amazon-clone-indol-zeta.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i class="fi fi-sr-share-square ps-2"></i></Link>
                        <Link to="https://github.com/1sisodiyaji/Amazon-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i class="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
                    </div>

                    <p className='text-light'> Eiher you can go for codes from her ..</p>
                    <h6 className='text-warning'>Html Code :</h6>
                    <div className="container border rounded-8 p-3 text-light">
                        <pre>
                            <code>
                                &lt;header&gt;<br />
                                &lt;div class="navbar"&gt;<br />

                                &lt;div class="nav-logo border"&gt;<br />
                                &lt;div class="logo"&gt;&lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="nav-address border"&gt;<br />
                                &lt;p class="first"&gt; Deliver to &lt;/p&gt;<br />
                                &lt;div class="add-Icon"&gt;<br />
                                &lt;i class="fa-solid fa-location-dot"&gt;&lt;/i&gt;<br />
                                &lt;p class="second"&gt;India&lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="nav-Search"&gt;<br />
                                &lt;select class="search"&gt;<br />
                                &lt;option&gt;All&lt;/option&gt;<br />
                                &lt;/select&gt;<br />
                                &lt;input placeholder="Search Amazon " class="Search-input" /&gt;<br />
                                &lt;div class="Search-icon"&gt;<br />
                                &lt;i class="fa-solid fa-magnifying-glass"&gt;&lt;/i&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="nav-sign border"&gt;<br />
                                &lt;p&gt;&lt;span&gt;Hello , Sign in&lt;/span&gt;&lt;/p&gt;<br />
                                &lt;p class="nav-second"&gt;Accounts &amp; Lists&lt;/p&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="nav-returns border"&gt;<br />
                                &lt;p&gt;&lt;span&gt;Returns&lt;/span&gt;&lt;/p&gt;<br />
                                &lt;p class="nav-second"&gt; &amp; Orders&lt;/p&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="nav-Cart border"&gt;<br />
                                &lt;i class="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;<br />
                                Cart<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="panel"&gt;<br />

                                &lt;div class="panel-all"&gt;<br />
                                &lt;i class="fa-solid fa-cart-shopping"&gt;&lt;/i&gt;<br />
                                All<br />
                                &lt;/div&gt;<br />

                                &lt;div class="panel-ops"&gt;<br />
                                &lt;p&gt;Today's Deals&lt;/p&gt;<br />
                                &lt;p&gt;Customer Service&lt;/p&gt;<br />
                                &lt;p&gt;Registry&lt;/p&gt;<br />
                                &lt;p&gt;Gift Cards&lt;/p&gt;<br />
                                &lt;p&gt;Sell&lt;/p&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="panel-deals"&gt;<br />
                                Shop deals in Electronics<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/header&gt;<br />

                                &lt;div class="hero-section"&gt;<br />
                                &lt;div class="hero-msg " style="margin-bottom: 17vh;"&gt;<br />
                                &lt;div&gt;<br />
                                &lt;img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/MFD/Mar/PC/Deals-PC-3000-Unrec._CB580048821_.jpg"
                                alt="background of hero image" style="height: 50vh; width:100vw;" /&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="shop-section"&gt;<br />
                                &lt;div class=" box "&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Clothes&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box1_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class=" box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Health care&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box2_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class=" box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Furniture&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box3_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Electronics &lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box4_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="box "&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Make up Kit&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box5_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Pet Care&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box6_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />

                                &lt;div class="box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Tourism Trends&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box7_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;

                                &lt;div class="box"&gt;<br />
                                &lt;div class="box-content"&gt;<br />
                                &lt;h2&gt;Discover fashion Trends&lt;/h2&gt;<br />
                                &lt;div class="box-img" style="background-image: url('./Images/box8_image.jpg');"&gt;&lt;/div&gt;<br />
                                &lt;p&gt; see more &lt;/p&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;

                                &lt;footer&gt;<br />
                                &lt;div class="foot-panel1"&gt;<br />
                                Back to top<br />
                                &lt;/div&gt;

                                &lt;div class="foot-panel2"&gt;<br />
                                &lt;ul&gt;<br />
                                &lt;p&gt;get to know us&lt;/p&gt;<br />
                                &lt;a&gt;Carrers&lt;/a&gt;<br />
                                &lt;a&gt;Blog&lt;/a&gt;<br />
                                &lt;a&gt;About Amazon&lt;/a&gt;<br />
                                &lt;a&gt; Investor Relations&lt;/a&gt;<br />
                                &lt;a&gt;Amazon Devices&lt;/a&gt;<br />
                                &lt;a&gt;Amazon Science&lt;/a&gt;<br />
                                &lt;/ul&gt;<br />
                                &lt;ul&gt;<br />
                                &lt;p&gt;Make Money with us&lt;/p&gt;<br />
                                &lt;a&gt;sell products on Amazon&lt;/a&gt;<br />
                                &lt;a&gt;Sell on Amazon Business&lt;/a&gt;<br />
                                &lt;a&gt;Sell apps on Amazon&lt;/a&gt;<br />
                                &lt;a&gt; Become an Affiliates&lt;/a&gt;<br />
                                &lt;a&gt;Advertise Your products&lt;/a&gt;<br />
                                &lt;a&gt;Self-Publish with us&lt;/a&gt;<br />
                                &lt;a&gt;Host an Amazon Hub&lt;/a&gt;<br />
                                &lt;a&gt;&gt; See More Make Money With Us&lt;/a&gt;<br />
                                &lt;/ul&gt;<br />
                                &lt;ul&gt;<br />
                                &lt;p&gt;Amazon Payment Products&lt;/p&gt;<br />
                                &lt;a&gt;Amazon Business Card&lt;/a&gt;<br />
                                &lt;a&gt;Shop with Points&lt;/a&gt;<br />
                                &lt;a&gt;Reload Your balance&lt;/a&gt;<br />
                                &lt;a&gt; Amazon Currency Counter&lt;/a&gt;<br />
                                &lt;/ul&gt;<br />
                                &lt;ul&gt;<br />
                                &lt;p&gt;Let Us Help You&lt;/p&gt;<br />
                                &lt;a&gt;Amazon and COVID-19&lt;/a&gt;<br />
                                &lt;a&gt;Your Accounts&lt;/a&gt;<br />
                                &lt;a&gt;Your Orders &lt;/a&gt;<br />
                                &lt;a&gt; Shopping Rates &amp; policies&lt;/a&gt;<br />
                                &lt;a&gt;Return &amp; Replacemnt&lt;/a&gt;<br />
                                &lt;a&gt;Manage Your Content and Devices&lt;/a&gt;<br />
                                &lt;a&gt;Amazon Assistant&lt;/a&gt;<br />
                                &lt;a&gt;Help&lt;/a&gt;<br />
                                &lt;/ul&gt;<br />
                                &lt;/div&gt;

                                &lt;div class="foot-panel3"&gt;<br />
                                &lt;div class="logo"&gt;&lt;/div&gt;<br />
                                &lt;/div&gt;

                                &lt;div class="foot-panel4"&gt;<br />
                                &lt;div class="pages"&gt;<br />
                                &lt;a&gt;Condtions of Use&lt;/a&gt;<br />
                                &lt;a&gt;Privacy Notice&lt;/a&gt;<br />
                                &lt;a&gt;Yours Ads Privacy Choices&lt;/a&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div class="copyright"&gt;<br />
                                @ 1996-2023 , Amazon.com, Inc , or its affiliates<br />
                                &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;/footer&gt;
                            </code>
                        </pre>
                    </div>

                    <h6 className='text-warning my-4'>Css Code :</h6>
                    <div class="container border rounded-8 p-3 my-4 text-light">
                        <pre>
                            <code>
                                {`
            *{
                margin: 0%;
                font-family: Arial;
                border: border-box;
            }
            .navbar{
                height: 60px;
                background-color: #0f1111;
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }
            .nav-logo{
                height: 50px;
                width: 100px;
            }
            .logo{
                background-image: url("/Images/amazon_logo.png");
                background-size: cover;
                height: 50px;
                width: 100%;
            }
            .border{
                border:1.5px solid transparent;
            }
            .border:hover{
                border:1.5px solid white
            }
            .first{
                color: #ccc;
                font-size: 0.85 em;
                margin-left: 15px;
            }
            .second{
                color: white;
                font: size 1em;
                margin-left: 3px;
            }
            .add-Icon{
                display: flex;
                align-items: center;
            }
            .nav-Search{
                display: flex;
                justify-content: space-evenly;
                background-color: pink;
                width: 620px;
                height: 40px;
                border-radius: 4px;
            }
            .search{
                background-color: #f3f3f3;
                width: 50px;
                text-align: center;
                border-top-left-radius: 4px;
                border-bottom-left-radius:4px ;
                border: none;
            }
            .Search-input{
                width: 100%;
                font-size: 1rem;
                border: none;
            }
            .Search-icon{
                width: 45px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                background-color: #febd68;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                color: #0f1111;
            }
            .nav-Search:hover{
                border: 2px solid orange;
            }
            span{
                font-size:0.7rem;
            }
            .nav-second{
                font-size: 0.85rem;
                font-weight: 700;
            }
            .nav-Cart i{
                font-size: 30px;
            }
            .nav-Cart{
                font-size: 0.85rem;
                font-weight: 700;
            }
            .panel{
                height:40px;
                background-color: #222f3d;
                display: flex;
                color: white;
                align-items: center;
                justify-content: space-evenly;
            }
            .panel-ops p{
                display: inline;
                margin-left: 15px;
            }
            .panel-ops{
                width:70%;
                font-size:0.85rem;
            }
            .panel-deals{
                font-size: 0.9rem;
                font-weight: 700;
            }
            .hero-section{
                background-image: url("/Images/hero_image.jpg");
                background-size: cover;
                height: 350px;
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
            .hero-msg{
                background-color: white;
                color: black;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.85rem;
                width: 80%;
                margin-bottom: 25px;
            }
            .hero-msg a{
                color:#007185;
            }
            .shop-section{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                background-color: #e2e7e6;
            }
            .box{
                height: 400px;
                width: 23%;
                background-color: white;
                padding: 20px 0px 15px;
                margin-top:15px;
            }
            .box-img{
                height:300px;
                background-size: cover;
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
            .box-content{
                margin-left: 1rem;
                margin-right: 1rem;
            }
            .box-content p{
                color:#007185;
            }
            footer{
                margin-top: 15px;
            }
            .foot-panel1{
                background-color: #37475a;
                color:white ;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.85rem;
            }
            .foot-panel2{
                background-color: #222f3d;
                color: white;
                height: 300px;
                display: flex;
                justify-content: space-evenly;
            }
            ul{
                margin-top: 20px;
            }
            ul a{
                display: block;
                font-size: 0.8rem;
                margin-top: 10px;
                color: #dddddddd;
            }
            .foot-panel3{
                background-color: #222f3d;
                color: white;
                border-top: 0.5px solid white;
                height: 70px;
                justify-content: center;
                align-items: center;
            }
            .logo{
                background-image: url("/Images/amazon_logo.png");
                background-size: cover;
                height: 50px;
                width: 100px;
                margin-left: 30%;
            }
            .foot-panel4{
                background-color: #0f1111;
                color: white;
                height: 80px;
                font-size: 0.7rem;
                text-align: center;
            }

            .pages{
                padding-top: 25px;
            }

            .copyright{
                padding-top: 5px;
            }
            `}
                            </code>
                        </pre>
                    </div>

                    <h6 className='textColor'>Images Were uploaded in Github :-</h6>
                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to ="/RazorPay" className="btn bg-dark text-warning text-capitalize">Razor pay <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Discord" className="btn bg-dark text-warning text-capitalize">Discord <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Spotify-Clone" className="btn bg-dark text-warning text-capitalize">Spotify <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AmazonClone