import React from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
>>>>>>> 28b21a0 (クリア済み)
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { NewTask } from "../pages/NewTask";
import { NewList } from "../pages/NewList";
import { EditTask } from "../pages/EditTask";
import { SignUp } from "../pages/SignUp";
import { EditList } from "../pages/EditList";

export const Router = () => {
<<<<<<< HEAD
  const auth = useSelector((state) => state.auth.isSignIn)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {auth ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/task/new" component={NewTask} />
            <Route exact path="/list/new" component={NewList} />
            <Route exact path="/lists/:listId/tasks/:taskId" component={EditTask} />
            <Route exact path="/lists/:listId/edit" component={EditList} />
          </>
        ) : (
          <Redirect to="/signin" />
        )}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
=======
  const auth = useSelector((state) => state.auth.isSignIn);

  return (
    <BrowserRouter>
      <Routes>
        {/* サインインページ */}
        <Route path="/signin" element={<SignIn />} />
        {/* サインアップページ */}
        <Route path="/signup" element={<SignUp />} />

        {/* ユーザーがサインインしている場合 */}
        {auth ? (
          <>
            {/* ホームページ */}
            <Route path="/" element={<Home />} />
            {/* 新しいタスク作成 */}
            <Route path="/task/new" element={<NewTask />} />
            {/* 新しいリスト作成 */}
            <Route path="/list/new" element={<NewList />} />
            {/* タスク編集ページ */}
            <Route path="/lists/:listId/tasks/:taskId" element={<EditTask />} />
            {/* リスト編集ページ */}
            <Route path="/lists/:listId/edit" element={<EditList />} />
          </>
        ) : (
          // サインインしていない場合はサインインページにリダイレクト
          <Route path="*" element={<Navigate to="/signin" />} />
        )}

        {/* その他のページ（404 Not Found） */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> 28b21a0 (クリア済み)
