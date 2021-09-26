import { Route } from "wouter";

import Builder from "../../components/Builder/Builder";
import Hero from "../../components/Hero/Hero";

const Main = () => {
  return (
    <>
      <Route path="/" component={Hero} />
      <Route path="/builder" component={Builder} />
    </>
  );
};
export default Main;
