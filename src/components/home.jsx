import React from 'react';
import Butter from 'buttercms';
import List from './list.jsx';

const butter = Butter("96a3af80d38da4a1925f455895d63270e480d191");

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : []
        };
    }
    componentWillMount(){
        butter.post.list({ page: 1, page_size: 10 }).then((response)=> {
            this.setState({ articles : response.data.data});
        })
    }
    render(){
        let { articles } = this.state;
        return <div>
            <List articles={ articles }></List>
        </div>
    }
}
export default Home