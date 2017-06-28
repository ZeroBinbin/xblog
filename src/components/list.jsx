import React from 'react';
import { Link } from 'react-router';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let { articles } = this.props ;
        return <ul>
            {
                articles.map((article)=>{
                    return <li><Link to={`/post/${ article.slug }`}>{ article.title }</Link></li>
                })
            }
        </ul>
    }
}
export default List