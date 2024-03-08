import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';

const CommonMistakes = () => {
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
    <meta name="keywords" content="Common mistakes in Array, Array errors, Array pitfalls, Array coding mistakes" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/Common-Mistakes-in-Array" />
    <meta name="description" content="Explore common mistakes in Array programming. Avoid pitfalls and errors in Array coding. Learn key concepts and improve your programming skills on DSA Playlist." />
    <title>Common Mistakes in Arrays | DSA Playlist</title>
    <meta property="og:title" content="Common Mistakes in Arrays | DSA playlist" />
    <meta property="og:description" content="Explore common mistakes in Array programming. Avoid pitfalls and errors in Array coding. Learn key concepts and improve your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/Common-Mistakes-in-Array" />
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
          Common Practices in Arrays</h2>
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
    <h3 className='text-light pt-2 listen'> Exploring Common Practices in Arrays</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Arrays are fundamental data structures in programming. Here, we'll explore common practices to follow when working with arrays, optimizing code readability, and ensuring efficient usage.
    </p>

    <h3 className='text-light pt-2 listen'> Array Declaration and Initialization:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Declare and initialize arrays with meaningful names. Clearly define the purpose of the array to enhance code understanding.
    </p>

    <h3 className='text-light pt-2 listen'> Consistent Coding Style:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Follow a consistent coding style for array-related operations. This includes indentation, spacing, and naming conventions for variables and functions.
    </p>

    <h3 className='text-light pt-2 listen'> Error Handling:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Implement robust error handling to address potential issues like index out of bounds, ensuring the stability of your array-based algorithms.
    </p>

    <h3 className='text-light pt-2 listen'> Commenting:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Use comments to explain complex algorithms, important logic, or any unconventional array operations. Make your code more understandable for others (and future you).
    </p>

    <h3 className='text-light pt-2 listen'> Avoid Magic Numbers:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Avoid using magic numbers in array indices or lengths. Define constants or variables with meaningful names to enhance code readability and maintenance.
    </p>

    <h3 className='text-light pt-2 listen'>Common Array Operations:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Familiarize yourself with common array operations like searching, sorting, and filtering. Choose the most efficient algorithm based on the specific use case.
    </p>

    <h3 className='text-light pt-2 listen'>Memory Management:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Be mindful of memory usage, especially in large-scale applications. Optimize array operations to reduce unnecessary memory allocation and deallocation.
    </p>

    <h3 className='pt-2 listen text-success'>Developers' Note:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Following these common practices ensures clean, maintainable, and efficient code when working with arrays. Apply these principles to enhance your skills in array manipulation.
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

export default CommonMistakes