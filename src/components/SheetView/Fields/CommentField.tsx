import { FC } from 'react';

interface CommentProps {
    title: string;
    limit: number;
}

const Header: FC<CommentProps> = ({ title, limit }) => {
    return (<>
        <h1>{title}!</h1>
        <input maxLength={limit}></input>
    </>)
};

export default Header;