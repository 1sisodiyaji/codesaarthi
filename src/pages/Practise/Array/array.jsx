import React from 'react'

const array = () => {
  return (
    <>
    <div className="container-fluid">
Some Basics Questions related to array 
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        data-mdb-collapse-init
        className="accordion-button"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML
        can go within the <strong>.accordion-body</strong>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        data-mdb-collapse-init
        className="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the
        showing and hiding via CSS transitions. You can modify any of this with custom CSS
        or overriding our default variables. It's also worth noting that just about any
        HTML can go within the <strong>.accordion-body</strong>, though the transition
        does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        data-mdb-collapse-init
        className="accordion-button collapsed"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML
        can go within the <strong>.accordion-body</strong>, though the transition does
        limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>
    
    
    
    
    </>
  )
}

export default array