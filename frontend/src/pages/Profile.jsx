import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null); // User data
    const [view, setView] = useState('login'); // 'login' or 'signup'
    const [formData, setFormData] = useState({ email: '', password: '' }); // Form inputs
    const [name, setName] = useState(''); // Extra input for signup

    // Fetch user from local storage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            setUser(JSON.parse(storedUser)); // Parse user data from localStorage
        }
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token); // Store token
            localStorage.setItem('user', JSON.stringify(res.data.user)); // Store user
            setUser(res.data.user); // Set user state
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    // Handle signup
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                ...formData,
                name,
            });
            localStorage.setItem('token', res.data.token); // Store token
            localStorage.setItem('user', JSON.stringify(res.data.user)); // Store user
            setUser(res.data.user); // Set user state
        } catch (error) {
            console.error('Signup failed:', error.response?.data?.message || error.message);
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    // Render
    if (user) {
        return (
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Welcome, {user.name}!</h2>
                <p>Email: {user.email}</p>
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold">
                {view === 'login' ? 'Login' : 'Signup'}
            </h2>
            <form
                onSubmit={view === 'login' ? handleLogin : handleSignup}
                className="mt-4 space-y-4"
            >
                {view === 'signup' && (
                    <div>
                        <label className="block font-medium">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                )}
                <div>
                    <label className="block font-medium">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {view === 'login' ? 'Login' : 'Signup'}
                </button>
            </form>
            <button
                onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                className="mt-4 text-blue-500 underline"
            >
                {view === 'login' ? 'Create an account' : 'Already have an account? Login'}
            </button>
        </div>
    );
};

export default Profile;
