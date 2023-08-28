import { FC } from 'react';

interface DecimalProps {
    title: string;
    limit: number;
}

const DecimalField: FC<DecimalProps> = ({ title }) => {
    return (<>
        <h1>{title}!</h1>
    </>)
};

export default DecimalField;