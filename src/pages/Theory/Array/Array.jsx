import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import { Helmet } from 'react-helmet';
import NewsApi from '../../../component/NewsApi';
import { Link } from 'react-router-dom';

const Array = () => {
    let index = 0;
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);

        window.speechSynthesis.onvoiceschanged = () => {
            const updatedVoices = window.speechSynthesis.getVoices();
            setVoices(updatedVoices);
        };
        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
            speechSynthesis.cancel();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const speak = () => {
        const elementsToRead = document.querySelectorAll('.listen');
        const combinedContent = [...elementsToRead].map(element => element.textContent).join(' ');

        // Cancel the previous speech synthesis instance
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(combinedContent);

        // Set the desired voice
        utterance.voice = selectedVoice;

        // Event listener for when speech starts
        utterance.onstart = () => {
            setIsSpeaking(true);
            index = 0; // Initialize index when speech starts
        };

        // Event listener for when speech ends
        utterance.onend = () => {
            setIsSpeaking(false);
            elementsToRead.forEach(element => element.classList.remove('highlight'));
        };

        // Event listener for when speech is paused
        utterance.onpause = () => {
            setIsSpeaking(false);
            elementsToRead.forEach(element => element.classList.remove('highlight'));
            index = 0; // Reset index when speech is paused
        };
        utterance.onboundary = (event) => {
            elementsToRead.forEach(element => element.classList.remove('highlight'));

            let charIndex = event.charIndex;

            for (let i = 0; i < elementsToRead.length; i++) {
                const element = elementsToRead[i];
                const textLength = element.textContent.length;

                if (charIndex < textLength) {
                    element.classList.add('highlight');
                    break;
                }

                charIndex -= textLength;
            }
        };


        utterance.text = combinedContent;

        speechSynthesis.speak(utterance);
    };

    const pause = () => {
        speechSynthesis.pause();
        setIsSpeaking(false);
    };

    const handleVoiceChange = (event) => {
        const selectedVoiceName = event.target.value;
        const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
        setSelectedVoice(selectedVoice);
    };

    const handleCopyClick = () => {
        const codeElement = document.getElementById('codeContent');
        const range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();
    };

    const handleCopyClick2 = () => {
        const codeElement = document.getElementById('codeContent2');
        const range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();
    };

    const handleCopyClick3 = () => {
        const codeElement = document.getElementById('codeContent3');
        const range = document.createRange();
        range.selectNode(codeElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();
    };

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Learn Array, Array basics, Array tutorials, Array examples, Array practice questions, Start learning Array" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/array" />
                <meta name="description" content="Explore Array in easy words with examples and practice questions. Learn Array basics step by step on DSA Playlist." />
                <title>Learn Arrays: Array Basics, Tutorials, and Practice Questions | DSA Playlist</title>
                <meta property="og:title" content="Arrays | DSA playlist" />
                <meta property="og:description" content="Explore Array in easy words with examples and practice questions. Learn Array basics step by step on DSA Playlist." />
                <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
                <meta property="og:url" content="https://codesaarthi.com/array" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="row g-0 pt-lg-0 mt-lg-0 mt-1  pt-5  design" style={{ backgroundColor: '#031A33',overflowX:'hidden' }}>
                <div className="col-2 d-lg-block d-none"><SideTheory /></div>

                <div className={`col-lg-2 col-12  d-lg-none d-block `}
                    style={{ backgroundColor: '#031A33', zIndex: '1' }}>
                    <div className="row w-100 position-fixed " >
                        <div className="col-6 ps-2" style={{ backgroundColor: '#031A33' }}><SideTheory /></div>
                        <div className="col-6">
                            <div className="row " style={{ backgroundColor: '#031A33' }}>
                                <div className="col-4 text-center">
                                    {!isSpeaking ?
                                        <>
                                            <div className=" btn btn-sm shadow-0 rounded-8 border border-warning" onClick={speak}>
                                                <i className="fi fi-sr-volume text-success"></i>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="btn btn-sm shadow-0 rounded-8 border border-warning" onClick={pause}>
                                                <i className="fi fi-rs-pause-circle text-success" style={{ fontSize: '1rem' }}></i>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="col-8 ">
                                    <select onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.name : ''} className=' ms-4' style={{
                                        color: '#FFE164',
                                        width:'26vw',
                                        backgroundColor: '#031A33'
                                    }}>
                                        {voices.map((voice, index) => (
                                            <option key={index} value={voice.name}>
                                                {voice.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7  col-12">
                    <div className="conatiner-fluid design p-1  py-4">
                        <div className="row g-0">
                            <div className="col-lg-8 col-12">
                                <h2 style={{ color: '#FFE164' }} className='listen'> Understanding Arrays in Data Structures</h2>
                            </div>
                            <div className="col-4 d-lg-block d-none">
                                <div className="row g-0">
                                    <div className="col-4 text-center">
                                        {!isSpeaking ?
                                            <>
                                                <div className=" btn btn-sm shadow-0 rounded-8 border border-warning" onClick={speak}>
                                                    <i className="fi fi-sr-volume text-success"></i>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="btn btn-sm shadow-0 rounded-8 border border-warning" onClick={pause}>
                                                    <i className="fi fi-rs-pause-circle text-success" style={{ fontSize: '1rem' }}></i>
                                                </div>
                                            </>
                                        }
                                    </div>
                                    <div className="col-8">
                                        <select onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.name : ''} className='w-75 ms-4' style={{
                                            color: '#FFE164',
                                            backgroundColor: '#031A33'
                                        }}>
                                            {voices.map((voice, index) => (
                                                <option key={index} value={voice.name}>
                                                    {voice.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <h3 className='text-light listen'>Introduction:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Data structures ke duniya mein, ek array ek important concept hai jo data ko fundamental aur efficient taur par sambhalne mein ek important role nibhata hai. Ek array ek prakar ke element ka ek group hai, jinme har ek ko ek index ya key ke dvara pahchan kiya jata hai.
                            <br />
                            <span className='highlight'> Array is a collection of elements of the same type. and the memory is allocated contigious in storage .</span>
                        </p>

                        <h3 className='text-light listen'>Definition:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Ek array , ek aisa data structure hai jo ek hi prakar ke element ka group rakh sakta hai. Each Element ko ek unique index milta hai, jo ki Zero (0)  se shuru hota hai, jo array mein uske place ko dikhata hai.
                        </p>

                        <h2 style={{ color: '#FFE164' }} className='listen'>Key Characteristics:</h2>

                        <h3 className='text-light listen'>Fixed Size:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Array ka ek fixed size hota hai, matlab hai ki aapko array ka size istemal karne se pahle declare karna hoga.
                            Size Pure Operation me fixed rahta hai. <br />
                            example:- in C language:<code> int arr[5] = [0,1,2,3,4]</code> <br />

                            <span className='highlight'> Note: - We can define the length of array as maximum in two conditions as inside int [ ] = 10<sup>6</sup> but when we declare it globally it could be 10<sup>7</sup></span>
                        </p>

                        <h3 className='text-light listen'>Homogeneous Elements:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Ek array ke sabhi element ek hi data type ke hone chahiye (Example ke liye, int, char, etc).
                            it Simply means that <span className='text-warning'>data type</span>  must be <span className='text-warning'> same </span>  of all elements in the array.
                        </p>

                        <h3 className='text-light listen'>Indexing :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Array ke element unke index ka use karke  kiye jate hain.
                            Index zero se shuru hota hai aur array ke size se kam ke index tak jata hai 1 jaise . <br />
                            <code> int arr[5] = [0,1,2,3,4]</code> <br />
                            isme Array ka size 5 hai but element ka indexing 0 is krne ke baad 4 tak hi gya so, <br />
                            <code className='highlight'>index = ArraySize - 1.</code> <br />

                            Advantages of Arrays:
                        </p>

                        <h3 className='text-light listen'>Random Access :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Arrays kisi bhi element ko uske index ka istemal karke seedhe value de deta hai through index .
                            Isse data ko tezi se paane aur change karne mein madad milti hai. <br />
                            <code> int arr[3] = [0,1,2,3,4]</code> <br />
                            <span className='text-success'>value</span> = 3
                        </p>

                        <h3 className='text-light listen'>Memory Efficiency :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Arrays memory-efficient hote hain kyun ki ve element ko ek ke sath agla  milte hain jisse ki <span className='highlight'>contigiuos memory allocation </span>  bhi kehte h .
                        </p>

                        <h3 className='text-light listen'>Ease of Implementation :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Arrays ko lagane mein aasani hoti hai aur ise different programming language mein different type se istemal kiya jata hai.
                        </p>

                        <h2 style={{ color: '#FFE164' }} className='listen'>Understanding the Code:</h2>

                        <div className="row g-4">

                            <div className="col-lg-4 col-12">
                                <div className="card bg-dark text-warning">
                                    <div className="row ">
                                        <div className="col-6 text-start">
                                            <div className="card-title text-light ms-2"> C++</div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div className="card-title pe-2 text-success btn shadow-0 text-capitalize" onClick={handleCopyClick}>copy</div>
                                        </div>
                                    </div>
                                    <small className='p-1' style={{ fontSize: '0.6rem' }}>
                                        <pre id='codeContent'>
                                            {`
#include <iostream>
#include <vector>

int main() {
    // C++ mein array banane ka example
    std::vector<int> myArray = {10, 20, 30, 40, 50};

    // Index ka istemal karke tatva tak pahunchana
    std::cout << "Index 2 par tatva: " << myArray[2] << std::endl;

    // Ek tatva ko modify karna
    myArray[1] = 25;
    std::cout << "Modify kiya gaya array: ";
    for (int element : myArray) {
        std::cout << element << " ";
    }
    std::cout << std::endl;

    // Array ki length nikalna
    int arrayLength = myArray.size();
    std::cout << "Array ki length: " << arrayLength << std::endl;

    return 0;
}

                                        `}
                                        </pre>
                                    </small>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div className="card bg-dark text-warning">
                                    <div className="row ">
                                        <div className="col-6 text-start">
                                            <div className="card-title text-light ms-2">java</div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div className="card-title pe-2 text-success btn shadow-0 text-capitalize" onClick={handleCopyClick2}>copy</div>
                                        </div>
                                    </div>
                                    <small className='p-1' style={{ fontSize: '0.6rem' }}>
                                        <pre id="codeContent2">
                                            {`
public class ArrayExample {
    public static void main(String[] args) {
        // Java mein array banane ka example
        int[] myArray = {10, 20, 30, 40, 50};

        // Index ka use karke element tak pahunchana
        System.out.println("Index 2 par tatva: " + myArray[2]);

        // Ek element ko modify karna
        myArray[1] = 25;
        System.out.print("Modify kiya gaya array: ");
        for (int element : myArray) {
            System.out.print(element + " ");
        }
        System.out.println();

        // Array ki length nikalna
        int arrayLength = myArray.length;
        System.out.println("Array ki length: " + arrayLength);
    }
}

                                        `}
                                        </pre>
                                    </small>
                                </div>
                            </div>

                            <div className="col-lg-4 col-12">
                                <div className="card bg-dark text-warning">
                                    <div className="row ">
                                        <div className="col-6 text-start">
                                            <div className="card-title text-light ms-2"> javaScript</div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div className="card-title pe-2 text-success btn shadow-0 text-capitalize" onClick={handleCopyClick3}>copy</div>
                                        </div>
                                    </div>
                                    <small className='p-1' style={{ fontSize: '0.6rem' }}>
                                        <pre id="codeContent3">
                                            {`
const ArrayExample = () => {
  const myArray = [10, 20, 30, 40, 50];

  // Indexing to access an element
  const elementAtIndex2 = myArray[2];
  console.log("Index 2 par tatva:", elementAtIndex2); // Output: 30

  // Modifying an element
  myArray[1] = 25;
  console.log("Modify kiya gaya array:", myArray); // Output: [10, 25, 30, 40, 50]

  // Getting the array length
  const arrayLength = myArray.length;
  console.log("Array ki length:", arrayLength); // Output: 5

  return null; // You can return JSX if needed
};



                                        `}
                                        </pre>
                                    </small>
                                </div>
                            </div>

                        </div>

                        <h2 className='text-danger listen'>Disadvantages</h2>

                        <h3 className='text-light listen'>Fixed Size:</h3>
                        <p className='listen highlight'>Fixed size se, agar array pura end tak use  nahin hota hai, to yah unused memory loss ka karan ban sakta hai. </p>

                        <h3 className='text-light listen'> Insertion aur Deletion:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>Insertion aur deletion operations krne me dikkat ho sakti hain kyun ki inme element ko position shifting karne ki Zarrorat hoti hai. </p>


                        <h3 style={{ color: '#FFE164' }} className='listen'> Guru Mantra :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Arrays ek important purna data structure hain, jo element ke group ko store aur sambhalne ka ek systematic tareeka pradan karte hain. Unke characteristics aur operations ko samajhna, efficient programming ke liye important hai.
                        </p>

                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6 text-end pe-3"> <Link to="/transversing-of-array" className='btn border border-light text-warning' >Next </Link></div>
                        </div>
                    </div>
                </div>

                <div className="col-3 py-5 d-lg-block d-none">
                    <div className='my-3 tilt-effect'>
                   <h5 className='text-warning'>Practise Question</h5> 
                   <Link to ="/ArrayProblems" className="card p-3 text-warning" style={{backgroundColor:'#000435' , boxShadow:'5px 5px 20px #3393df'}}>
                    <h5> Arrays Practise Questions <i class="fi fi-ss-portal-enter ps-2"></i></h5>
                   </Link>
                   </div>
                   <div className='my-5'>
                    <NewsApi />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Array