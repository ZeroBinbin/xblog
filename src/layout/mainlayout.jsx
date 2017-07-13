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
                              onClick={ this.onClickSearch.bind(this) } ></span>
                    </span>
                </div>
            </nav>
            { children }
        </div>
    }
    onClickSearch(e){
        let { clickSearch = ()=>{} } = this.props ,searchWord = e.target.value;
        clickSearch(searchWord === "" ? null : searchWord);
    }
}
export default MainLayout