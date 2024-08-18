import React from 'react';

const Timeline = ({ events }) => {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical bg-slate-100 dark:bg-gray-950">
        {events.map((event, index) => (
          <li key={index}>
            {index % 2 === 0 ? <hr /> : null}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${index % 2 === 0 ? 'md:text-end' : ''} `}>
              <time className="font-mono italic">{event.year}</time>
              <div className="text-lg text-black dark:text-white">{event.title}</div>
             <div className='text-black dark:text-white'> {event.message} </div> 
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
