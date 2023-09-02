import { FC, useState, useEffect } from 'react';

interface CommentProps {
    limit?: number;
    rows?: number;
    updateState: (arg: string) => void;
}

const CommentField: FC<CommentProps> = ({ limit = 500, rows = 2, updateState }) => {
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
        <textarea maxLength={limit} rows={rows} onChange={inputCommentHandler}/>
    </div>
    )
};

export default CommentField;