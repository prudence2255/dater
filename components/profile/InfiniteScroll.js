import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {SpinnerLoader} from 'components/Loaders';

export default function InfiniteScroller({dataLength, fetchMore, hasMore, items}) {
    return (
        <InfiniteScroll
          dataLength={dataLength}
          next={fetchMore}
          hasMore={hasMore}
          loader={ <SpinnerLoader /> }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className="scroll-container">
        {items}
        </div>
        </InfiniteScroll>
    )
}
