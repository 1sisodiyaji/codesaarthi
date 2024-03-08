import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';
const SearchingArray = () => {
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
    <meta name="keywords" content="Array searching, Searching algorithms, Best practices for array searching, Efficient array search, Optimal search techniques" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/Searching-Array" />
    <meta name="description" content="Explore best practices in Array searching. Learn efficient searching algorithms and optimal techniques for searching arrays. Enhance your programming skills on DSA Playlist." />
    <title>Array Searching | DSA Playlist , Best Practices in Array Searching</title>
    <meta property="og:title" content="Best Practices in Array Searching | DSA playlist" />
    <meta property="og:description" content="Explore best practices in Array searching. Learn efficient searching algorithms and optimal techniques for searching arrays. Enhance your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/Searching-Array" />
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
          Array Mein Searching </h2>
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
    <h3 className='text-light pt-2 listen'> Searching in Arrays - Ek Simple Guide:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching ka process humare code ke liye crucial hota hai. Array mein specific element ya value ko dhundhna aur uske position ko retrieve karna, yeh sab searching ke antar mein aata hai. Aaiye samjhein kaise hum array mein searching ka magic karte hain, ek simple guide ke through.
    </p>

    <h3 className='text-light pt-2 listen'> Searching Ka Arth:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching ka matlab hai kisi specific value ko find karna humare data mein. Jaise ki hum apne phone mein kisi contact ko dhundhte hain, waise hi hum array mein kisi element ko dhundhte hain.
    </p>

    <div className='p-2 d-lg-none d-block'>
      <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <h2 className='text-light pt-2 listen'>Searching Algorithms:</h2>

    <h3 className='text-light pt-2 listen'>1. Linear Search:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Linear search ek simple searching algorithm hai jisme array ko ek ek element check kiya jata hai, aur jab target mil jata hai, toh uska position return kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>2. Binary Search:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Binary search ek efficient algorithm hai jisme array ko divide-and-conquer method se half mein divide kiya jata hai. Agar target element mil jata hai, toh uska position return kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>3. Hashing:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Hashing ek aur tareeka hai searching ka, jisme array elements ko hash function se map kiya jata hai, aur fir target element ko retrieve kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>Searching Ka Code:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching code likhna bhi kaafi simple hai. Aaiye ek example ke through samjhein kaise hum searching algorithm ka code likhte hain:
    </p>
    <pre className='mb-3'><code className='text-warning'>
      {`
      def linear_search(arr, target):
        for i in range(len(arr)):
          if arr[i] == target:
            return i
        return -1

      # Example Usage
      my_array = [10, 20, 30, 40, 50]
      target_element = 30
      result = linear_search(my_array, target_element)
      print("Element found at index:", result)
      `}
    </code></pre>

    <h5 className='text-danger listen'>Common Mistakes:</h5>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching mein kuch common mistakes hain jo avoid karni chahiye. Jaise ki loop conditions galat set karna ya target element ka comparison sahi se nahi karna.
    </p>

    <h3 className='text-light pt-2 listen'>Real-world Mein Application:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching ka concept har jagah use hota hai, jaise databases, information retrieval systems, aur games mein.
    </p>

    <h3 className='pt-2 listen text-success'>Developers Ke Liye Magic:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Searching algorithms ko master karna aapke code ko efficient aur fast banata hai. Yeh ek essential tool hai jo data ko find karne mein aur dynamic applications mein use hota hai.
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

export default SearchingArray