import useAuth from '../../hooks/useAuth';
import { userApi } from '../../api/api';
import ProfileForm from '../../components/user/ProfileForm';

const UserProfilePage = () => {
  const { user } = useAuth();

  const handleUpdateProfile = async (payload) => {
    await userApi.updateProfile(payload);
    alert('Profile updated');
  };

  const handleChangePassword = async (payload) => {
    await userApi.changePassword(payload);
    alert('Password updated');
  };

  return (
    <div className="page-card">
      <h2>Profile</h2>
      <ProfileForm user={user} onUpdateProfile={handleUpdateProfile} onChangePassword={handleChangePassword} />
    </div>
  );
};

export default UserProfilePage;
