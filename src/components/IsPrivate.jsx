import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function IsPrivate(props) {
  const { loading, loggedIn } = useContext(AuthContext);

  // check if page is loading
  if (loading)
    return <p>Preparing baskets... You'll get your products soon 🤤</p>;

  // check if user is logged in
  if (!loggedIn) {
    // if it's not logged in send user to login page
    return <Navigate to="/login" />;
  } else {
    // if is logged in return children that represent the page we're trying to protect with this funtion
    return props.children;
  }
}

export default IsPrivate;
