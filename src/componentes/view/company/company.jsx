import React from 'react';
import Section from '../../section/section';
import style from './company.module.css';
import cx from 'classnames';

import Imagem from './marketing.svg';

const Company = () => {


    const head1 = `o raio de sol brilhou hoje a o amanhecer`;
    const head2 = 'jiasjdaldakdkkkkkkkk';

    const conteudo1 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati enim omnis. Rem dolores ex explicabo, in, ab earum accusamus deleniti facere itaque quas temporibus officiis quisquam molestiae. Qui, labore.`

    const conteudo2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae obcaecati enim omnis. Rem dolores ex explicabo, in, ab earum accusamus deleniti facere itaque quas temporibus officiis quisquam molestiae. Qui, labore.`


    return ( 
        <div className={ cx(style.container) }>
            <Section heading={head1} content={conteudo1} image={Imagem} />
            <Section heading={head2} content={conteudo2}  image={Imagem} reverse={true}/>
            <Section heading={head1} content={conteudo1} image={Imagem} />
        </div>
     );
}
 
export default Company;