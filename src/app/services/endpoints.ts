const HOST = 'http://localhost:8000/'

export var urls = {
    feed: HOST + 'api/feed/',
    feed_new: HOST + "api/feed/new/",
    feed_post: HOST + 'api/feed/post/',
    tweet_fav: (id: number) => HOST + `api/tweet/${id}/fav/`,
    tweet_unfav: (id: number) => HOST + `api/tweet/${id}/unfav/`,
    user_follow: (id: number) => HOST + `api/user/${id}/follow/`,
    user_unfollow: (id: number) => HOST + `api/user/${id}/unfollow/`,
    user_check_faved: (tweet_id: number) => HOST + `api/user/check_faved/${tweet_id}`,
} 