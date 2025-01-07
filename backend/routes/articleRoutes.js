import express from 'express';
import { getNews, likeArticle, getLikedArticles } from '../controllers/articleController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/news', getNews);
router.post('/like', authenticate, likeArticle);
router.get('/liked', authenticate, getLikedArticles);

export default router;
