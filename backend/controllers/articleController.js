import axios from 'axios';
import Article from '../models/Article.js';
import User from '../models/User.js';

// Fetch News
export const getNews = async (req, res) => {
    const { query } = req.query;
    try {
        const newsResponse = await axios.get(
            `https://newsapi.org/v2/everything?q=${query}&from=${new Date(
                new Date() - 14 * 24 * 60 * 60 * 1000
            ).toISOString()}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
        );
        res.json(newsResponse.data.articles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
};

// Like Article
export const likeArticle = async (req, res) => {
    const { title, description, url } = req.body;
    try {
        const article = new Article({ title, description, url, userId: req.user });
        await article.save();

        const user = await User.findById(req.user);
        user.likedArticles.push(article._id);
        await user.save();

        res.status(200).json({ message: 'Article liked' });
    } catch (error) {
        res.status(500).json({ error: 'Error liking article',error });
    }
};

// Get Liked Articles
export const getLikedArticles = async (req, res) => {
    try {
        const user = await User.findById(req.user).populate('likedArticles');
        res.json(user.likedArticles);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching liked articles' });
    }
};
