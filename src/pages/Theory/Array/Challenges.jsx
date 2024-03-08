import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';

const Challenges = () => {
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
        <meta name="keywords" content="Array challenges, Learn Array challenges, Array coding exercises, Practice Array problems, Array challenges for beginners" />
        <title>Array Challenges: Coding Exercises for Learning Arrays | DSA Playlist</title>
        <meta name="description" content="Enhance your understanding of arrays with challenging coding exercises. Practice Array problems suitable for beginners and improve your problem-solving skills on DSA Playlist." />
        <meta property="og:description" content="Enhance your understanding of arrays with challenging coding exercises. Practice Array problems suitable for beginners and improve your problem-solving skills on DSA Playlist." />
        <link rel="canonical" href="https://codesaarthi.com/Challenges-And-Exercise" />
        <meta property="og:title" content="Array Challenges: Coding Exercises for Learning Arrays | DSA Playlist" />
        <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Challenges-And-Exercise" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="row g-0 pt-lg-0 mt-lg-0 F  pt-5 mt-2 design" style={{ backgroundColor: '#031A33' }}>
        <div className={`col-lg-2 col-12  d-lg-none d-block `}
          style={{ backgroundColor: '#031A33', zIndex: '1' }}>
          <div className="row g-0 position-fixed " >
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
          <div className="container-fluid design p-1 py-5">
            <div className="row g-0">
              <div className="col-lg-8 col-12">
                <h2 style={{ color: '#FFE164' }} className='listen'>
                  Challenges and Exercises with Arrays</h2>
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
            <h3 className='text-light pt-2 listen'> Exploring Challenges and Exercises with Arrays</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Take your skills to the next level by tackling challenges and exercises that involve working with arrays. These hands-on activities are designed to reinforce your understanding and mastery of array manipulation.
            </p>

            <h3 className='text-light pt-2 listen'> Challenge 1: Reverse an Array</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Write a function to reverse the elements of an array. Consider different approaches and optimize for both time and space complexity.
            </p>

            <h3 className='text-light pt-2 listen'> Challenge 2: Find the Maximum Subarray Sum</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Given an array of integers, find the contiguous subarray with the largest sum. Explore various algorithms and determine the most efficient solution.
            </p>

            <h3 className='text-light pt-2 listen'> Challenge 3: Rotate an Array</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Implement a function to rotate the elements of an array to the right by a specified number of steps. Handle edge cases and optimize for performance.
            </p>

            <h3 className='text-light pt-2 listen'> Challenge 4: Array Intersection</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Given two arrays, find the common elements between them. Explore different strategies, including hash maps and sorting, to achieve the desired outcome.
            </p>

            <h3 className='text-light pt-2 listen'> Challenge 5: Implement a Dynamic Array</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Build a dynamic array that automatically adjusts its size as elements are added or removed. Consider memory management and efficient resizing strategies.
            </p>

            <h3 className='text-light pt-2 listen'> Exercise 1: Array Manipulation</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Create a set of exercises that involve common array manipulations, such as filtering, mapping, and reducing. Apply these operations to solve real-world problems.
            </p>

            <h3 className='text-light pt-2 listen'> Exercise 2: Two-Dimensional Arrays</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Design exercises that focus on working with two-dimensional arrays. Practice accessing elements, performing operations, and solving algorithmic challenges.
            </p>

            <h3 className='pt-2 listen text-success'>Developers' Challenge:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Embrace these challenges and exercises to sharpen your array manipulation skills. The more you practice, the more confident and proficient you'll become in handling arrays effectively.
            </p>
          </div>
          <div class="d-lg-none d-block my-3">
            <h5 style={{ color: '#FFE164' }} className='ps-2 py-2'> Save your Notes Here :</h5>
            <TextForm />
          </div>
        </div>


        <div className="col-3 py-5 d-lg-block d-none">
          <h2 style={{ color: '#FFE164' }}> Learn From Here :</h2>
          <div className='p-2'>
            <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='my-3'>
            <h5 style={{ color: '#FFE164' }} className='ps-2 py-2'> Save your Notes Here :</h5>
            <TextForm />
          </div>

        </div>


      </div>

    </>
  )
}

export default Challenges