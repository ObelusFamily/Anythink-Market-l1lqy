import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.searchKeyword?.length > 0) {
    return (
      <div className="d-flex justify-content-center">
        <div
          id="empty"
          className="text-center col-4 py-5 mt-4"
          style={{ backgroundColor: "#FFFFFF4d" }}
        >
          No items found for "<strong>{props.searchKeyword}</strong>".
        </div>
      </div>
    );
  } else if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
