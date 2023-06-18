"use client"; // 認証判定で使用

import ReactPaginate from "react-paginate";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type PaginationType = {
  allCnt: number;
  perPage: number;
  clickPagenation({ selected }: { selected: number }): void;
};

/*
|--------------------------------------------------------------------------
| ページネーション
|--------------------------------------------------------------------------
*/
const MyPagenation = ({ allCnt, perPage, clickPagenation }: PaginationType) => {
  return (
    <>
      <ReactPaginate
        previousLabel={<ChevronLeftIcon className="h-5 w-5" />}
        nextLabel={<ChevronRightIcon className="h-5 w-5" />}
        breakLabel={"..."}
        pageCount={Math.ceil(allCnt / perPage)}
        // initialPage={page - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={clickPagenation}
        containerClassName={
          "z-0 inline-flex rounded -space-x-px text-sm bg-white"
        }
        pageLinkClassName={
          "border border-gray-100 hover:bg-primary hover:text-white inline-flex items-center px-3 py-2"
        }
        activeLinkClassName={
          "z-10 bg-primary text-white border border-primary inline-flex items-center px-3 py-2"
        }
        breakLinkClassName={
          "inline-flex items-center px-3 py-2 border border-gray-100"
        }
        previousLinkClassName={
          "inline-flex items-center px-2 py-2 rounded-l border border-gray-100 hover:bg-primary hover:text-white"
        }
        nextLinkClassName={
          "inline-flex items-center px-2 py-2 rounded-r border border-gray-100 hover:bg-primary hover:text-white"
        }
        disabledClassName={"hidden"}
      />
    </>
  );
};

export default MyPagenation;
