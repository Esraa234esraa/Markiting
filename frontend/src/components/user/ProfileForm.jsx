import { useState } from 'react';

const ProfileForm = ({ user, onUpdateProfile, onChangePassword }) => {
  const [profile, setProfile] = useState({ name: user?.name || '', email: user?.email || '' });
  const [password, setPassword] = useState({ currentPassword: '', newPassword: '' });

  return (
    <div className="grid-2">
      <form
        className="card"
        onSubmit={(event) => {
          event.preventDefault();
          onUpdateProfile(profile);
        }}
      >
        <h3>Edit Profile</h3>
        <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
        <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
        <button className="btn btn-primary" type="submit">
          Save Profile
        </button>
      </form>

      <form
        className="card"
        onSubmit={(event) => {
          event.preventDefault();
          onChangePassword(password);
        }}
      >
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={password.currentPassword}
          onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password.newPassword}
          onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
