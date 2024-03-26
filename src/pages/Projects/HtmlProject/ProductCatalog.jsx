import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const ProductCatalog = () => {
    return (
        <>
        <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="basic html project , top 5 easy html projects, learn html with projects., e-commerce web app in html , product page in html." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/ProductCatalog" />
                <meta name="description" content="It is a single page web app where an product of a item is listed in html. totally practise of html tags to create e-commerce product page" />
                <title>Product  page in html | CodeSaarthi</title>
                <meta property="og:title" content="Product  page in html | CodeSaarthi" />
                <meta property="og:description" content="It is a single page web app where an product of a item is listed in html. totally practise of html tags to create e-commerce product page" />
                <meta property="og:image" content="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
                <meta property="og:url" content="https://codesaarthi.com/ProductCatalog" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'> Project Title: Product Catalog</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                       this one is a simple project based on creating asingle of design based on html of product and bookmarks.
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Using Tags to practise the basic html code.</li>
                        <li>Creating bookmarks and lists tag</li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/ProductCatalog1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="img/ProductCatalog2.jpg" alt="" className="img-fluid" /></div>
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
            &lt;title&gt;Project 2&lt;/title&gt;<br/>
        &lt;/head&gt;<br/>
        &lt;body&gt;<br/>
        &lt;div&gt;<br/>
                &lt;h1&gt;Product Catalog&lt;/h1&gt;<br/>
            &lt;p&gt;<br/>
                &lt;a href="#Electronics"&gt;Electronics&lt;/a&gt;&lt;br&gt;
                &lt;a href="#Clothing"&gt;Clothing&lt;/a&gt;&lt;br&gt;
                &lt;a href="#Home"&gt;Home&lt;/a&gt;&lt;br&gt;
            &lt;/p&gt;<br/> 
            &lt;section&gt;<br/>
            &lt;h2 id="Electronics"&gt;Electronics&lt;/h2&gt;<br/>
            &lt;h4&gt;Laptop&lt;/h4&gt;<br/>
            &lt;p&gt;<br/>
                &lt;Strong&gt;Description :&lt;/Strong&gt; High - Performance with latest Processor and ample Storage &lt;br&gt;
                &lt;strong&gt;price :&lt;/strong&gt;5999.99 &lt;br&gt;
                &lt;strong&gt;Availability :&lt;/strong&gt; In Stock &lt;br&gt;
                &lt;img src="Laptop.png" alt="Laptop" width="200px"&gt;&lt;br&gt;
                &lt;detail &gt;<br/>
                &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt; XYZ electronics&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Screen Size : &lt;/strong&gt;15.6 inches&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;RAM : &lt;/strong&gt;8Gb&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Storage : &lt;/strong&gt; 512 GB SSD&lt;/li&gt;<br/>
                &lt;/ul&gt;<br/>
                &lt;/p&gt;<br/>
                &lt;/detail&gt;<br/>
            &lt;/p&gt;<br/>
            &lt;/section&gt;<br/>
            &lt;section&gt;<br/>
                &lt;h2&gt;Smartphone&lt;/h2&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;Strong&gt;Description :&lt;/Strong&gt; Features rich -amartphone with a high resolution display and advanced camera &lt;/br&gt;
                    &lt;strong&gt;price :&lt;/strong&gt; 5699.99 &lt;br&gt;
                    &lt;strong&gt;Availability :&lt;/strong&gt; Out of stock &lt;br&gt;
                    &lt;img src="Phone.jpg" alt="Smartphone image" width ="150px"&gt;&lt;br&gt;
                    &lt;detail &gt;<br/>
                        &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                        &lt;p&gt;<br/>
                            &lt;ul&gt;<br/>
                            &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt; ABC model&lt;/li&gt;<br/>
                            &lt;li&gt;&lt;strong&gt;Screen Size : &lt;/strong&gt;6.5 inches&lt;/li&gt;<br/>
                            &lt;li&gt;&lt;strong&gt;RAM : &lt;/strong&gt;6Gb&lt;/li&gt;<br/>
                            &lt;li&gt;&lt;strong&gt;Storage : &lt;/strong&gt; 128 GB &lt;/li&gt;
                            &lt;/ul&gt;<br/>
                        &lt;/p&gt;<br/>
                        &lt;/detail&gt;<br/>
                &lt;/p&gt;<br/>
            &lt;/section&gt;<br/>
            &lt;section&gt;<br/>
                &lt;h2 id="Clothing"&gt;Clothing&lt;/h2&gt;<br/>
                &lt;h3&gt;T-Shirt&lt;/h3&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;Strong&gt;Description :&lt;/Strong&gt;Casual and Comfortable t-shirt made from Premium Quaility cotton&lt;/br&gt;
                    &lt;strong&gt;price :&lt;/strong&gt; $59.99 &lt;br&gt;
                    &lt;strong&gt;Availability :&lt;/strong&gt;In stock &lt;br&gt;
                    &

lt;img src="T-shirt.jpg" alt="t-shirt image" width ="150px"&gt;&lt;br&gt;
                &lt;/p&gt;<br/>
                &lt;detail &gt;<br/>
                    &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                    &lt;p&gt;<br/>
                        &lt;ul&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt; Fashion Apparel&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Color: &lt;/strong&gt;ligth -Grey&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Size : &lt;/strong&gt;S,M,L&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Material : &lt;/strong&gt;  100 % cotton &lt;/li&gt;
                       &lt;/ul&gt;<br/>
                    &lt;/p&gt;<br/>
                    &lt;/detail&gt;<br/>
            &lt;/section&gt;<br/>
            &lt;section&gt;<br/>
                &lt;h4&gt;Jeans&lt;/h4&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;Strong&gt;Description :&lt;/Strong&gt;Casual jeans with a slim fit and stylist design&lt;/br&gt;
                    &lt;strong&gt;price :&lt;/strong&gt; $49.99 &lt;br&gt;
                    &lt;strong&gt;Availability :&lt;/strong&gt;In stock &lt;br&gt;
                    &lt;img src="Jeans.jpg" alt="Jeans image" width ="150px"&gt;&lt;br&gt;
                &lt;/p&gt;<br/>
                &lt;detail &gt;<br/>
                    &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                    &lt;p&gt;<br/>
                        &lt;ul&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt; DEnim Co.&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Color: &lt;/strong&gt;Grey&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Size : &lt;/strong&gt;30,32,34&lt;/li&gt;<br/>
                        &lt;li&gt;&lt;strong&gt;Material : &lt;/strong&gt;  Denim &lt;/li&gt;
                       &lt;/ul&gt;<br/>
                    &lt;/p&gt;<br/>
                    &lt;/detail&gt;<br/>
            &lt;/section&gt;<br/>
        &lt;br&gt;&lt;br&gt;<br/>
        &lt;section&gt;<br/>
            &lt;h2 id="Home"&gt;Home&lt;/h2&gt;<br/>
            &lt;h4&gt;Table&lt;/h4&gt;<br/>
            &lt;p&gt;<br/>
                &lt;Strong&gt;Description :&lt;/Strong&gt;Modern and Stylish table lamp to enhance home decor&lt;/br&gt;
                &lt;strong&gt;price :&lt;/strong&gt; $39.99 &lt;br&gt;
                &lt;strong&gt;Availability :&lt;/strong&gt;In stock &lt;br&gt;
                &lt;img src="Table.jpg" alt="Table " width ="150px"&gt;&lt;br&gt;
            &lt;/p&gt;<br/>
            &lt;detail &gt;<br/>
                &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt;  Home Essenstial&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Color: &lt;/strong&gt;White&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Size : &lt;/strong&gt;12 inches&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Material : &lt;/strong&gt; Creamic Metalr&lt;/li&gt;
                   &lt;/ul&gt;<br/>
                &lt;/p&gt;<br/>
                &lt;/detail&gt;<br/>
            &lt;h4&gt;Throw pillows&lt;/h4&gt;<br/>
            &lt;p&gt;<br/>
                &lt;Strong&gt;Description :&lt;/Strong&gt;Soft and Comfortable throw pillow for your living room to bedroom&lt;/br&gt;
                &lt;strong&gt;price :&lt;/strong&gt; $24.99 &lt;br&gt;
                &lt;strong&gt;Availability :&lt;/strong&gt;In stock &lt;br&gt;
                &lt;img src="Pillow.jpg" alt="Pillow image" width ="150px"&gt;&lt;br&gt;
            &lt;/p&gt;<br/>
            &lt;detail &gt;<br/>
                &lt;summary&gt;View Details&lt;/summary&gt;<br/>
                &lt;p&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Brand : &lt;/strong&gt; Cozt Home&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Color: &lt;/strong&gt;Grey&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Size : &lt;/strong&gt;18*18 inches&lt;/li&gt;<br/>
                    &lt;li&gt;&lt;strong&gt;Material : &lt;/strong&gt;  Cotton , Polyster&lt;/li&gt;
                   &lt;/ul&gt;<br/>
                &lt;/p&gt;<br/>
                &lt;/detail&gt;<br/>
        &lt;/section&gt;<br/>
    &lt;footer&gt; @  2023 product catalog , All rights reserved .&lt;/footer&gt;<br/>
   

 &lt;/div&gt;<br/>
    &lt;/body&gt;<br/>
    &lt;/html&gt;<br/>
    </code>
</pre>
```

                    </div>


                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/AssignmentProject" className="btn bg-dark text-warning text-capitalize">Assingment page <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/PortfolioHtml" className="btn bg-dark text-warning text-capitalize">Portfolio <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/youtubeBasedProject" className="btn bg-dark text-warning text-capitalize">Youtube based <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCatalog