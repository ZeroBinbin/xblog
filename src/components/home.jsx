import React from 'react';
import Butter from 'buttercms';
import List from './list.jsx';
import styles from './home.less';
import MainLayout from '../layout/mainlayout.jsx';

const butter = Butter("96a3af80d38da4a1925f455895d63270e480d191");

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : [] ,
            menus : ["目录" ,"其他"] ,
            activeMenu : 0
        };
    }
    componentWillMount(){
        butter.post.list({ page: 1, page_size: 10 }).then((response)=> {
            this.setState({ articles : response.data.data});
        })
    }
    render(){
        let { articles ,activeMenu ,menus } = this.state;
        return <MainLayout>
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
            </div>
        </MainLayout>
    }
    changeActiveMenu(i){
        this.setState({ activeMenu : i })
    }
}
export default Home