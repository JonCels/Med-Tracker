import { FC, useState, useEffect } from 'react';

interface CommentProps {
    limit: number;
    updateState: (arg: string) => void;
}

const CommentField: FC<CommentProps> = ({ limit, updateState }) => {
    const [commentString, setCommentString] = useState<string>("");

    const inputCommentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentString(event.target.value);
    }

    useEffect(() => {
        if (updateState) {
            updateState(commentString);
        }
    }, [commentString]);

    return (
    <div>
        <textarea maxLength={limit} onChange={inputCommentHandler}/>
    </div>
    )
};

export default CommentField;