import React from 'react'
import { Link } from 'react-router-dom'

const AmazonClone = () => {
    return (
        <>
            <div className="conatiner-fluid design g-0 p-2">

                <h5> Project Title: Amazon Clone -(Frontend)</h5>

                <h6>Description:</h6>
                <p>
                    Ye project ek Amazon ki frontend ka clone hai, jise maine HTML, CSS, aur JavaScript ka use karke banaya hai. Isme aapko ek online shopping website ki tarah feel hoga.
                </p>
                <h6>Key Features:</h6>

                <ul>
                    <li>Good Design: Website ka design Amazon ki tarah hai, jisse users ko familiar feel hota hai aur wo aasani se navigation kar sakein.</li>
                    <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                    <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                    <li>Categories aur Search: Products ko alag-alag categories mein divide kiya gaya hai aur ek search bar diya gaya hai taaki users apne pasandeeda products ko jaldi se khoj sakein.</li>
                    <li>Responsive Design: Website mobile aur desktop dono platforms ke liye responsive hai, jisse users apne preferred device pe seamlessly access kar sakein.</li>
                    <li>Product Details: Har product ke saath detailed information aur pricing di gayi hai, taaki users apne purchase ke decisions ko informed taur par le sakein.
                    </li>
                </ul>

                <h6>Screenshot:</h6>
                <div className="row my-3">
                    <div className="col-6"><img src="img/amazon1.jpg" alt="" className="img-fluid" /></div>
                    <div className="col-6"><img src="img/amazon2.jpg" alt="" className="img-fluid" /></div>
                </div>



                <h6> Tech Stack:</h6>
                <ul>
                    <li> - HTML: Page structure aur content ke liye.</li>
                    <li>  - CSS: Design aur styling ke liye.</li>
                    <li>- JavaScript: Interactive features aur user interface ke liye.</li>
                </ul>

                <h6> Kaise Shuru Karein:</h6>

                <ol>
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



                Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.
                <div className="d-flex justify-content-between my-3 ">
                <Link to = "https://amazon-clone-indol-zeta.vercel.app/" target='blank'  className="btn border bg-dark text-warning rounded-6">View Demo Link <i class="fi fi-sr-share-square ps-2"></i></Link>
                <Link to="https://github.com/1sisodiyaji/Amazon-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i class="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
                </div>

                Eiher you can go for codes from her ..


            </div>
        </>
    )
}

export default AmazonClone