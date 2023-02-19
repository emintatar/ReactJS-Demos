import React from "react";

const Accordion = ({ title, activeQuestion, setActiveQuestion }) => {
  const updateActive = () => {
    if (activeQuestion === title) {
      setActiveQuestion("");
    } else {
      setActiveQuestion(title);
    }
  };

  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={updateActive}>Toggle</span>
        </div>
      </div>
      <div
        className={
          activeQuestion === title
            ? "accordionContent show"
            : "accordionContent"
        }
      >
        <div className="container">
          Lorem ipsum dolor sit amet. In voluptatibus esse et ullam similique
          qui dolorem adipisci eum dicta quae? Non quaerat reiciendis quo
          dolorem illo et voluptatem voluptatem est dolores voluptas et quod
          voluptatum At reprehenderit maxime et consectetur dolores?
        </div>
      </div>
    </div>
  );
};

export default Accordion;
