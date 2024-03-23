import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import NewsApi from '../../../component/NewsApi'
import { Helmet } from 'react-helmet';
const PallindromeInArray = () => {
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
    <meta name="keywords" content="Array palindrome, Detecting palindromes, Palindrome in arrays, Array palindrome detection" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/Pallindrome-in-Array" />
    <meta name="description" content="Explore techniques for detecting palindromes in arrays. Learn efficient methods and key concepts for identifying palindromes within array structures. Enhance your programming skills on DSA Playlist." />
    <title>Palindrome Detection in Arrays | DSA Playlist</title>
    <meta property="og:title" content="Palindrome Detection in Arrays | DSA playlist" />
    <meta property="og:description" content="Explore techniques for detecting palindromes in arrays. Learn efficient methods and key concepts for identifying palindromes within array structures. Enhance your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/Pallindrome-in-Array" />
    <meta property="og:type" content="Education-Website" />
    <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>

      <div className="row g-0 pt-lg-0 mt-lg-0   pt-5 mt-2 design" style={{ backgroundColor: '#031A33' }}>
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

        <div className="col-lg-7  col-12">
          <div className="container-fluid design p-1 py-5">

            <div className="row g-0">
              <div className="col-lg-8 col-12">
                <h2 style={{ color: '#FFE164' }} className='listen'>
                  Arrays Palindrome  </h2>
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
            <h3 className='text-light pt-2 listen'> Palindrome in Array -</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              
            </p>

            <h3 className='text-light pt-2 listen'> Palindrome Ka Matlab:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Palindrome ka simple sa matlab hai ki koi bhi sequence ya word ulta-sidha padhne par bhi waisa hi dikhe. Jaise "madam" ya "level". Ab, isse array mein kaise apply karte hain, yeh jaane.
            </p>
            <div className='p-2 d-lg-none d-block'>
              <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h2 className='text-light pt-2 listen'>Palindromes Ki Pehechan:</h2>

            <h3 className='text-light pt-2 listen'>Backward aur Forward Comparisons:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Palindrome check karne ke liye, hum array ke elements ko ulta aur seedha compare karte hain. Agar dono directions mein same hote hain, toh array palindrome hai.
            </p>

            <h3 className='text-light pt-2 listen'>Odd aur Even Palindromes:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Odd length wale arrays mein middle element hota hai, jo seedha aur ulta same rehta hai. Even length wale arrays mein bhi, saare elements ko compare karte waqt agar woh same hote hain, toh palindrome hai.
            </p>
            <h3 className='text-light pt-2 listen'>Code Banate Hain Palindrome:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Ab jab hume samajh aa gaya ki array mein palindrome kaise kaam karta hai, aaiye ek chhota sa code banayein:
            </p>
            <pre className='mb-3'><code className='text-warning'>
              {`
              def is_palindrome(arr):
              n = len(arr)
              for i in range(n // 2):
              if arr[i] != arr[n - 1 - i]:
              return False
              return True

              # Example Usage
              my_array = [1, 2, 3, 2, 1]
              result = is_palindrome(my_array)
              print("Is Array Palindrome?", result)
`}
            </code></pre>


            <h5 className='text-danger listen'>Common Galtiyan:</h5>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Palindromes check karte waqt kuch common mistakes hain jo avoid karni chahiye. Jaise ki sahi length ka check na karna ya comparison mein error hona.
            </p>

            <h3 className='text-light pt-2 listen'>Real-world Mein Application:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Palindromes ka concept not just coding mein, balki real-world mein bhi kaam aata hai. Jaise ki string manipulation ya data validation mein.
            </p>
            <h3 className=' pt-2 listen text-success'>Developers Ke Liye Magic:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Palindromes ki duniya mein kuch toh hai khaas. Inhe master karna aapke coding skills ko aur bhi interesting bana sakta hai. Isse aap not just ek code likh rahe hain, balki ek coding magic kar rahe hain.
            </p>

          </div>
         
        </div>
        
        <div className="col-3 py-5 d-lg-block d-none">
          <h2 style={{ color: '#FFE164' }}> Learn From Here :</h2>
          <div className='my-3'>
           <NewsApi/>
          </div>

        </div>


      </div>

    </>
  )
}

export default PallindromeInArray