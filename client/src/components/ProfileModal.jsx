import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { Pencil } from "lucide-react";

const ProfileModal = ({ setShowEdit }) => {
  const user = dummyUserData;
  const [editForm, setEditForm] = useState({
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    full_name: user.full_name,
    cover_photo: null,
  });
  const handleSaveProfile = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 z-50 h-screen overflow-y-auto bg-black/50">
      <div className="max-w-2xl mx-auto sm:py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>

          <form className="space-y-4" onSubmit={handleSaveProfile}>
            {/* Profile Picture */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="profile_picture"
                className="block text-sm font-medium text-gray-700 cursor-pointer"
              >
                Profile Picture
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />
                <div className="group relative mt-2">
                  <img
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    className="w-24 h-24 rounded-full object-cover"
                    alt=""
                  />

                  <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 rounded-full">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            {/* Cover Photo */}
            <div className="flex flex-col items-start gap-3">
              <label
                htmlFor="cover_photo"
                className="block text-sm font-medium text-gray-700 cursor-pointer"
              >
                Cover Photo
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="cover_photo"
                  className="w-full p-3 border border-gray-200 rounded-lg"
                />
                <div className="group relative mt-2">
                  <img
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    alt=""
                    className="w-80 h-40 rounded-lg bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover"
                  />

                  <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 rounded-lg">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-l-lg"
                placeholder="Please enter your full name"
                onChange={(e) =>
                  setEditForm({ ...editForm, full_name: e.target.value })
                }
                value={editForm.full_name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-l-lg"
                placeholder="Please enter your username"
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
                value={editForm.username}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-l-lg"
                placeholder="Please enter a short Bio"
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
                value={editForm.bio}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-l-lg"
                placeholder="Please enter your Location"
                onChange={(e) =>
                  setEditForm({ ...editForm, location: e.target.value })
                }
                value={editForm.location}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-6">
              <button
                onClick={() => setShowEdit(false)}
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
