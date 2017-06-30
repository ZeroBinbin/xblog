import React from 'react';
import Butter from 'buttercms';
import { Helmet } from "react-helmet";
import MainLayout from '../layout/mainlayout.jsx';
import styles from './post.less';

const butter = Butter("96a3af80d38da4a1925f455895d63270e480d191");

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentWillMount() {
        let { slug } = this.props.params;
        butter.post.retrieve(slug).then((resp) => {
            this.setState({
                loaded: true,
                post: resp.data.data
            })
        });
    }



    render() {
        let { slug } = this.props.params;
        if (this.state.loaded) {
            const post = this.state.post;

            return (
                <MainLayout>
                    <Helmet>
                        <title>{post.seo_title}</title>
                        <meta name="description" content={post.meta_description}/>
                        <meta name="og:image" content={post.featured_image}/>
                    </Helmet>
                    <div className={ styles.note }>
                        <div className={ styles.post }>
                            <div className={ styles.title }>{ post.title }</div>
                            <div className={ styles.showContent } dangerouslySetInnerHTML={{__html: post.body}}/>
                            <iframe
                                id="uyan_iframe"
                                src={ `./comment.html?slug=${ slug }` }
                                frameBorder="0"
                                style={{ width : '100%' ,minHeight : '250px'}}
                            ></iframe>
                        </div>
                    </div>
                </MainLayout>
            );
        } else {
            return <MainLayout></MainLayout>
        }
    }
}

export default Post ;