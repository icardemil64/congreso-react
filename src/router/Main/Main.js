import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "wouter";

import Hero from "../../pages/Hero/Hero";
import Congress from "../../pages/Congress/Congress";

const Main = () => {
  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={Hero} />
          <Route path="/builder" component={Congress} />
        </Switch>
      </AnimatePresence>
    </>
  );
};
export default Main;
