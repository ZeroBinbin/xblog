import React from 'react';
import styles from './mainlayout.less';

class MainLayout extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.params){
            document.getElementById("search").value = this.props.params.searchWord || "" ;
        }
    }
    render(){
        let { children } = this.props;
        return <div>
            <nav className={ styles.navbarFixTop }>
                <div className={ styles.widthLimit }>
                    ZeroBinBin的博客
                    <span className={ styles.search } >
                        <input id="search" placeholder="搜索"  />
                        <span style={{ cursor: 'pointer'}}
                              className="iconfont icon-search"
                              onClick={ this.onClickSearch } ></span>
                    </span>
                </div>
            </nav>
            { children }
        </div>
    }
    onClickSearch(){
        let { clickSearch = ()=>{} } = this.props ,searchWord = document.getElementById("search").value;
        clickSearch(searchWord === "" ? null : searchWord);
    }
}
export default MainLayout