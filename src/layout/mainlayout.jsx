import React from 'react';
import styles from './mainlayout.less';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let { searchWord = "" } = this.props.params ;
        document.getElementById("search").value = searchWord;
    }
    render(){
        let { children } = this.props;
        return <div>
            <nav className={ styles.navbarFixTop }>
                <div className={ styles.widthLimit }>
                    ZeroBinBin的博客
                    <span className={ styles.search } >
                        <input id="search" placeholder="搜索" onClick={ this.onClickSearch.bind(this) } />
                        <span className="iconfont icon-search"></span>
                    </span>
                </div>
            </nav>
            { children }
        </div>
    }
    onClickSearch(e){
        let { clickSearch = ()=>{} } = this.props ,searchWord = e.target.value;
        clickSearch(searchWord);
    }
}
export default MainLayout