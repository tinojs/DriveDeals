import { useContext } from 'react'
import { useParams } from 'react-router-dom';

import * as CommentsService from '../../services/CommentsService';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

const AddComment = ({ refreshComments, isOwner }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const { carId } = useParams();

    console.log(isAuthenticated);

    const addCommentHandler = async (values) => {
        await CommentsService.create(carId, values.phoneNumber, values.comment);
        refreshComments();
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, { comment: '' });

    if (isOwner || !isAuthenticated) {
        return null;
    }

    return (

        <div className="offer-section">
            <div className="offer-header">
                <h2>Do you like this car? Leave a comment!</h2>
                <p>Let us know what you think of the car.</p>
            </div>

            <form className="offer-form" onSubmit={onSubmit}>
                <div className="offer-form-group">
                    <label htmlFor="phoneNumber">Your Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={onChange}
                        placeholder="(555) 123-4567"
                        required
                    />
                </div>

                <div className="offer-form-group">
                    <label htmlFor="comment">Your Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={values.comment}
                        onChange={onChange}
                        placeholder="I'm interested in this vehicle and would like to make an offer of $..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-offer-btn">
                    Add comment
                </button>
            </form>
        </div >


    )
}

export default AddComment


