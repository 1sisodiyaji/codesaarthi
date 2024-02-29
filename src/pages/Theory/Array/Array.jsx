import React from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'

const Array = () => {
    return (
        <>
        <div className="row g-0" style={{ backgroundColor: '#031A33' }}>

            <div className="col-2 d-lg-block d-none"><SideTheory/></div>

            <div className="col-lg-7  col-12">
            <div className="conatiner-fluid design p-1  py-5">
                <h2 style={{ color: '#FFE164' }}> Understanding Arrays in Data Structures</h2>

                <h3 className='text-light'>Introduction:</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Data structures ke duniya mein, ek array ek important concept hai jo data ko fundamental aur efficient taur par sambhalne mein ek important role nibhata hai. Ek array ek prakar ke element ka ek group hai, jinme har ek ko ek index ya key ke dvara pahchan kiya jata hai.
                </p>

                <h3 className='text-light'>Definition:</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Ek array , ek aisa data structure hai jo ek hi prakar ke element ka samuh rakh sakta hai. Each Element ko ek unique index milta hai, jo ki Zero (0)  se shuru hota hai, jo array mein uske place ko darshata hai.
                </p>

                <div className='p-2 d-lg-none d-block'>
            <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

                <h2 style={{ color: '#FFE164' }}>Key Characteristics:</h2>

                <h3 className='text-light'>Fixed Size:</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Arrays ka ek fixed size hota hai, matlab hai ki aapko array ka size istemal karne se pahle declare karna hoga.
                    Size Pure Operation me fixed rahta hai.
                </p>

                <h3 className='text-light'>Homogeneous Elements:</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Ek array ke sabhi element ek hi data type ke hone chahiye (Example ke liye, int, char, etc).
                </p>

                <h3 className='text-light'>Indexing :</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Array ke element unke index ka istemal karke prapt kiye jate hain.
                    Index shunya se shuru hota hai aur array ke size se kam ke index tak jata hai.
                    Advantages of Arrays:
                </p>

                <h3 className='text-light'>Random Access :</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Arrays kisi bhi element ko uske index ka istemal karke seedhe value de deta hai theough index .
                    Isse data ko tezi se paane aur change karne mein madad milti hai.
                </p>

                <h3 className='text-light'>Memory Efficiency :</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Arrays memory-efficient hote hain kyun ki ve element ko ek ke sath agla  milte hain jisse ki contigiuos memory allocation bhi kehte h .
                </p>

                <h3 className='text-light'>Ease of Implementation :</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Arrays ko lagane mein aasani hoti hai aur ise different programming language mein different roop se istemal kiya jata hai.
                </p>

                <h2 style={{ color: '#FFE164' }}>Understanding the Code:</h2>
                <div className='p-1 '>
                    <pre>
                        <p className='text-light'> # Python mein array banane ka example</p>
                        <code className='text-warning'>my_array = [10, 20, 30, 40, 50]</code>
                        <p className='text-light'> # Index ka istemal karke tatva tak pahunchana</p>
                        <code className='text-warning'> print("Index 2 par tatva:", my_array[2]) </code>
                        <p className='text-success'># Output: 30</p>
                        <p className='text-light'> # Ek tatva ko modify karna </p>
                        <code className='text-warning'> my_array[1] = 25</code><br />
                        <code className='text-warning'> print("Modify kiya gaya array:", my_array) </code>
                        <p className='text-success'>  # Output: [10, 25, 30, 40, 50]</p>
                        <p className='text-light'># Array ki length nikalna</p>
                        <code className='text-warning'> array_length = len(my_array) </code>
                        <br />
                        <code className='text-warning'> print("Array ki length:", array_length)</code>
                        <p className='text-success'># Output: 5</p>
                    </pre>
                </div>

                <h2 className='text-danger'>Disadvantages</h2>

                <h3 className='text-light'>Fixed Size:</h3>
                <p style={{ color: 'whitesmoke' }}>Fixed size se, agar array poorn roop se upayog nahin hota hai, to yah unused memory loss ka karan ban sakta hai. </p>

                <h3 className='text-light'> Insertion aur Deletion:</h3>
                <p style={{ color: 'whitesmoke' }}>Insertion aur deletion operations krne mw dikkat ho sakti hain kyun ki inme element ko position shifting karne ki avashyakta hoti hai. </p>


                <h3 style={{ color: '#FFE164' }}> Guru Mantra :</h3>
                <p style={{ color: 'whitesmoke' }}>
                    Arrays ek important purna data structure hain, jo element ke samuh ko store aur sambhalne ka ek systematic tareeka pradan karte hain. Unke characteristics aur operations ko samajhna, efficient programming ke liye important hai.
                </p>

<div class="d-lg-none d-block my-3">
<h5 style={{color: '#FFE164'}} className='ps-2 py-2'> Save your Notes Here :</h5>
    <TextForm/>
    </div>
            </div>
            </div>

            <div className="col-3 py-5 d-lg-block d-none">
               <h2 style={{color: '#FFE164'}}> Learn From Here :</h2>
               <div className='p-2'>
            <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='my-3'>
            <h5 style={{color: '#FFE164'}} className='ps-2 py-2'> Save your Notes Here :</h5>
                <TextForm/>
            </div>

            </div>

           
        </div>
            
        </>
    )
}

export default Array