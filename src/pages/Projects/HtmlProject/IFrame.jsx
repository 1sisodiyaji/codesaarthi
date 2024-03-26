import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const IFrame = () => {
    return (
        <>
 <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="basic html project , top 5 easy html projects, learn html with projects., youtube tags , IFrame based projects ." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/youtubeBasedProject" />
                <meta name="description" content="basically these page is a youtube short clone to use their tags and make more practise of different media tasg in html." />
                <title>Youtube based page in html | CodeSaarthi</title>
                <meta property="og:title" content="Youtube based page in html | CodeSaarthi" />
                <meta property="og:description" content="basically these page is a youtube short clone to use their tags and make more practise of different media tasg in html." />
                <meta property="og:image" content="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
                <meta property="og:url" content="https://codesaarthi.com/youtubeBasedProject" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'>Project Title: Youtube Based Project</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        in these project we are going to add iframe , media such as image , audio all that in htese project .
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Using Tags to practise the basic html code.</li>
                        <li>Practising more to use media tags in code. </li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/Media1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="img/Media2.jpg" alt="" className="img-fluid" /></div>
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
    &lt;title&gt;Document&lt;/title&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
    &lt;header&gt;<br/>
        &lt;h1&gt;Welcome to Code arena&lt;/h1&gt;<br/>
    &lt;/header&gt;<br/>
    &lt;table&gt;<br/>
        &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;img src="Ram-Siyaram.jpg" alt="Ram siyaram images" width=" 200px" loading="lazy"&gt;<br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;nav&gt;<br/>
                    &lt;ul&gt;<br/>
                        &lt;li&gt;<br/>
                            &lt;a href="#roadmapSection"&gt; Roadmap Videos&lt;/a&gt;<br/>
                        &lt;/li&gt;<br/>
                        &lt;li&gt;<br/>
                            &lt;a href="#operatingSection" &gt;Operating System Videos&lt;/a&gt;<br/>
                        &lt;/li&gt;<br/>
                        &lt;li&gt;<br/>
                            &lt;a href="#DbmsSection" &gt;DBMS Videos&lt;/a&gt;<br/>
                        &lt;/li&gt;<br/>
                        &lt;li&gt;<br/>
                            &lt;a href="#DsaSection" &gt;DSA Videos&lt;/a&gt;<br/>
                        &lt;/li&gt;<br/>
                        &lt;li&gt;<br/>
                            &lt;a href="#WebDevelopment" &gt;Web Development Videos&lt;/a&gt;<br/>
                        &lt;/li&gt;<br/>
                    &lt;/ul&gt;<br/>
                &lt;/nav&gt;<br/>
            &lt;/td&gt;<br/>
        &lt;/tr&gt;<br/>
    &lt;/table&gt;<br/>
    &lt;div&gt;<br/>
        &lt;h2&gt;About Codehelp&lt;/h2&gt;<br/>
        &lt;p&gt;<br/>
            Codehelp mission is such a good person or we can say a contributor<br/>
            who wants to make better education quality for students<br/>
            freely. These type of work i totally support May God bless Him !.<br/>
        &lt;/p&gt;<br/>
    &lt;/div&gt;<br/>
    &lt;div&gt;<br/>
        &lt;h2&gt;Additional Media&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
            &lt;tr&gt;<br/>
                &lt;td&gt;<br/>
                    &lt;audio src="Ram Siyaram.mp3" controls&gt;&lt;/audio&gt;<br/>
                &lt;/td&gt;<br/>
                &lt;td&gt;<br/>
                    &lt;video src="Video.mp4" height ="400px" width = "200px" controls&gt;&lt;/video&gt;<br/>
                &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
    &lt;/div&gt;<br/>
     &lt;div&gt;<br/>
        &lt;h2 id = "roadmapSection"&gt;Roadmap Videos&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
           &lt;tr&gt;<br/>
             &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/VY6003vijLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen &gt;&lt;/iframe&gt;<br/>
             &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/mlxoB3wI9eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/mlxoB3wI9eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;/tr&gt;<br/>
           &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe  src="https://www.youtube.com/embed/VaMWsm6CFss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe  src="https://www.youtube.com/embed/07QCAJYolaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/PM8gczl7DVw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
            &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
     &lt;/div&gt;<br/>
     &lt;div&gt;<br/>
        &lt;h2 id = "operatingSection"&gt;Operating System Videos&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
           &lt;tr&gt;<br/>
             &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/a1l4MceYHaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>    
            &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/LBqNWOqSzBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe  src="https://www.youtube.com/embed/iAnEvdCya6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;/tr&gt;<br/>
           &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe  src="https://www.youtube.com/embed/kHMXP_i6zew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>  
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/lo8Z61qCDqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>  
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/nAr2sLiLDWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>  
            &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
     &lt;/div&gt;<br/>
     &lt;div&gt;<br/>
        &lt;h2 id = "DbmsSection"&gt;DBMS Videos&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
           &lt;tr&gt;<br/>
             &lt;td&gt;<br/>
                &lt;iframe  src="https://www.youtube.com/embed/TYo_CUnIWP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
            &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/mYI2nopkQJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/kMHJhhIx5k4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;/tr&gt;<br/>
           &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/8_dMPX6_qiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;   <br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe  src="https://www.youtube.com/embed/w-VfTUvxETQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/kUk8PgORTzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;    <br/>
            &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
     &lt;/div&gt;<br/>
     &lt;div&gt;<br/>
        &lt;h2 id = "DsaSection"&gt;DSA Videos&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
           &lt;tr&gt;<br/>
             &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/WQoB2z67hvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;    <br/>
            &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
               &lt;iframe src="https://www.youtube.com/embed/t6zLJOCVqD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;   <br/>
           &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/WR31ByTzAVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;<br/>
           &lt;/td&gt;<br/>
           &lt;/tr&gt;<br/>
           &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/dr-pLeJBr38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;    <br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/yjdQHb2elqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;   <br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/bWrsk0QizEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;   <br/>
            &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
     &lt;/div&gt;<br/>
     &lt;div&gt;<br/>
        &lt;h2 id = "WebDevelopment"&gt;Web Development Videos&lt;/h2&gt;<br/>
        &lt;table&gt;<br/>
           &lt;tr&gt;<br/>
             &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/Vi9bxu-M-ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;   <br/>
            &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/ofHYRdWQESo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt; <br/>
           &lt;/td&gt;<br/>
           &lt;td&gt;<br/>
            &lt;iframe src="https://www.youtube.com/embed/aRUhd1Wd3Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt; <br/>
           &lt;/td&gt;<br/>
           &lt;/tr&gt;<br/>
           &lt;tr&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/0gU-qrq3gjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;  <br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/KdWPGqT5GwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;  <br/>
            &lt;/td&gt;<br/>
            &lt;td&gt;<br/>
                &lt;iframe src="https://www.youtube.com/embed/VjCHupej12U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen&gt;&lt;/iframe&gt;    <br/>
            &lt;/td&gt;<br/>
            &lt;/tr&gt;<br/>
        &lt;/table&gt;<br/>
     &lt;/div&gt;<br/>
    &lt;footer&gt;<br/>
        @2023 codehelp. All rights reserved.<br/>
    &lt;/footer&gt;<br/>
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
                            <Link to="/PortfolioHtml" className="btn bg-dark text-warning text-capitalize">Portfolio <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/ProductCatalog" className="btn bg-dark text-warning text-capitalize">Product Catalog <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default IFrame