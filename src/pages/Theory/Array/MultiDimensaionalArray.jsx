import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';
const MultiDimension = () => {
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
    <meta name="keywords" content="Multidimensional arrays, Array concepts, Best practices for multidimensional arrays, Array programming" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/MultiDimensions-in-Array" />
    <meta name="description" content="Explore concepts and best practices for working with multidimensional arrays in programming. Learn efficient techniques and key concepts for utilizing multidimensional arrays. Enhance your programming skills on DSA Playlist." />
    <title>Multidimensional Arrays: Concepts and Best Practices | DSA Playlist</title>
    <meta property="og:title" content="Multidimensional Arrays: Concepts and Best Practices | DSA playlist" />
    <meta property="og:description" content="Explore concepts and best practices for working with multidimensional arrays in programming. Learn efficient techniques and key concepts for utilizing multidimensional arrays. Enhance your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/MultiDimensions-in-Array" />
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
                  Multidimensional Arrays </h2>
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
            <h3 className='text-light pt-2 listen'> Exploring Multidimensional Arrays - A Simple Guide:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Multidimensional arrays take us into the realm of structured data, where elements are organized in multiple dimensions. Let's dive into the world of multidimensional arrays and understand how they bring order to complex data structures.
            </p>

            <h3 className='text-light pt-2 listen'> What are Multidimensional Arrays:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              In simple terms, a multidimensional array is an array of arrays. It's like having tables within tables, where each element can be identified by its unique set of indices.
            </p>

            <div className='p-2 d-lg-none d-block'>
              <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <h2 className='text-light pt-2 listen'>Creating Multidimensional Arrays:</h2>

            <h3 className='text-light pt-2 listen'>1. Two-Dimensional Arrays:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              A two-dimensional array is like a grid with rows and columns. It's often used to represent tables or matrices.
            </p>

            <h3 className='text-light pt-2 listen'>2. Three-Dimensional Arrays:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Adding another dimension introduces depth. Three-dimensional arrays are like a stack of matrices, forming a cuboid.
            </p>

            <h3 className='text-light pt-2 listen'>3. N-Dimensional Arrays:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              The concept extends to N-dimensions, where N can be any positive integer. Each dimension adds a layer of organization to the data.
            </p>

            <h3 className='text-light pt-2 listen'>Accessing Elements in Multidimensional Arrays:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Elements in a multidimensional array are accessed using multiple indices. For example, in a 2D array, you need both row and column indices to pinpoint an element.
            </p>

            <h3 className='text-light pt-2 listen'>Multidimensional Array Operations:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Performing operations on multidimensional arrays involves nested loops for traversal. It allows us to work systematically through the structured data.
            </p>

            <h3 className='text-light pt-2 listen'>Real-world Application:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Multidimensional arrays are extensively used in scientific computing, image processing, and simulations where data has multiple dimensions.
            </p>

            <h3 className='pt-2 listen text-success'>Developers' Toolkit:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Mastering multidimensional arrays adds a powerful tool to your programming toolkit. It's a structured way to handle complex data structures and solve real-world problems with efficiency.
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

export default MultiDimension