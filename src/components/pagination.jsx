import React from 'react';
import styles from './pagination.less';


class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    getRange(totalPage ,page){
        let start = 1 ,end = totalPage ;
        if(page - start >= 3){
            start = page - 3 ;
        }
        if(end - page >= 3){
            end  = page + 3
        }
        return {
            start ,
            end
        }
    }
    render() {
        let { total ,page ,page_size ,changePage ,previous_page ,next_page } = this.props;
        let totalPage = Math.ceil(total / page_size) ;
        let range = this.getRange(totalPage ,page) ;
        return <div className={ styles.pagination }>
            <span onClick={ ()=>{ changePage(previous_page) } }>上一页</span>
            {
                (()=>{
                    let p = [] ;
                    for(var i = range.start ;i<=range.end ;i++){
                        p.push(<span onClick={ ((i)=>{ changePage(i) }).bind(this ,i) }>{ i }</span>)
                    }
                    return p;
                })()
            }
            <span onClick={ ()=>{ changePage(next_page) } }>下一页</span>
        </div>
    }
}

export default Pagination ;