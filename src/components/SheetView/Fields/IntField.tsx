import { FC } from 'react';

interface IntProps {
    title: string;
}

const IntField: FC<IntProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default IntField;