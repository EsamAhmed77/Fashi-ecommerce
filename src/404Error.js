import React, {useEffect} from "react"

//
import "./Layout/components/style/404Error.scss";

export default () => {

  useEffect(() => {
    document.title = "Error"
  });

  return <div id="not-found">
    <h1>404</h1>
    <h1>Not found</h1>
  </div>
}