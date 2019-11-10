import ReactDOM from "react-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/now/now.css";
import "assets/now/nucleo.css";
// pages for this kit

import ApolloProvider from "./ApolloProvider";
console.log(ApolloProvider);

ReactDOM.render(ApolloProvider, document.getElementById("root"));
