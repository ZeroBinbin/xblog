import React from 'react';
import styles from './list.less';
import { Link } from 'react-router';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let { articles } = this.props ;
        console.log(articles)
        return <ul className={ styles.nodeList }>
            {
                articles.map((article)=>{
                    return <li>
                        <Link className={ styles.title } to={`/post/${ article.slug }`}>{ article.title }</Link>
                        <p className={ styles.summary }>{ article.summary }</p>
                    </li>
                })
            }
        </ul>
    }
}
export default List