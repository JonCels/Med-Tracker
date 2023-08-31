import { FC, useState } from 'react';

interface ViewProps {
}

const ViewBar: FC<ViewProps> = () => {
    const [viewSelection, setViewSelection] = useState<String>();

    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setViewSelection(event.target.value);
        console.log(viewSelection);
    };

    return (
    <div>
        <span>Selector goes here</span>
    </div>
    )
};

export default ViewBar;