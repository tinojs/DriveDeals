const Comment = (comment) => {
    
    return (
        <div className="offer-card">
            <div className="offer-card-header">
                <span className="offer-date">{new Date(comment._createdOn).toLocaleDateString()}</span>
                <span className="contact-phone">Phone Number: {comment.commentData.phoneNumber}</span>
            </div>
            <div className="offer-message">
               Comment: {comment.commentData.comment}
            </div>
        </div>
    )
}

export default Comment
