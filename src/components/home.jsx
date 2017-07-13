import React from 'react';
import Butter from 'buttercms';
import List from './list.jsx';
import Pagination  from './pagination.jsx';
import styles from './home.less';
import MainLayout from '../layout/mainlayout.jsx';

const butter = Butter("96a3af80d38da4a1925f455895d63270e480d191");

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : [] ,
            menus : ["目录" ,"其他"] ,
            activeMenu : 0,
            page : 1 ,
            page_size : 10 ,
            total : 0 ,
            previous_page : null ,
            next_page : null ,
            searchWord : props.params.searchWord || null
        };
    }
    componentWillMount(){
        let { page, page_size ,searchWord } = this.state ;
        this.list(page ,page_size ,searchWord )
    }
    render(){
        let { articles ,activeMenu ,menus ,searchWord } = this.state;
        return <MainLayout clickSearch={ this.clickSearch.bind(this) } searchWord = { searchWord }>
            <div className={ styles.container }>
                <div className={ styles.ownerMessageBox}></div>
                <ul className={ styles.triggerMenus }>
                    {
                        menus.map((menu ,i)=>{
                            return <li className={ activeMenu === i ? styles.active : "" }>
                                <a onClick={ this.changeActiveMenu.bind(this ,i) }>{ menu }</a>
                            </li>
                        })
                    }
                </ul>
                <List articles={ articles }></List>
                <Pagination { ...this.state } changePage={ this.changePage.bind(this)}  ></Pagination>
            </div>
        </MainLayout>
    }
    changeActiveMenu(i){
        this.setState({ activeMenu : i })
    }
    clickSearch(searchWord){
        let { page_size } = this.props;
        this.list(1 ,page_size ,searchWord);
    }
    changePage(page){
        if(!page) return;
        let { page_size ,searchWord } = this.state ;
        this.setState({ page } ,()=>{
            this.list(page ,page_size ,searchWord)
        })
    }
    list(page ,page_size ,searchWord){
        if(searchWord){
            butter.post.search(searchWord ,{ page, page_size }).then((response)=> {
                this.setState({
                    articles: response.data.data ,
                    total: response.data.meta.count ,
                    previous_page: response.data.meta.previous_page ,
                    next_page: response.data.meta.next_page ,
                    searchWord
                });
            })
        }else{
            butter.post.list({ page, page_size }).then((response)=> {
                this.setState({
                    articles: response.data.data ,
                    total: response.data.meta.count ,
                    previous_page: response.data.meta.previous_page ,
                    next_page: response.data.meta.next_page
                });
            })
        }
    }
}
export default Home