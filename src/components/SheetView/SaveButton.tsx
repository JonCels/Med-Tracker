import { FC } from 'react';

interface SaveProps {
    saveState: () => void;
}

const SaveButton: FC<SaveProps> = ({ saveState }) => {
    return (
    <div>
        <button className="save-button" onClick={() => { saveState() }}>Save Sheet</button>
    </div>
    )
};

export default SaveButton;