import styles from "./Paginator.module.css";
import React from "react";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 1}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portSize

  return (
    <div className={styles.paginator}>
        {portionNumber > 1 && 
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
      {pages.filter(function (p) {
        p >= leftPortionPageNumber && p <= rightPortionPageNumber}).map(function(p) {
            return (
                <span
                  className={cn({[styles.selectPage] : currentPage === p}, styles.pageNumber)}
                  key = {p}
                  onClick={(e) => {onPageChanged(p)}}
                >
                  {p}
                </span>
              );
            })}
            {portionCount > portionNumber && 
            <button onClick={setPortionNumber(portionNumber+ 1)}>NEXT</button>}
    </div>
  );
};

export default Paginator;
