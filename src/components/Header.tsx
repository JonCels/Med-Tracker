import { FC } from 'react';

interface HeaderProps {
    name: string;
}

const Header: FC<HeaderProps> = ({ name }) => {
    return <h4>Welcome {name}!</h4>;
};

export default Header;