import React, { useState, useEffect } from 'react';
import TextForm from '../../../component/Textarea';
import SideTheory from '../../../component/SideTheory';

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
            <div className="row g-0 pt-lg-0 mt-lg-0  pt-5 mt-2 design" style={{ backgroundColor: '#031A33' }}>

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

                        <h3 className='text-light pt-2 listen'> Reverse Operation Ka Matlab:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Array ko reverse karna ka matlab hai uske elements ko ulta kar dena, jaise hum ek line ko ulta kar lete hain. Yeh operation simple, par powerful hai.
                        </p>

                        <h3 className='text-light pt-2 listen'> Reverse Karne Ka Tareeka:</h3>
                       

                        <div className='p-2 d-lg-none d-block'>
                            <iframe width="100%" height="250px%" src="https://www.youtube.com/embed/YR12Z8f1Dh8?si=3snUaI1u6e26puKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                       
                        <h3 className='text-light pt-2 listen'> Backward Loop:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Array ko ulta karne ke liye hum backward loop ka use karte hain. Imagine karo ki aap ek purani tasveer ko rewind kar rahe hain, waise hi array ko bhi ulta karte hain.
                        </p>

                        <h3 className='text-light pt-2 listen'>Partners Ko Swap Karna:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Jaise dance mein partners jagah badalte hain, waise hi array ke elements bhi apni jagah badalte hain. Har element apne saathi ke saath jagah exchange karta hai.
                        </p>
                        <h3 className='text-light pt-2 listen'>Pivot Point:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Odd number of elements wale arrays mein, ek central element hota hai jo jagah nahi badalta – ise pivot kehte hain. Even number of elements wale arrays mein, sab smoothly jagah badal lete hain.
                        </p>

                        <h3 className='text-light pt-2 listen'>Mirror Image Dikhta Hai: The Finale:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Jab aap array ko reverse karte hain, aapke saamne ek ulta arrangement aata hai, jise hum mirror image kehte hain. Yeh ek finale ki tarah hota hai, jisse aapka array ek interesting palindrome ban jata hai.
                        </p>
                         <h3 className='text-light listen'>Examples Ke Bina Rehearsal:</h3> 
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Array reversal ko samajhne ke liye koi bhi example dekhe bina bhi practice kar sakte hain. Yeh ek simple operation hai, jo alag-alag situations mein apply kiya ja sakta hai.
                        </p>
                        <h5 className='text-danger listen'>Common Galtiyan:</h5>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Kuch common mistakes hain jo array reverse karte waqt hoti hain. Inhe avoid karna important hai taki aapka code smooth rahe.
                        </p>

                        <h3 className='text-light pt-2 listen'>Real-world Mein Application:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Array reversal programming ke beyond bhi kaam aata hai. Iska use real-world scenarios mein bhi hota hai, jaise data manipulation ya pattern recognition mein.
                        </p>
                         <h3 className='text-light pt-2 listen'>Developers Ke Liye Encore:</h3>
                        <p style={{ color: 'whitesmoke' }} className='listen'>
                        Aapko yeh operation master karna chahiye, kyunki yeh sirf ek coding task nahi hai, balki ek skill hai jo aapko not just programming mein, balki apne life mein bhi empower karegi. Isse aap control nahi sirf code, balki apne goals aur challenges par bhi pa sakte hain.
                        </p>
                    </div>
                    <div className="d-lg-none d-block my-3">
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

export default ReverseOfArray;

