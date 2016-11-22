import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomeContent from './components/home_content';
import BlogSection from './components/blog/blog_section';
import PostList from './components/blog/post_list';
import PostItem from './components/blog/post_item';
import PostNew from './components/blog/post_new';
import PostShow from './components/blog/post_show';
import PostArchive from './components/blog/post_archive';
import UserLogin from './components/user_login';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomeContent} />
        <Route path='post/new' component={PostNew} />
        <Route path='post/archive' component={PostArchive} />
        <Route path='signin' component={UserLogin} />
        <Route path='post/:id' component={PostShow} />
    </Route>
);
