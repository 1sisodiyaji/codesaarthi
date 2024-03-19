import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import { Helmet } from 'react-helmet';
import NewsApi from '../../../component/NewsApi';
import { Link } from 'react-router-dom';

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
        <meta name="keywords" content="Array traversal,  array indexing , array use in real world , real time appilcation of Array " />
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

      <div className="row g-0 pt-lg-0 mt-lg-0   pt-5 mt-1 design" style={{ backgroundColor: '#031A33' }}>
        <div className={`col-lg-2 col-12  d-lg-none d-block `}
          style={{ zIndex: '1' }}>
          <div className="row g-0 position-fixed " style={{ backgroundColor: '#031A33'}} >
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
              Yahan har item ka access karna aur usme kuch work karna shaamil hai, jyadatar ek systematic tareeke se. <br />
              <span className='highlight'>Basically transversing a array includes to go through each element in a array through thier index.</span>
            </p>

            <h3 className='text-light pt-2 listen'> Array Traversal Kyon Important  Hai:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Array traversal kaam karne ke liye important hai kyun ki isse array ke elements ko check aur modify kiya ja sakta hai.
              Ye algorithm design aur programming tasks mein kafi important hai.
            </p>

            <p style={{ color: 'whitesmoke' }} className='listen'>
              Arrays ko traverse karne ke liye loops ka istemal Karte h  (for example, <span className='text-warning'>for</span> ya <span className='text-warning'>while</span> loops).
              Traversal ke liye khaas tareekon ka upayog karna.
            </p>

            <h3 className='text-light pt-2 listen'> 2. Array Elements Mein Idhar-Udhar Ghumna:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Samajhna ki systematically array ke elements ko kaise traverse karna hai.
              Traverse karne ka direction <span className='text-warning'>(forward ya backward)</span> aur step size ka dhyan rakhna.
            </p>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Traversal Ke Liye Loop Ka use :  Efficient aur controlled traversal ke liye programming loops ka istemal karna (for example, for ya while loops).
              Loop constructs likhna jo ensure kare ki har element ko ek baar visit kiya jaaye.
              Elements Ko Prapt Karke Aur Unhe Modifying Karne Ki Process h ye
              Dikhaana kaise traversal ke beech me Elements ko modify kiya ja sakta hai.
            </p>
            <code> int arr[3] = [0,1,2,3,4]</code> <br />
            <code> int arr[3] = {25}</code> <br />
            <code> int arr[3] = [0,1,2,<span className='text-success'>25</span>,4]</code> <br />

            <h3 className='text-light pt-2 listen'> 3. Sequence:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              Array me data ek sequence me store hota h ye sequence me store hone se usee agar sort kr diya jaaye to search easy jota h .

              Traversal Ke time Aaya Jane Wala Data: Array ke elemnets hi hote h jo bit by bit indexing ke through milta h .

            </p>
            <p style={{ color: 'whitesmoke' }} className='listen'>
              <span className='highlight'> Real World me Arrays data Storage me use aata h , matrices and image processing me use aata h , Game Developemnt , Audio Processing , Embedded Systems </span>
            </p>

            <h3 className='text-light pt-2 listen'> 4. Common Mistakes and Best Practices:</h3>
            <p style={{ color: 'whitesmoke' }} className='listen'>

              <span className='text-danger listen'>Common Errors in Array Traversal :</span>
              Array transversal ke time pe hm adhiktar array ka end point decide krne me glti krte h hame phle ye pata hona chhaiye array kha se kha tak transverse kr rha h uska range kitna h . phir hme at the end uska iteration kitne pe ho rha h means i++ mtlb +1 aage ya i+=2 iska mean +2 from current index h .
              <div className="card bg-dark text-warning">

                <h6 className='p-1'>
                  <pre>
                    {`
                     int i  = 0; // okay so we are starting from 0
                     int length = arr.length: = 5 
                     i++ = here i will increase as +1;
                     int arr[3] = [0,1,2,3,4]
                      for(int i = 0; i< length ;i++ ){
                        System.out.println(arr[i);
                      })

                  Output Will be : -  0 1 2 3 4 
                    `}
                  </pre>
                </h6>
              </div>

            </p> <br />
            <p style={{ color: 'whitesmoke' }} className='listen'>
              <span className='text-success'>Best Practise: </span>Saaf aur error-free array traversal ke liye best practices yahi h ki aap comments likhte jaaye kayi baar brackets close n krne se bhi errors aata h semicolon k adhyan rakhe. Array start , end and iteration pe dhyan de . For Practise Pattern ke Question Bnnaye. 
            </p>

            <h3 style={{ color: '#FFE164' }} className='pt-2 listen'> 5. Guru mantra::</h3>
            <p className='listen text-light p-1'>

            if you were learning Array transversal then you must have to know  about time complexity as which type of loop will be used at what place . 
            You should learn about memory insufficent issue that generate sometime so be careful from that . 

              <br />
   Transversal se data ka flow ko smjhana zarruri h <span className='text-success'> Git Version Control</span> kbhi n kbhi use kiya hoga ye bhi git version control bhi array indexing jaise aap smjh skte h .

              <br />
       As being a coder or developer writing clean and code precise documented is another important note i want to say you.
            </p>
          </div>
          <div className="row py-2 g-0">
            <div className="col-6 text-start">
              <Link to = "/array" className='btn border text-capitalize text-warning'>Previous</Link>
              
            </div>
            <div className="col-6 text-end ps-2 ">
              <Link to = "/reverse-of-array" className='btn border text-warning text-capitalize'>Next</Link>
              
            </div>
          </div>
        </div>
        <div className="col-3 py-5 d-lg-block d-none">
          <NewsApi />
        </div>


      </div>

    </>
  )
}

export default TransversingOfArray