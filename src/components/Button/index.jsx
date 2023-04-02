import React from 'react';
import { Button } from './styles';

function SendButton({ children, ...rest }) {
    return (
        <Button {...rest}>
            {children}
        </Button>
    );
}

export default SendButton;
