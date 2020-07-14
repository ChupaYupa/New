import React, { useState } from "react";
import s from "./paginator.module.css";
import cn from "classnames";
const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize); // количество отображаемых users
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let iconCount = Math.ceil(pagesCount / portionSize); //кол-во элементов в paginator
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1; //1
  let rightPortionNumber = portionNumber * portionSize; //10
  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter((u) => u >= leftPortionNumber && u <= rightPortionNumber)
        .map((u) => {
          return (
            <span
              className={cn(
                { [s.selectedPage]: currentPage === u },
                s.pageNumber
              )}
              key={u}
              onClick={(e) => {
                onPageChanged(u);
              }}
            >
              {u}
            </span>
          );
        })}
      {iconCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};
export default Paginator;
