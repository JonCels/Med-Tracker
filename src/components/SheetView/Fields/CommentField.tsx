import { FC } from 'react';

interface CommentProps {
    limit?: number;
    rows?: number;
    updateState: (arg: string) => void;
    commentFieldString: string;
}

const CommentField: FC<CommentProps> = ({ limit = 500, rows = 2, updateState, commentFieldString }) => {
    const inputCommentHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateState(event.target.value);
    }

    return (
    <div>
        <textarea value={commentFieldString} maxLength={limit} rows={rows} onChange={inputCommentHandler}/>
    </div>
    )
};

export default CommentField;