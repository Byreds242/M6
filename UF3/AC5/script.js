import { useState } from 'react';

export default function UserProfile() {
  // Estats per a controlar noms i mode d'edició
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [isEditing, setIsEditing] = useState(false);

  // Canvia entre mode edició i visualització
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">First Name</label>
          {isEditing ? (
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border px-3 py-1 rounded w-full"
            />
          ) : (
            <p>{firstName}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Last Name</label>
          {isEditing ? (
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border px-3 py-1 rounded w-full"
            />
          ) : (
            <p>{lastName}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>
      </form>

      <p className="mt-6 text-lg font-medium" id="helloText">
        Hello {firstName} {lastName}!
      </p>
    </div>
  );
}
