import { FC, useState } from 'react';

interface CommentProps {
    title: string;
    limit: number;
}

const CommentField: FC<CommentProps> = ({ title, limit }) => {
    const [commentString, setCommentString] = useState<String>();

    const inputCommentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentString(event.target.value);
        console.log(commentString);
    }

    return (
    <div>
        <span>{title}</span>
        <textarea maxLength={limit} onChange={inputCommentHandler}/>
    </div>
    )
};

export default CommentField;