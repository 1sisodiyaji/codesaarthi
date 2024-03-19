import React, { useState, useEffect } from 'react';
import TextForm from '../../../component/Textarea';
import SideTheory from '../../../component/SideTheory';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NewsApi from '../../../component/NewsApi';
const ReverseOfArray = () => {
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
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Array reversal, Reversing arrays, Best practices for array reversal, Efficient array reverse, Optimal reversing techniques" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/reverse-of-array" />
                <meta name="description" content="Explore best practices for reversing arrays. Learn efficient techniques and optimal approaches for reversing arrays in programming. Enhance your programming skills on DSA Playlist." />
                <title> Reversing Arrays | DSA Playlist</title>
                <meta property="og:title" content="Best Practices for Reversing Arrays | DSA playlist" />
                <meta property="og:description" content="Explore best practices for reversing arrays. Learn efficient techniques and optimal approaches for reversing arrays in programming. Enhance your programming skills on DSA Playlist." />
                <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
                <meta property="og:url" content="https://codesaarthi.com/reverse-of-array" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="row g-0 pt-lg-0 mt-lg-0  pt-5 mt-1 design" style={{ backgroundColor: '#031A33' }}>

                <div className={`col-lg-2 col-12  d-lg-none d-block `}
                    style={{ zIndex: '1' }}>
                    <div className="row g-0 position-fixed " style={{ backgroundColor: '#031A33' }} >
                        <div className="col-6 ps-2"><SideTheory /></div>

                        <div className="col-6">
                            <div className="row g-0 ">
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
                </div>

                <div className="col-2 d-lg-block d-none"><SideTheory /></div>

                <div className="col-lg-7 col-12">
                    <div className="container-fluid design p-1 py-lg-5 ">
                        <div className="row g-0">
                            <div className="col-lg-8 col-12">
                                <h2 style={{ color: '#FFE164' }} className='listen'> Reverse in Array  </h2>
                            </div>
                            <div className="col-4 d-lg-block d-none">
                                <div className="row g-0 ">
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

                        <h3 className='text-light pt-2 listen'> Reverse Operation Means:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen highlight'>
                        Array reversal means rearranging of the original array in backward direction. </p>
                        
                        <p className='text-light listen'>For example an array is int arr[ ] = {`{1,2,3,4,5}`} if the transversal action will be perform then
                            it will iterate from 5 and Store them in a array again but the data will store in reverse manner as our desired output will come . <br />
                            We can perform these operation in many ways as listed below...</p>

                        <h3 className='text-light pt-2 listen'> Reversal Ways:</h3>
                      
                      <p className='listen text-light'>  This is a kind of reversal operation performed where the loop will be be from backward . this is a general practise most of time we are doing this method. <br />
                            <pre>
                                <code className='text-warning'>
                                    {`
int [] array = {1,2,3,4,5} ;
for(int i = array.length - 1 ; i > 0 ; i--) {
    system.out.println(array[i] + ' ');
}

 Output Will be :- 5,4,3,2,1
                                    `}
                                </code>
                            </pre>
                            </p>
                        <h3 className='text-light pt-2 listen'> Backward Loop:</h3>
                    
                        <p className='listen text-light'>
                        This is a kind of reversal operation performed where the loop will be be from backward . this is a general practise most of time we are doing this method. <br />
                        </p>   
                        <pre>
                                <code className='text-warning'>
                                    {`
int [] array = {12,24,39,44,58} ;
for(int i = array.length - 1 ; i > 0 ; i--) {
    system.out.println(array[i] + ' ');
}

 Output Will be :- 58,44,39,24,12
                                    `}
                                </code>
                            </pre>

                        <h3 className='text-light pt-2 listen'>Swapping Elements :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            In this technique basically er are going to swap the elements with each another in such a order so that
                            it could be arrange in a manner that first element could be greater . Sometime when we use <span className='highlight'> Two-Pointer-Approach</span>
                            We are goinf to use this one . As it is better that previous one in the sense that you don't need to transverse the whole array
                            it works on half of the elements . as it rediuce the time complexity of the program .

                        </p>
                        <pre>
                            <code className='text-warning'>
                                {`
int left = 0; // Pointer at the start of the array
int right = array.length - 1; // Pointer at the end of the array
                                        
// Swap elements using the two-pointer approach until they meet in the middle
while (left < right) {
// Swap elements at left and right pointers
    int temp = array[left];
    array[left] = array[right];
    array[right] = temp;
                                                
    // Move the pointers towards the middle
    left++;
    right--;
  }
}
`}
                            </code>
                        </pre>
                        <h3 className='text-light pt-2 listen'>Pivot Point:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            In arrays with an odd number of elements, there exists a central element that remains fixed in its position when the array is rotated or rearranged. This central element is known as the pivot. The elements on both sides of the pivot smoothly change their positions.
                        </p>
                        <pre>
                            <code className='text-warning'>
                                {`
public class PivotPoint {
public static int findPivot(int[] arr) {
int n = arr.length;
                                    
// Iterate through the array to find the pivot point
for (int i = 0; i < n - 1; i++) {
if (arr[i] > arr[i + 1]) {
return i + 1; // Found the pivot point
   }
}
                                    
// If no pivot point is found, return -1
return -1;
 }
                                
public static void main(String[] args) {
int[] arr1 = {5, 6, 7, 8, 9, 1, 2, 3, 4};
int[] arr2 = {1, 2, 3, 4, 5};
                                    
int pivot1 = findPivot(arr1);
int pivot2 = findPivot(arr2);
                                    
System.out.println("Pivot point in arr1: " + pivot1);
System.out.println("Pivot point in arr2: " + pivot2);
   }
 }

Pivot point in arr1: 5
Pivot point in arr2: -1


                            `}
                            </code>
                        </pre>

                        <h3 className='text-light pt-2 listen'>Mirror Image View:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            Actually at the end of array reveresal we get the mirror image of original array . This is like an opposite of Real Array.
                        </p>
                        <h3 className='text-light listen'>Practise Question for reversal Array :</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            
                         </p>
                        <h5 className='text-danger listen'>Common Mistakes:</h5>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Some Common Mistakes occured When An array reversal or any coder do operations With array that , Array index pointing . The major times coder gets an
                        error of <span className='highlight'>Array index out of bond</span> this error majorly comes due to indexing out of range. 
                        </p>

                        <h3 className='text-light pt-2 listen'>Real-world Application:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            As reading everything feels useless until we didn't know where these one is going to be in use . So here we clear that array is bascically used 
                            in pattern recognization and image processing , data algporithms as  this one is the base for stack and qeues.
                        </p>
                        <h3 className='text-light pt-2 listen'>Developers Knowledge:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                            in the purpose of Development Array reversal is used as to data retrieval and manipulation  , Searching and Sorting algorithms  , iteration and looping to showcase something on frontend we need to implement all these . 
                        </p>
                    </div>
                    <div className="row py-2 g-0">
                    <div className="col-6 text-start">
              <Link to = "/transversing-of-array" className='btn border text-capitalize text-warning'>Previous</Link>
              
            </div>
            <div className="col-6 text-end ps-2 ">
              <Link to = "/Pallindrome-in-Array" className='btn border text-warning text-capitalize'>Next</Link>
              
            </div>
          </div>
                </div>
                <div className="col-3 py-5 d-lg-block d-none">
                    <h2 style={{ color: '#FFE164' }}> Learn From Here :</h2>
                    <NewsApi/>
                </div>
            </div>
        </>
    )
}

export default ReverseOfArray;

