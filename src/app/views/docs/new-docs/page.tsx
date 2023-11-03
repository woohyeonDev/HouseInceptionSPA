"use client"
import { FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react'

export default function CreatePost() {
    const { data: session } = useSession();
    const user = session?.user
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content , link, user }),
        });

        if (response.ok) {
            alert('Post created successfully!');
            setTitle('');
            setContent('');            
        } else {
            alert('Error creating post.');
        }
    };

    return (
<div className="container mx-auto max-w-2xl mt-10 px-6 py-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create a New Doc</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Title:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-zinc-400"
            />
        </div>
        <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Content:</label>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-zinc-400"
                rows={4}
            />
        </div>
        <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Link:</label>
            <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-zinc-400"
            />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white  bg-zinc-600 rounded-md focus:bg-zinc-700 focus:outline-none">Create Post</button>
    </form>
</div>


    );
}