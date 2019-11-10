// GET 接口
const articleBaseUri = '/api/article'

const questionsUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/questions'
const questionUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/question/123'

const videosUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/videos'
const videoUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/video/12345'

const filesUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/files'

const articleRecommendUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/recommend/articles'
const questionRecommendUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/recommend/question'
const downloadRecommendUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/recommend/download'
const videoRecommendUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/recommend/video'
const carouselRecommendUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/recommend/carousel'

const visitStatisticsUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/visit/statistics'
const latestTenPusblishUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/topn/latest-publish'
const mostTenActiveUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/topn/most-active'
const mostTenVisitUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/topn/most-visit'
const getNoticeUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/notice'

const versionUpdateUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/about/version'

// 信息流
const latestUpdateUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/infoflow/update'
const latestReplyUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/infoflow/reply'
const mostBrowseUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/infoflow/browse'

// POST 接口
const signInUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/signin'
const loginStateUrl = '/auth/authenticated'
const logoutUrl = '/auth/logout'

function getArticlesById (articleId) {
  // const articleUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/article/123'
  return articleBaseUri + '/' + articleId
}

function getArticlesByPage (pageSize, pageNum) {
  // const articlesUrl = 'https://easy-mock.com/mock/5d0a6c87edcd9a764d21fe78/articles'
  return articleBaseUri + '?pageSize=' + pageSize + '&pageNum=' + pageNum
}

function getCommentUrlByArticleId (articleId, pageSize, pageNum) {
  console.log(articleId)
  // const commentUrl = '/api/article/1193463048577355776/comments?pageSize=10&pageNum=1'
  return articleBaseUri + '/' + articleId + '/comments?pageSize=' + pageSize + '&pageNum=' + pageNum
}

export default {
  getArticlesById,
  getArticlesByPage,
  getCommentUrlByArticleId,
  questionsUrl,
  questionUrl,
  videosUrl,
  videoUrl,
  filesUrl,
  articleRecommendUrl,
  questionRecommendUrl,
  downloadRecommendUrl,
  videoRecommendUrl,
  carouselRecommendUrl,
  visitStatisticsUrl,
  latestTenPusblishUrl,
  mostTenActiveUrl,
  mostTenVisitUrl,
  getNoticeUrl,
  versionUpdateUrl,
  latestUpdateUrl,
  latestReplyUrl,
  mostBrowseUrl,
  signInUrl,
  loginStateUrl,
  logoutUrl
}
