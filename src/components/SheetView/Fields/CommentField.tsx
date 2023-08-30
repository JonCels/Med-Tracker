import { FC, useState } from 'react';

interface CommentProps {
    limit: number;
}

const CommentField: FC<CommentProps> = ({ limit }) => {
    const [commentString, setCommentString] = useState<String>();

    const inputCommentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentString(event.target.value);
        console.log(commentString);
    }

    return (
    <div>
        <textarea maxLength={limit} onChange={inputCommentHandler}/>
    </div>
    )
};

export default CommentField;