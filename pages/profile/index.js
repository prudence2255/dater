import React from 'react';
import * as Imports from 'components/Imports';
import Welcome from 'components/profile/Welcome';
import InfiniteScroll from 'components/profile/InfiniteScroll';




 function Index() {
    const [show, setShow] = React.useState(true);
    const [hasMore, setHasMore] = React.useState(true);
    const {authUser, users, usersPag} = Imports.useSelector(Imports.usersSelector);
    
   const cookies = new Imports.Cookies();
    const userCards = users?.map((user, i) => (<Imports.UserCard user={user} key={i}/>))
    const dispatch = Imports.useDispatch();



  const fetchMore = () => {
      if(users?.length >= usersPag?.total){
          setHasMore(false)
          return;
         }
         dispatch(Imports.getUsers({url: `/api/clients?page=${usersPag?.current_page + 1}`, cookie: cookies.get("token")}));
        }

    return (
        <Imports.Layout>
        {cookies.get("info") && show && (
            <Welcome user={authUser} setShow={setShow}/>
        )}
        <div className="container feed">
        <div className="col-md-8 mx-auto card">
            <div className="card-header">
                <h4>Best Matches</h4>
            </div>
        </div>
            <div className="user-cards">
            <InfiniteScroll 
            items={userCards}
            dataLength={users?.length}
            hasMore={hasMore}
            fetchMore={fetchMore}
             />
             </div>
         </div>
        </Imports.Layout>
    )
}


export default Imports.Auth(Index);

export const getServerSideProps = Imports.wrapper.getServerSideProps(
    async ({store, req,}) => {
        const cookie = new Imports.Cookies(req.headers.cookie);
       await store.dispatch(Imports.authUser({url: `/api/auth-user`, cookie: cookie.get("token")}));
       await store.dispatch(Imports.getUsers({url: `/api/clients`, cookie: cookie.get("token")}));
    }
  );

