import React, { Component } from 'react';
import Button from '../Button/Button';

const ContentBtns = ({content, menu}) => {
    return (
      <section id="content-btn-section">
          {
            menu.map((type, index) => {
              return <Button selection={type} content={content} key={type}/>
            })
          }
      </section>
    )
}

export default ContentBtns;
