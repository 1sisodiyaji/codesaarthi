import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';

const TransversingOfArray = () => {
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
        <meta name="keywords" content="Array traversal mistakes, Array iteration errors, Common pitfalls in Array traversal" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/transversing-of-array" />
        <meta name="description" content="Explore common mistakes in Array traversal. Avoid errors and pitfalls in Array iteration. Learn key concepts and improve your programming skills on DSA Playlist." />
        <title>Array Traversal | DSA Playlist</title>
        <meta property="og:title" content="Common Mistakes in Array Traversal | DSA playlist" />
        <meta property="og:description" content="Explore common mistakes in Array traversal. Avoid errors and pitfalls in Array iteration. Learn key concepts and improve your programming skills on DSA Playlist." />
        <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/transversing-of-array" />
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

        <div className="col-lg-7  col-12">
          <div className="container-fluid design p-1 py-5">

            <div className="row g-0">
              <div className="col-lg-8 col-12">
                <h2 style={{ color: '#FFE164' }} className='listen'> Array Traversal: In-depth Exploration </h2>
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

            <h3 className='text-light pt-2 listen'> Array Traversal Ka Matlab:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Array traversal ka matlab hai har ek array element ko systematic taur par dekhna aur uska istemal karna.
              Yahan har item ka access karna aur usme kuch work karna shaamil hai, jyadatar ek systematic tareeke se.
            </p>

            <h3 className='text-light pt-2 listen'> Array Traversal Kyon Important  Hai:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Array traversal kaam karne ke liye important hai kyun ki isse array ke elements ko check aur modify kiya ja sakta hai.
              Ye algorithm design aur programming tasks mein kafi important hai.
            </p>

            <div className='p-2 d-lg-none d-block'>
              <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <p style={{ color: 'whitesmoke' }} className='listen'>
              Arrays ko traverse karne ke liye loops ka istemal karna (for example, <span className='text-warning'>for</span> ya <span className='text-warning'>while</span> loops).
              Traversal ke liye khaas tareekon ka upayog karna.
            </p>

            <h3 className='text-light pt-2 listen'> 2. Array Elements Mein Idhar-Udhar Ghumna:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Samajhna ki systematically array ke elements ko kaise traverse karna hai.
              Traverse karne ka direction (forward ya backward) aur step size ka dhyan rakhna.
            </p>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Traversal Ke Liye Loop Ka Prayog:    Efficient aur controlled traversal ke liye programming loops ka istemal karna (for example, for ya while loops).
              Loop constructs likhna jo ensure kare ki har element ko ek baar visit kiya jaaye.
              Elements Ko Prapt Karke Aur Unhe Modifying Karne Ki Process:

              Techniques sikhna Elements tak pahunchne ke liye.
              Dikhaana kaise traversal ke beech me Elements ko modify kiya ja sakta hai.
            </p>

            <h3 className='text-light pt-2 listen'> 3. Sequence:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Ye discuss karta hai ki array traversal ko kyun easy aur fundamental mana jata hai.
              Examples ke saath dikhata hai kaise traversal data processing tasks ko simplify karta hai.
            </p>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Traversal Ke Dauran Aaya Jane Wala Data: Array traversal ke dauran kaun kaun se data milta hai, ye explore karna.
              Real-world examples dikhana encountered data ka importance.
            </p>
            <h5 className='text-light listen'>Examples</h5>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Different contexts mein array traversal ka practical examples dikhana.
              Dikhlana ki array traversal algorithmic solutions ka kaise importance hai.
            </p>

            <h3 className='text-light pt-2 listen'> 4. Common Mistakes and Best Practices:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>

              <span className='text-danger listen'>Common Errors in Array Traversal :</span>

              Identify karna typical mistakes jo array traversal mein hoti hain.
              Discuss karna kaise ye errors program ki efficiency ko affect kar sakti hain.
              Proper Traversal Ke Liye Conventions:
            </p>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Saaf aur error-free array traversal ke liye best practices sikhana.
              Consistent aur padhne yogya traversal code ke liye coding conventions ko follow karna.
              Real-world Applications and Examples:
            </p>

            <h3 style={{ color: '#FFE164' }} className='pt-2 listen'> 5. Guru mantra::</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>

              Reiterate karna ki array traversal programming aur data manipulation mein kaise ek important operation hai.
              Highlight karna ki ye algorithm design aur implementation mein kyun important hai.

              <br />
              Traversal Ke Maddhyam Se Data Receving Aur Sending Ka Ek Stable Tareeka Hai: Emphasize karna ki array traversal ek structured method hai data elements ke saath kaam karne ka.
              Discuss karna kaise ye help karta hai data ko efficiently retrieve, process, aur manage karne mein.

              <br />
              Excel in the Field of Array Traversal:  Developers ko encourage karna ki woh array traversal ko achhe se samajhne aur istemal karne ke liye.
              Acknowledge karna ki jo knowledge acquire hui hai, woh programming skills mein improvement layegi.
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

export default TransversingOfArray