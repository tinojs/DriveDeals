

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import * as CommentsService from '../../services/CommentsService';
import AddComment from './AddComment';
import Comment from './Comment';




const CommentCard = ({ isOwner }) => {
    const [comments, setComents] = useState([]);
    const { carId } = useParams();

    useEffect(() => {
        getCarComments();
    }, [carId]);

    const getCarComments = async () => {
        const result = await CommentsService.getAll(carId);
        setComents(result);
    }
    console.log(comments);

    return (

        <div className="offers-list-section">
            {
                comments.length > 0 ?
                    <>
                        <div className="offers-header">
                            <h2>Comments Received</h2>
                            <p>Review the comments you've received for this vehicle</p>
                        </div>

                        {comments.map(comment => (
                            <Comment key={comment._id} {...comment} />
                        ))}
                    </>
                    :

                    <div className="no-offers-section">
                        <div className="no-offers-message">
                            <h3>No Comments Yet</h3>
                            <p>You haven't received any comments for this vehicle yet.</p>
                        </div>
                    </div>

            }
            <AddComment refreshComments={getCarComments} isOwner={isOwner} />

        </div>


    )
}

export default CommentCard

