import React from 'react';
import Button from '../Button/Button';

const ContentBtns = ({content, btnMenu}) => {
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
      </section>
    )
}

export default ContentBtns;
