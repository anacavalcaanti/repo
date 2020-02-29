import React from 'react';
import cx from 'classnames';
import style from './section.module.css';




const section = ({heading, content , image , reverse}) => {
    return (
        <div>

        <div className={ cx(style.dFlex, {[style.dFlexR]: reverse})}>
            <div>
            <h2> {heading}</h2>
             <p>{content}</p> 
                                
            </div>
            <div className={cx(style.radius)}><img src={image} alt="imagem para propaganda"/></div>

  </div>
        </div>

    )
}
export default section;