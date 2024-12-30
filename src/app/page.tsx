"use client";
import { Provider } from "react-redux";
import NavBar from "./_components/nav-bar/nav-bar";
import store from "./_store/store-config";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <NavBar />
      </Provider>
    </div>
  );
}
