import React, { useState } from "react";
import axios from "axios";

const NewGig = () => {
  const [gigData, setGigData] = useState({
    title: "",
    image: "",
    overview: "",
    pricing: [{ packageName: "", price: "", details: [""] }],
    features: [""],
    process: [""],
    portfolio: [{ title: "", image: "", description: "" }],
    testimonials: [{ name: "", feedback: "" }],
    faq: [{ question: "", answer: "" }],
    cta: { buttonText: "", link: "" },
    contactInfo: { email: "", phone: "" },
    technicalSpecs: [""],
    guarantees: [""],
    terms: [""],
  });

  const handleChange = (e, field, index, subfield) => {
    if (typeof index === "number" && subfield === "details") {
      // Split textarea value into array
      const updatedArray = e.target.value.split(",").map((item) => item.trim());
      const updatedPricing = [...gigData.pricing];
      updatedPricing[index][subfield] = updatedArray;
      setGigData({
        ...gigData,
        pricing: updatedPricing,
      });
    } else if (typeof index === "number" && subfield) {
      const updatedArray = [...gigData[field]];
      updatedArray[index][subfield] = e.target.value;
      setGigData({
        ...gigData,
        [field]: updatedArray,
      });
    } else if (field === "cta") {
      // Handle nested cta object update
      setGigData({
        ...gigData,
        cta: {
          ...gigData.cta,
          [subfield]: e.target.value,
        },
      });
    } else {
      setGigData({
        ...gigData,
        [field]: e.target.value,
      });
    }
  };

  const handleArrayChange = (e, field, index) => {
    const updatedArray = [...gigData[field]];
    updatedArray[index] = e.target.value;
    setGigData({
      ...gigData,
      [field]: updatedArray,
    });
  };

  const handleAddField = (field, initialValue) => {
    setGigData({
      ...gigData,
      [field]: [...gigData[field], initialValue],
    });
  };

  const handleRemoveField = (field, index) => {
    const updatedArray = [...gigData[field]];
    updatedArray.splice(index, 1);
    setGigData({
      ...gigData,
      [field]: updatedArray,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/Admin/gigs",
        gigData
      );
      console.log("Gig created successfully", response.data);
      // Redirect or show success message
    } catch (error) {
      console.error("Error creating gig", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Gig</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={gigData.title}
            onChange={(e) => handleChange(e, "title")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={gigData.image}
            onChange={(e) => handleChange(e, "image")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea
            className="form-control"
            id="overview"
            value={gigData.overview}
            onChange={(e) => handleChange(e, "overview")}
            required
          />
        </div>

        <h4>Pricing</h4>
        {gigData.pricing.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="form-group">
              <label htmlFor={`packageName-${index}`}>Package Name</label>
              <input
                type="text"
                className="form-control"
                id={`packageName-${index}`}
                value={item.packageName}
                onChange={(e) =>
                  handleChange(e, "pricing", index, "packageName")
                }
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`price-${index}`}>Price</label>
              <input
                type="text"
                className="form-control"
                id={`price-${index}`}
                value={item.price}
                onChange={(e) => handleChange(e, "pricing", index, "price")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`details-${index}`}>
                Details (comma-separated)
              </label>
              <textarea
                className="form-control"
                id={`details-${index}`}
                value={item.details.join(", ")} // Ensure item.details is an array
                onChange={(e) => handleChange(e, "pricing", index, "details")}
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            handleAddField("pricing", {
              packageName: "",
              price: "",
              details: [""],
            })
          }
        >
          Add Pricing
        </button>

        <h4>Features</h4>
        {gigData.features.map((feature, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              value={feature}
              onChange={(e) => handleArrayChange(e, "features", index)}
            />
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={() => handleRemoveField("features", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("features", "")}
        >
          Add Feature
        </button>

        <h4>Process</h4>
        {gigData.process.map((step, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              value={step}
              onChange={(e) => handleArrayChange(e, "process", index)}
            />
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={() => handleRemoveField("process", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("process", "")}
        >
          Add Process Step
        </button>

        <h4>Portfolio</h4>
        {gigData.portfolio.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="form-group">
              <label htmlFor={`portfolioTitle-${index}`}>Title</label>
              <input
                type="text"
                className="form-control"
                id={`portfolioTitle-${index}`}
                value={item.title}
                onChange={(e) => handleChange(e, "portfolio", index, "title")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`portfolioImage-${index}`}>Image URL</label>
              <input
                type="text"
                className="form-control"
                id={`portfolioImage-${index}`}
                value={item.image}
                onChange={(e) => handleChange(e, "portfolio", index, "image")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`portfolioDescription-${index}`}>
                Description
              </label>
              <textarea
                className="form-control"
                id={`portfolioDescription-${index}`}
                value={item.description}
                onChange={(e) =>
                  handleChange(e, "portfolio", index, "description")
                }
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            handleAddField("portfolio", {
              title: "",
              image: "",
              description: "",
            })
          }
        >
          Add Portfolio Item
        </button>

        <h4>Testimonials</h4>
        {gigData.testimonials.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="form-group">
              <label htmlFor={`testimonialName-${index}`}>Name</label>
              <input
                type="text"
                className="form-control"
                id={`testimonialName-${index}`}
                value={item.name}
                onChange={(e) => handleChange(e, "testimonials", index, "name")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`testimonialFeedback-${index}`}>Feedback</label>
              <textarea
                className="form-control"
                id={`testimonialFeedback-${index}`}
                value={item.feedback}
                onChange={(e) =>
                  handleChange(e, "testimonials", index, "feedback")
                }
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            handleAddField("testimonials", { name: "", feedback: "" })
          }
        >
          Add Testimonial
        </button>

        <h4>FAQ</h4>
        {gigData.faq.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="form-group">
              <label htmlFor={`faqQuestion-${index}`}>Question</label>
              <input
                type="text"
                className="form-control"
                id={`faqQuestion-${index}`}
                value={item.question}
                onChange={(e) => handleChange(e, "faq", index, "question")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`faqAnswer-${index}`}>Answer</label>
              <textarea
                className="form-control"
                id={`faqAnswer-${index}`}
                value={item.answer}
                onChange={(e) => handleChange(e, "faq", index, "answer")}
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("faq", { question: "", answer: "" })}
        >
          Add FAQ
        </button>

        <h4>Call to Action</h4>
        <div className="form-group">
          <label htmlFor="ctaButtonText">Button Text</label>
          <input
            type="text"
            className="form-control"
            id="ctaButtonText"
            value={gigData.cta.buttonText}
            onChange={(e) => handleChange(e, "cta", null, "buttonText")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ctaLink">Link</label>
          <input
            type="text"
            className="form-control"
            id="ctaLink"
            value={gigData.cta.link}
            onChange={(e) => handleChange(e, "cta", null, "link")}
          />
        </div>

        <h4>Contact Information</h4>
        <div className="form-group">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="contactEmail"
            value={gigData.contactInfo.email}
            onChange={(e) => handleChange(e, "contactInfo", null, "email")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="contactPhone"
            value={gigData.contactInfo.phone}
            onChange={(e) => handleChange(e, "contactInfo", null, "phone")}
            required
          />
        </div>

        <h4>Technical Specifications</h4>
        {gigData.technicalSpecs.map((spec, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              value={spec}
              onChange={(e) => handleArrayChange(e, "technicalSpecs", index)}
            />
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={() => handleRemoveField("technicalSpecs", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("technicalSpecs", "")}
        >
          Add Technical Specification
        </button>

        <h4>Guarantees</h4>
        {gigData.guarantees.map((guarantee, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              value={guarantee}
              onChange={(e) => handleArrayChange(e, "guarantees", index)}
            />
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={() => handleRemoveField("guarantees", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("guarantees", "")}
        >
          Add Guarantee
        </button>

        <h4>Terms</h4>
        {gigData.terms.map((term, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              value={term}
              onChange={(e) => handleArrayChange(e, "terms", index)}
            />
            <button
              type="button"
              className="btn btn-danger mb-2"
              onClick={() => handleRemoveField("terms", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleAddField("terms", "")}
        >
          Add Term
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewGig;
