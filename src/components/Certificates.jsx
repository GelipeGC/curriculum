import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certification">
        <H2Styled name="Certification" />
        <div className="Certification-container">
        {props.data.map((cer, index) => (

            <div className="Certification-item" key={`Cer-${index}`}>
                <H3Styled>{cer.name} {cer.institution}
                    <span>{cer.date}</span>
                </H3Styled>
                <PStyled name={cer.description} />
            </div>
        ))}
        </div>
    </div>
);

export default Certificates;