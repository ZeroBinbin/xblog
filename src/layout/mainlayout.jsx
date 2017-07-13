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
        window.addEventListener("keydown",  this.keyListener = (event)=> {
            if (event.keyCode == 13) {
                this.onClickSearch();
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener("keydown" ,this.keyListener);
    }

    render(){
        let { children } = this.props;
        return <div>
            <nav className={ styles.navbarFixTop }>
                <div className={ styles.widthLimit }>
                    ZeroBinBin的博客
                    <span className={ styles.search } >
                        <input id="search" placeholder="搜索" onChange={ this.changeSearch.bind(this) }  />
                        <span style={{ cursor: 'pointer'}}
                              className="iconfont icon-search"
                              onClick={ this.onClickSearch.bind(this) } ></span>
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
    changeSearch(e){
        let target = e.target ;
        if(target.value !== ""){
            target.className = target.className + " " + styles.focus
        }else{
            target.className = target.className.replace(" " + styles.focus ,"");
        }
    }
}
export default MainLayout