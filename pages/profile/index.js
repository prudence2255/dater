import React from "react";
import * as Imports from "components/Imports";
import Welcome from "components/profile/Welcome";
import InfiniteScroll from "components/profile/InfiniteScroll";
import { FiltersIcon } from "../../components/Icons";
import Filters from "../../components/profile/Filters";
import { getLikes } from "store/actions/likeAction";

function Index() {
  const [show, setShow] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(true);
  const [filtersModal, setFiltersModal] = React.useState();
  const [queryLoading, setQueryLoading] = React.useState(false);
  const { authUser, users, usersPag, queryParams } = Imports.useSelector(
    Imports.usersSelector
  );

  const cookies = new Imports.Cookies();
  const userCards = users?.map((user, i) => (
    <Imports.UserCard user={user} key={i} />
  ));
  const dispatch = Imports.useDispatch();

  const fetchMore = () => {
    if (users?.length >= usersPag?.total) {
      setHasMore(false);
      return;
    }
    dispatch(
      Imports.getUsers({
        url: `/api/clients?page=${usersPag?.current_page + 1}&${queryParams}`,
        cookie: cookies.get("token"),
      })
    );
  };

  return (
    <Imports.Layout>
      {cookies.get("info") && show && (
        <Welcome user={authUser} setShow={setShow} />
      )}
      <div className="container feed">
        <Imports.SpinLoader loading={queryLoading} />
        <Filters
          filtersModal={filtersModal}
          setFiltersModal={setFiltersModal}
          setQueryLoading={setQueryLoading}
          setHasMore={setHasMore}
        />
        <div className="col-md-8 mx-auto card">
          <div className="card-header">
            <div className="best-matches">
              <h4>Best Matches</h4>
              <div>
                <button
                  className="filters-btn"
                  onClick={() => {
                    setFiltersModal(true);
                    dispatch(Imports.setQueryParams(""));
                  }}
                >
                  <FiltersIcon />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="user-cards">
          {users?.length == 0 && <div className="mr-2">Yay!, No Matches </div>}
          <InfiniteScroll
            items={userCards}
            dataLength={users?.length}
            hasMore={hasMore}
            fetchMore={fetchMore}
          />
        </div>
      </div>
    </Imports.Layout>
  );
}

export default Imports.Auth(Index);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
  async ({ store, req }) => {
    const cookie = new Imports.Cookies(req.headers.cookie);
    await store.dispatch(
      Imports.authUser({ url: `/api/auth-user`, cookie: cookie.get("token") })
    );
    await store.dispatch(
      Imports.getUsers({ url: `/api/clients`, cookie: cookie.get("token") })
    );

    await store.dispatch(
      getLikes({ url: `/api/likes`, cookie: cookie.get("token") })
    );
  }
);
