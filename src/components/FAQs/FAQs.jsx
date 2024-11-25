import React, { useState } from 'react';
import "./faqs.css";
// check the root of files

function FaQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the implementation of 3D look?",
      answer: "There are multiple 3D model uses. Creating CGI images for your product showcase requires no implementation; we will deliver the final, ready-to-use image for you. As for the Augmented Reality experience, the process is simple: we will generate an embeddable link or a QR code of your 3D product model, which you'll be able to add to your website or offline media. No additional coding, software, or extensions are needed."
    },
    {
      question: "How will I know how many views my 3D viewers have generated?",
      answer: "You can see statistics regarding the view count on each 3D viewer in your Modelry dashboard."
    },
    {
      question: "How AR and 3D Models can benefit your business?",
      answer: "The convergence rate increases by 35-65% when you use AR and 3D Modeling in your business"
    },
    {
      question: "What do I need to have a 3D model created?",
      answer: "To have your 3D model created, you need to send us your product images or URLs showing your products in many different angles and product dimensions. We will take it from there."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="ps-4 faq-section container m-auto">
        <div className="ps-4 faq-wrapper  row">
          <div className="faq-title container col-12 col-lg-6">
            <div className='faqs-Frequently'><p>Frequently asked questions</p></div>
            <h2>Some of the things you may want to know</h2>
            <h6>Have more questions? Don’t hesitate to reach us</h6>
          </div>
          <div className=" faq-list col-12 col-lg-6">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-item-details">
                  <div
                    className="faq-quest"
                    onClick={() => toggleFAQ(index)}
                    tabIndex={0}
                  >

                    <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
                      +
                    </span>
                    <h6>{faq.question}</h6>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer open">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaQs;
