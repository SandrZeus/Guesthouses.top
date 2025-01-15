import React from 'react';

function renderWithLineBreaks(text) {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
} 
    
export default renderWithLineBreaks;