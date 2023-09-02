import { FC, useState, useEffect } from 'react';

interface SaveProps {
    saveState: () => void;
}

const SaveButton: FC<SaveProps> = ({ saveState }) => {
    const [button, setButton] = useState<string>("");

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setButton("true");
    };

    useEffect(() => {
        saveState();
    }, [button]);

    return (
    <div>
        <button className="save-button" onClick={buttonHandler}>Save Sheet</button>
    </div>
    )
};

export default SaveButton;