import { FC } from 'react';

interface ClearProps {
    clearState: () => void;
}

const ClearButton: FC<ClearProps> = ({ clearState }) => {
    return (
    <div>
        <button className="clear-button" onClick={() => { clearState() }}>Clear Sheet</button>
    </div>
    )
};

export default ClearButton;