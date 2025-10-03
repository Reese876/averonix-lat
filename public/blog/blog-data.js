// Simple Blog Data
// This file contains the single blog article

const blogManager = {
    articles: [
        {
            id: 'introducing-averonix-youtube-transcript-tool',
            title: 'Introducing Averonix: The Ultimate YouTube Transcript & Summary Tool',
            excerpt: 'Discover how Averonix revolutionizes the way you extract, summarize, and utilize YouTube content with AI-powered technology.',
            category: 'Product',
            tags: ['averonix', 'youtube', 'transcript', 'ai', 'productivity', 'chrome-extension'],
            image: '🚀',
            status: 'published',
            createdAt: '2025-01-20',
            updatedAt: '2025-01-20'
        }
    ],

    // Get all published articles
    getPublishedArticles() {
        return this.articles.filter(article => article.status === 'published');
    },

    // Get article by ID
    getArticleById(id) {
        return this.articles.find(article => article.id === id);
    }
};

