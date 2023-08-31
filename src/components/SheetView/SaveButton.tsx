import { FC, useState } from 'react';

interface SaveProps {}

const SaveButton: FC<SaveProps> = () => {
    const [button, setButton] = useState<String>();

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setButton("true");
        console.log("true");
        //Save sheet information to database
    };

    return (
    <div>
        <button className="save-button" onClick={buttonHandler}>Save Sheet</button>
    </div>
    )
};

export default SaveButton;