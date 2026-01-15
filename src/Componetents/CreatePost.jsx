import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postSchema } from '../lib/validations';
import { createPost, fetchUsers } from '../lib/api';
import { toast } from 'sonner';
import { AlertCircle } from 'lucide-react';
import './CreatePost.css';

export default function CreatePost() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: '',
            body: '',
            userId: '',
        },
    });

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Failed to load users:', error);
                toast.error('Failed to load users');
            }
        };
        loadUsers();
    }, []);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setServerError(null);

        try {
            await createPost(data);

            // Show success toast
            toast.success('A new post has been successfully created!', {
                duration: 3000,
                style: {
                    background: '#2D3748',
                    color: 'white',
                },
            });

            // Reset form
            reset();

            // Redirect to home after 2 seconds
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Failed to create post:', error);
            setServerError('Internal Server Error');
            toast.error('Failed to create post. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="create-post-page">
            <div className="create-post-overlay"></div>

            <div className="create-post-card">
                {/* Header */}
                <div className="create-post-card-header">
                    <svg
                        className="header-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                    <h2 className="header-title">Create a New Post</h2>
                </div>

                {/* Body */}
                <div className="create-post-card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-grid">
                            {/* Server Error Banner */}
                            {serverError && (
                                <div className="server-error">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>{serverError}</span>
                                </div>
                            )}

                            {/* Title Field */}
                            <div className="form-row">
                                <label className="form-label text-left" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    className="finput"
                                    placeholder="Enter post title"
                                    {...register('title')}
                                />
                                {errors.title && (
                                    <div className="field-error">
                                        <AlertCircle className="err-icon" />
                                        <span>{errors.title.message}</span>
                                    </div>
                                )}
                            </div>

                            {/* Body Field */}
                            <div className="form-row text-left">
                                <label className="form-label" htmlFor="body">
                                    Body
                                </label>
                                <textarea
                                    id="body"
                                    className="ftextarea"
                                    placeholder="Enter post body"
                                    {...register('body')}
                                />
                                {errors.body && (
                                    <div className="field-error">
                                        <AlertCircle className="err-icon" />
                                        <span>{errors.body.message}</span>
                                    </div>
                                )}
                            </div>

                            {/* Author Field */}
                            <div className="form-row text-left">
                                <label className="form-label" htmlFor="userId">
                                    Author
                                </label>
                                <select
                                    id="userId"
                                    className="fselect"
                                    {...register('userId')}
                                >
                                    <option value="">Select Author</option>
                                    {users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.userId && (
                                    <div className="field-error">
                                        <AlertCircle className="err-icon" />
                                        <span>{errors.userId.message}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="submit-row">
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Creating...' : 'Create Post'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
