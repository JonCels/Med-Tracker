import { FC, useState } from 'react';

interface CommentProps {
    title: string;
    limit: number;
}

const CommentField: FC<CommentProps> = ({ title, limit }) => {
    const [commentString, setCommentString] = useState<String>();

    const inputCommentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentString(event.target.value);
        console.log(commentString);
    }

    return (<>
        <h1>{title}!</h1>
        <input maxLength={limit} onChange={inputCommentHandler}/>
        <h1>{commentString}</h1>
    </>)
};

export default CommentField;