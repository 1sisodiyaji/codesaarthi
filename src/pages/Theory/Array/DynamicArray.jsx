import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';
const DynamicArray = () => {
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
    <meta name="keywords" content="Dynamic arrays, Understanding dynamic arrays, Implementation of dynamic arrays, Array programming" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/Dynamic-Arrays" />
    <meta name="description" content="Explore the concepts, understanding, and implementation of dynamic arrays in programming. Learn how dynamic arrays work and their practical applications. Enhance your programming skills on DSA Playlist." />
    <title>Dynamic Arrays: Understanding and Implementation | DSA Playlist</title>
    <meta property="og:title" content="Dynamic Arrays: Understanding and Implementation | DSA playlist" />
    <meta property="og:description" content="Explore the concepts, understanding, and implementation of dynamic arrays in programming. Learn how dynamic arrays work and their practical applications. Enhance your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/Dynamic-Arrays" />
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
          Dynamic Arrays </h2>
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
    <h3 className='text-light pt-2 listen'> Exploring Dynamic Arrays - A Flexible Guide:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Dynamic arrays bring flexibility to data structures by allowing the size of the array to grow or shrink dynamically. Let's delve into dynamic arrays and explore best practices for efficient usage.
    </p>

    <h3 className='text-light pt-2 listen'> What are Dynamic Arrays:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Unlike static arrays, dynamic arrays can change in size during runtime. They automatically resize themselves to accommodate varying amounts of data, making them versatile and memory-efficient.
    </p>

    <div className='p-2 d-lg-none d-block'>
      <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <h2 className='text-light pt-2 listen'>Creating and Using Dynamic Arrays:</h2>

    <h3 className='text-light pt-2 listen'>1. Dynamic Array Basics:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Dynamic arrays are initialized with a certain capacity and can be resized as needed. Elements can be easily added or removed without worrying about fixed sizes.
    </p>

    <h3 className='text-light pt-2 listen'>2. Resizing Strategy:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Implementing an efficient resizing strategy is crucial for performance. Common strategies include doubling the size or increasing by a certain percentage.
    </p>

    <h3 className='text-light pt-2 listen'>3. Best Practices for Dynamic Arrays:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Use dynamic arrays when the size of the data is unknown or may change. Regularly monitor and optimize resizing strategies to balance memory usage and performance.
    </p>

    <h3 className='text-light pt-2 listen'>Advantages of Dynamic Arrays:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Dynamic arrays offer efficient memory usage, adaptability to changing data sizes, and improved overall performance compared to static arrays.
    </p>

    <h3 className='text-light pt-2 listen'>Real-world Application:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Dynamic arrays are widely used in scenarios where the size of the dataset is unpredictable, such as managing lists, queues, or implementing dynamic data structures.
    </p>

    <h3 className='pt-2 listen text-success'>Developers' Toolkit:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Mastering dynamic arrays is essential for optimizing memory usage and ensuring flexibility in handling varying amounts of data. Follow best practices to harness their full potential in your applications.
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

export default DynamicArray