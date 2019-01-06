import React from 'react';
import Button from '../Button/Button';
import HelpBtn from '../HelpBtn/HelpBtn';

const ContentBtns = ({content, btnMenu, handleQuestion}) => {
    return (
      <section id="content-btn-section">
          {
            btnMenu.map((scaleType, index) => {
              return <Button selection={scaleType}
                             content={content}
                             key={scaleType}
                             />
            })
          }

          <HelpBtn handleQuestion={handleQuestion} />
        
      </section>
    )
}

export default ContentBtns;
