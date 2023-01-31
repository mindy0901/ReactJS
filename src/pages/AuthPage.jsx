import { styled } from '@mui/material';
import React from 'react';

const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

const AuthPage = () => {
    return (
        <div>
            <MyComponent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel reprehenderit,
                doloremque amet deserunt qui necessitatibus cum fuga cupiditate ex. Unde, nostrum
                alias. Nisi adipisci consequuntur eligendi error pariatur, iure laborum.
            </MyComponent>
        </div>
    );
};

export default AuthPage;
