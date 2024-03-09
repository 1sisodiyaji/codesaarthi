import React, { useState, useEffect } from 'react'
import SideTheory from '../../../component/SideTheory'
import TextForm from '../../../component/Textarea'
import { Helmet } from 'react-helmet';
const SortingArray = () => {
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
    <meta name="keywords" content="Array sorting, Sorting algorithms, Best practices for array sorting, Efficient array sort, Optimal sorting techniques" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://codesaarthi.com/Sorting-Array" />
    <meta name="description" content="Explore best practices in Array sorting. Learn efficient sorting algorithms and optimal techniques for sorting arrays. Enhance your programming skills on DSA Playlist." />
    <title>Array Sorting | DSA Playlist ,Best Practices in Array Sorting</title>
    <meta property="og:title" content="Best Practices in Array Sorting | DSA playlist" />
    <meta property="og:description" content="Explore best practices in Array sorting. Learn efficient sorting algorithms and optimal techniques for sorting arrays. Enhance your programming skills on DSA Playlist." />
    <meta property="og:image" content="https://codesaarthi.com/img/Array.jpg" />
    <meta property="og:url" content="https://codesaarthi.com/Sorting-Array" />
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
          Array Mein Sorting </h2>
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
    <h3 className='text-light pt-2 listen'> Array Mein Sorting - Samajhne Ka Asaan Guide:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting ka concept humare programming journey ka ek important part hai. Array mein elements ko arrange karna, unhe order mein laana - yeh sab sorting ke antar mein aata hai. Aaiye dekhein kaise array sorting humare code ki duniya ko organize karta hai, ek simple guide ke through.
    </p>

    <h3 className='text-light pt-2 listen'> Sorting Ka Matlab:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting ka seedha sa matlab hai kisi bhi set of data ko systematic order mein arrange karna. Jaise ki hum apne books ko alag-alag genres ke hisab se arrange karte hain, waise hi hum array elements ko bhi arrange karte hain.
    </p>

    <div className='p-2 d-lg-none d-block'>
      <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <h2 className='text-light pt-2 listen'>Sorting Algorithms:</h2>

    <h3 className='text-light pt-2 listen'>1. Bubble Sort:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Bubble sort ek simple sorting algorithm hai, jisme adjacent elements ko compare kiya jata hai aur unhe swap kiya jata hai agar woh galat order mein hote hain.
    </p>

    <h3 className='text-light pt-2 listen'>2. Selection Sort:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Selection sort mein array ko divide kiya jata hai, ek part sorted aur dusra unsorted. Sorted part mein se minimum element ko select karke unsorted part ke beginning mein swap kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>3. Merge Sort:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Merge sort ek divide-and-conquer algorithm hai. Isme array ko halves mein divide kiya jata hai, fir in halves ko sort kiya jata hai, aur phir combine kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>4. Quick Sort:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Quick sort bhi divide-and-conquer based sorting algorithm hai. Isme pivot element ko choose kiya jata hai, aur array ko uske left aur right mein divide kiya jata hai.
    </p>

    <h3 className='text-light pt-2 listen'>Sorting Ka Code:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting code likhna simple hai. Aaiye ek example ke through samjhein kaise hum sorting algorithm ka code likhte hain:
    </p>
    <pre className='mb-3'><code className='text-warning'>
      {`
      def bubble_sort(arr):
        n = len(arr)
        for i in range(n):
          for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
              arr[j], arr[j+1] = arr[j+1], arr[j]
        
        # Example Usage
        my_array = [64, 25, 12, 22, 11]
        bubble_sort(my_array)
        print("Sorted Array:", my_array)
      `}
    </code></pre>

    <h5 className='text-danger listen'>Common Mistakes:</h5>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting mein kuch common mistakes hain jo avoid karni chahiye. Jaise ki loop conditions galat set karna ya swap mein error hona.
    </p>

    <h3 className='text-light pt-2 listen'>Real-world Mein Application:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting ka concept har programming field mein use hota hai, jaise databases, searching algorithms, aur data analysis mein.
    </p>

    <h3 className='pt-2 listen text-success'>Developers Ke Liye Magic:</h3>
    <p style={{ color: 'whitesmoke' }} className='listen'>
      Sorting algorithms ko master karna aapko efficient code likhne mein madad karega. Yeh ek powerful tool hai jo data ko organize karne mein aur complex problems ko solve karne mein aata hai.
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

export default SortingArray