import React, { useState } from "react";
// import "./accordion.css";

// import styled from 'styled-components'

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <h3>{heading}</h3><span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  );
};

export default Accordion;


//   return (
//     <li className="accordion-item">
//       <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
//         <FormText>{heading}</FormText><span>{isActive ? "-" : "+"}</span>
//       </div>
//       {isActive && <FormText>{content}</FormText>}
//     </li>
//   );
// };

// export default Accordion;


// const FormText = styled.p`
//     display: flex;
//     justify-content: center;
//     font-size: 16px;
//     font-weight: 305;
//     margin: 0.5rem;
//     line-height: 1.8em;
// `