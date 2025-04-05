import './EditMyProfile.css';

import { useNavigate } from 'react-router-dom';

import * as UserService from '../../services/UserService';
import * as useForm from '../../hooks/useForm';

export default function EditMyProfile() {

    const navigate = useNavigate();
    const { onChange } = useForm();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const editProfileSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await UserService.editUser(useRevalidator, values);
            navigate('/my-profile');
        } catch (error) {
            console.log(error);
        }
    }

return (
    <div className="profile-container">
        <div className="profile-content">
            <div className="profile-section">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                <form onSubmit={editProfileSubmitHandler} className="profile-details space-y-4">
                    <div className="profile-field">
                        <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div className="profile-field">
                        <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your last name"
                        />
                    </div>

                    <div className="profile-field">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="profile-field">
                        <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={onChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    </div>
);

};