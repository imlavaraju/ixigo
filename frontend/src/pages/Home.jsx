import { useState } from 'react';
import axios from 'axios';
import NewsSearch from '../components/NewsSearch';
import NewsList from '../components/NewsList';
import { toast } from 'react-toastify';

const Home = () => {
    const [articles, setArticles] = useState([]);

    const fetchNews = async (query) => {
        try {
            const response = await axios.get('http://localhost:5000/api/articles/news', { params: { query } });
            setArticles(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };



    const handleLike = async (article) => {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    
        if (!token) {
            console.error('No token found. Please log in.');
            toast.error('Please login to try again')
            return;
        }
    
        try {
            await axios.post(
                'http://localhost:5000/api/articles/like',
                {
                    title: article.title,
                    description: article.description,
                    url: article.url,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log('Article liked successfully');
            toast.success('Article liked successfully');
        } catch (error) {
            console.error('Error liking the article:', error.response?.data || error.message);
            toast.error('Error liking the article');
        }
    };
    



    return (
        <div className="p-4">
            <NewsSearch onSearch={fetchNews} />
            <NewsList articles={articles} handleLike={handleLike} />
        </div>
    );
};

export default Home;
