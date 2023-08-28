import { FC } from 'react';

interface BinaryProps {
    title: string;
    limit: number;
}

const BinaryField: FC<BinaryProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default BinaryField;