import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const AssignmentProject = () => {
    return (
       
            <>
<Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="basic html project , top 5 easy html projects, learn html with projects." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/AssignmentProject" />
                <meta name="description" content="It is a single page web app where  i tried to use maximum tags of html to create a assignment page simple and useful." />
                <title>Assignment page in html | CodeSaarthi</title>
                <meta property="og:title" content="Assignment page in html | CodeSaarthi" />
                <meta property="og:description" content="It is a single page web app where  i tried to use maximum tags of html to create a assignment page simple and useful." />
                <meta property="og:image" content="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
                <meta property="og:url" content="https://codesaarthi.com/AssignmentProject" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
                <div className="" style={{ backgroundColor: '#000000' }}>
                    <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                        <h5 className='textColor'> Project Title: Assignment page</h5>

                        <h6 className='textColor'>Description:</h6>
                        <p className='text-light'>
                            Ye Project ek simple assignment page ke liye h isme bss html ke tags ko use krke basically ek asiignment page bnaya h
                        </p>
                        <h6 className='textColor'>Key Features:</h6>

                        <ul className='text-light'>
                            <li>Using Tags to practise the basic html code.</li>
                        </ul>

                        <h6 className='textColor'>Screenshot:</h6>
                        <div className="row my-3">
                            <div className="col-6 "><img src="img/htmlProject1.jpg" alt="" className="img-fluid" /></div>
                            <div className="col-6"><img src="img/htmlProject2.jpg" alt="" className="img-fluid" /></div>
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
            &lt;title&gt;Questions&lt;/title&gt;<br/>
        &lt;/head&gt;<br/>
        &lt;body&gt;<br/>
            &lt;h2&gt;Assignment test&lt;/h2&gt;<br/>
            &lt;details&gt;<br/>
                &lt;summary&gt;Who is the current cm of Bihar ? &lt;/summary&gt;<br/>
                &lt;p&gt;Nitish Kumar&lt;/p&gt;<br/>
            &lt;/details&gt;<br/>
            &lt;details&gt;<br/>
                &lt;summary&gt;Who is the current pm of India ? &lt;/summary&gt;<br/>
                &lt;p&gt;Narendar Modi&lt;/p&gt;<br/>
            &lt;/details&gt;<br/>
            &lt;details&gt;<br/>
                &lt;summary&gt;Who is the current cm of odisha ? &lt;/summary&gt;<br/>
                &lt;p&gt;Naveen Pattnayak&lt;/p&gt;<br/>
            &lt;/details&gt;<br/>
            &lt;details&gt;<br/>
                &lt;summary&gt;Who is the current external affair minister ? &lt;/summary&gt;<br/>
                &lt;p&gt;S. jayshankar&lt;/p&gt;<br/>
            &lt;/details&gt;<br/>
            &lt;details&gt;<br/>
                &lt;summary&gt;Who is the current Governor of RBI ? &lt;/summary&gt;<br/>
                &lt;p&gt;Shashikant Das&lt;/p&gt;<br/>
            &lt;/details&gt;<br/>
            &lt;br&gt;<br/>
            &lt;h3&gt;Multiple choice Question&lt;/h3&gt;<br/>
            &lt;p&gt;<br/>
                 Q1. Which of the following is a renewable source of energy?&lt;br&gt;<br/>
                &lt;input type="radio" id="Coal" name="Question1" value="Coal"&gt;<br/>
                &lt;label for="Coal"&gt;Coal&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Natural gas" name="Question1" value="Natural gas"&gt;<br/>
                &lt;label for="Natural gas"&gt;Natural gas&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Solar power" name="Question1" value="Solar power"&gt;<br/>
                &lt;label for="Solar power"&gt;Solar power&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Petroleum" name="Question1" value="Petroleum"&gt;<br/>
                &lt;label for="Petroleum"&gt;Petroleum&lt;/label&gt;&lt;br&gt;&lt;br&gt;<br/>
                
                &lt;details&gt;<br/>
                    &lt;summary&gt;Answer&lt;/summary&gt;<br/>
                        &lt;p&gt;Solar Power&lt;/p&gt;<br/>
                    
                &lt;/details&gt;<br/>
            
                Q2. Which of the following is an example of a chemical change?&lt;br&gt;<br/>
                &lt;input type="radio" id=" Melting ice" name="Question1" value=" Melting ice"&gt;<br/>
                &lt;label for=" Melting ice"&gt; Melting ice&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Dissolving sugar in water" name="Question1" value="Dissolving sugar in water"&gt;<br/>
                &lt;label for="Dissolving sugar in water"&gt;Dissolving sugar in water&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id=" Rusting of iron" name="Question1" value=" Rusting of iron"&gt;<br/>
                &lt;label for=" Rusting of iron"&gt; Rusting of iron&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Breaking a glass" name="Question1" value="Breaking a glass"&gt;<br/>
                &lt;label for="Breaking a glass"&gt;&lt;/label&gt;Breaking a glass&lt;/label&gt;&lt;br&gt;&lt;br&gt;<br/>
            
                &lt;details&gt;<br/>
                    &lt;summary&gt;Answer&lt;/summary&gt;<br/>
                        &lt;p&gt;Rusting Of iron&lt;/p&gt;<br/>
                    
                &lt;/details&gt;<br/>
            
                Q3. Which of the following is a characteristic of a plant cell?&lt;br&gt;<br/>
                &lt;input type="radio" id="Cell wall and chloroplasts" name="Question1" value="Cell wall and chloroplasts"&gt;<br/>
                &lt;label for="Cell wall and chloroplasts"&gt;Cell wall and chloroplasts&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Cell membrane and mitochondria" name="Question1" value="Cell membrane and mitochondria"&gt;<br/>
                &lt;label for="Cell membrane and mitochondria"&gt;Cell membrane and mitochondria&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Nucleus and Golgi apparatus" name="Question1" value="Nucleus and Golgi apparatus"&gt;<br/>
                &lt;label for="Nucleus and Golgi apparatus"&gt;Nucleus and Golgi apparatus&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Vacuoles and ribosomes" name="Question1" value="Vacuoles and ribosomes"&gt;<br/>
                &lt;label for="Vacuoles and ribosomes"&gt;Vacuoles and ribosomes&lt;/label&gt;&lt;br&gt;&lt;br&gt;<br/>
            
                &lt;details&gt;<br/>
                    &lt;summary&gt;Answer &lt;/summary&gt;<br/>
                        &lt;p&gt;Cell wall and chloroplasts&lt;/p&gt;<br/>
                    
                &lt;/details&gt;<br/>
            
                Q4.What is the largest planet in our solar system?&lt;br&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="C Earth" name="Question1" value="C Earth"&gt;<br/>
                &lt;label for=" Earth"&gt;C Earth&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Venus" name="Question1" value="Venus"&gt;<br/>
                &lt;label for="Venus"&gt;Venus&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Mars" name="Question1" value="Mars"&gt;<br/>
                &lt;label for="Mars"&gt;Mars&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id=" Jupiter" name="Question1" value=" Jupiter"&gt;<br/>
                &lt;label for=" Jupiter"&gt; Jupiter&lt;/label&gt;&lt;br&gt;<br/>
            
                &lt;details&gt;<br/>
                    &lt;summary&gt;Answer&lt;/summary&gt;<br/>
                        &lt;p&gt;Jupiter&lt;/p&gt;<br/>
                    
                &lt;/details&gt;<br/>
            
                Q5. Who invented the telephone?&lt;br&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Thomas Edison" name="Question1" value="Thomas Edison"&gt;<br/>
                &lt;label for="Thomas Edison"&gt;Thomas Edison&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Alexander Graham Bell" name="Question1" value="Alexander Graham Bell"&gt;<br/>
                &lt;label for="Alexander Graham Bell"&gt;Alexander Graham Bell&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id="Albert Einstein" name="Question1" value="Albert Einstein"&gt;<br/>
                &lt;label for="Albert Einstein"&gt;Albert Einstein&lt;/label&gt;&lt;br&gt;<br/>
                &lt;input type="radio" id=" Isaac Newton" name="Question1" value=" Isaac Newton"&gt;<br/>
                &lt;label for=" Isaac Newton"&gt; Isaac Newton&lt;/label&gt;&lt;br&gt;<br/>
            
                &lt;details&gt;<br/>
                    &lt;summary&gt;Answer&lt;/summary&gt;<br/>
                        &lt;p&gt;Alexander Graham Bell&lt;/p&gt;<br/>
                    
                &lt;/details&gt;<br/>
            
                &lt;input type="submit"&gt;<br/>
            &lt;/p&gt;<br/>
        &lt;/body&gt;<br/>
    &lt;/html&gt;<br/>
    </code>
</pre>


                        </div>

                       
                        <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                        <div className="row">
                            <div className="col-4 text-center">
                                <Link to="/PortfolioHtml" className="btn bg-dark text-warning text-capitalize">Portfolio Project <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                            </div>
                            <div className="col-4 text-center">
                                <Link to="/youtubeBasedProject" className="btn bg-dark text-warning text-capitalize">Youtube Based project <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
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

export default AssignmentProject