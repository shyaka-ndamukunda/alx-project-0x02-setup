    // components/common/PostModal.tsx

    import React, { useState } from 'react';
    import { type PostModalProps } from '@/interfaces'; // Import PostModalProps

    const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
      const [title, setTitle] = useState('');
      const [content, setContent] = useState('');

      // If modal is not open, don't render anything
      if (!isOpen) return null;

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
          onSubmit({ title, content });
          setTitle(''); // Clear form fields
          setContent('');
          onClose(); // Close modal after submission
        }
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-transform duration-300 scale-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                  Content:
                </label>
                <textarea
                  id="content"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

    export default PostModal;
    