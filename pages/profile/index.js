import React from 'react';
import * as Imports from 'components/Imports';




 function Index() {
    const dispatch = Imports.useDispatch();
    const [loading, setLoading] = React.useState();
    const {authUser, users} = Imports.useSelector(Imports.usersSelector);

  const userCards = users?.map((user, i) => (<Imports.UserCard user={user} key={i}/>))
   
    return (
        <Imports.Layout>
        <div className="container feed">
            <div className="user-cards">
                {userCards}
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

