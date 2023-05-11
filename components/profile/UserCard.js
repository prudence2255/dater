import React from "react";
import { LikeIcon, MessageIcon } from "components/Icons";
import Link from "next/link";
import * as A from "components/Imports";
import { like, unlike } from "store/actions/likeAction";
import { isPresent } from "components/helpers/isPresent";
import { likesSelector } from "store/slices/likesSlice";

export default function UserCard({ user }) {
  const [isLike, setIsLike] = React.useState(null);
  const { likes } = A.useSelector(likesSelector);

  const { username, profile_pictures, first_name, age, active } = user;
  const router = A.useRouter();
  const dispatch = A.useDispatch();
  const cookies = new A.Cookies();

  React.useEffect(() => {
    setIsLike(isPresent(likes, user));
  }, [likes?.length > 0 && likes[0].id, user.id]);

  const sendMessage = () => {
    router.push(`/profile/messages?mid=${username}`);
  };

  /**
   * handles like and dislike
   */

  const handleLike = () => {
    if (isLike) {
      setIsLike(false);
      dispatch(
        unlike({
          url: `/api/unlike`,
          body: { client_id: user.id },
          cookie: cookies.get("token"),
        })
      );
    } else {
      setIsLike(true);
      dispatch(
        like({
          url: `/api/like`,
          body: { client_id: user.id },
          cookie: cookies.get("token"),
        })
      );
    }
  };

  return (
    <div className="user-card">
      <div className="card img">
        <Link href={`/profile/[username]`} as={`/profile/${username}`}>
          <a>
            <img
              className="card-img-top img-fluid user-card-img"
              src={profile_pictures?.photos?.small ?? `/male-avatar.png`}
              alt="profile picture"
            />
          </a>
        </Link>
        <div className="card-body">
          <Link href={`/profile/[username]`} as={`/profile/${username}`}>
            <a>
              <div className="user-name">
                <b>
                  {first_name},
                  <span
                    className={`status ${active ? "active" : "not-active"}`}
                  ></span>
                </b>

                {age}
              </div>
            </a>
          </Link>
          <div className="user-icons">
            <button onClick={sendMessage}>
              <span>
                <MessageIcon size={25} title={`Message ${first_name}`} />
              </span>
            </button>
            <button
              className={`like-btn ${isLike ? "liked" : ""}`}
              onClick={handleLike}
            >
              <span>
                <LikeIcon
                  size={25}
                  title={`${isLike ? "Unlike" : "Like"} ${first_name}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
