import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Header } from "../components/Header";
import { url } from "../const";
<<<<<<< HEAD
import "./home.css";

=======
import "./home.scss";
>>>>>>> 28b21a0 (クリア済み)

export const Home = () => {
  const [isDoneDisplay, setIsDoneDisplay] = useState("todo"); // todo->未完了 done->完了
  const [lists, setLists] = useState([]);
  const [selectListId, setSelectListId] = useState();
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies] = useCookies();
<<<<<<< HEAD
  const handleIsDoneDisplayChange = (e) => setIsDoneDisplay(e.target.value);
  useEffect(() => {
    axios.get(`${url}/lists`, {
      headers: {
        authorization: `Bearer ${cookies.token}`
      }
    })
    .then((res) => {
      setLists(res.data)
    })
    .catch((err) => {
      setErrorMessage(`リストの取得に失敗しました。${err}`);
    })
  }, []);

  useEffect(() => {
    const listId = lists[0]?.id
    if(typeof listId !== "undefined"){
      setSelectListId(listId)
      axios.get(`${url}/lists/${listId}/tasks`, {
        headers: {
          authorization: `Bearer ${cookies.token}`
        }
      })
      .then((res) => {
        setTasks(res.data.tasks)
      })
      .catch((err) => {
        setErrorMessage(`タスクの取得に失敗しました。${err}`);
      })
    }
  }, [lists]);

  const handleSelectList = (id) => {
    setSelectListId(id);
    axios.get(`${url}/lists/${id}/tasks`, {
      headers: {
        authorization: `Bearer ${cookies.token}`
      }
    })
    .then((res) => {
      setTasks(res.data.tasks)
    })
    .catch((err) => {
      setErrorMessage(`タスクの取得に失敗しました。${err}`);
    })
  }
=======
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIsDoneDisplayChange = (e) => setIsDoneDisplay(e.target.value);

  // リストの取得
  useEffect(() => {
    axios
      .get(`${url}/lists`, {
        headers: {
          authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        setErrorMessage(`リストの取得に失敗しました。${err}`);
      });
  }, []);

  // 選択中リストのタスク取得
  useEffect(() => {
    const listId = lists[currentIndex]?.id;
    if (listId) {
      setSelectListId(listId);
      axios
        .get(`${url}/lists/${listId}/tasks`, {
          headers: {
            authorization: `Bearer ${cookies.token}`,
          },
        })
        .then((res) => {
          setTasks(res.data.tasks);
        })
        .catch((err) => {
          setErrorMessage(`タスクの取得に失敗しました。${err}`);
        });
    }
  }, [lists, currentIndex]);

  // キーボード操作のハンドリング
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" && currentIndex < lists.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (event.key === "Enter") {
      const selectedListId = lists[currentIndex]?.id;
      if (selectedListId) {
        handleSelectList(selectedListId);
      }
    }
  };

  // リストを選択
  const handleSelectList = (id) => {
    setSelectListId(id);
    axios
      .get(`${url}/lists/${id}/tasks`, {
        headers: {
          authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        setErrorMessage(`タスクの取得に失敗しました。${err}`);
      });
  };

>>>>>>> 28b21a0 (クリア済み)
  return (
    <div>
      <Header />
      <main className="taskList">
        <p className="error-message">{errorMessage}</p>
        <div>
          <div className="list-header">
            <h2>リスト一覧</h2>
            <div className="list-menu">
<<<<<<< HEAD
              <p><Link to="/list/new">リスト新規作成</Link></p>
              <p><Link to={`/lists/${selectListId}/edit`}>選択中のリストを編集</Link></p>
            </div>
          </div>
          <ul className="list-tab">
            {lists.map((list, key) => {
              const isActive = list.id === selectListId;
              return (
                <li 
                  key={key}
                  className={`list-tab-item ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectList(list.id)}
                >
                  {list.title}
                </li>
              )
=======
              <p>
                <Link to="/list/new">リスト新規作成</Link>
              </p>
              <p>
                <Link to={`/lists/${selectListId}/edit`}>
                  選択中のリストを編集
                </Link>
              </p>
            </div>
          </div>
          <ul className="list-tab" role="tablist">
            {lists.map((list, index) => {
              const isActive = index === currentIndex;
              return (
                <li
                  key={list.id}
                  className={`list-tab-item ${isActive ? "active" : ""}`}
                  aria-selected={isActive}
                  onClick={() => setCurrentIndex(index)}
                  onKeyDown={handleKeyDown}
                  tabIndex={0} // フォーカス可能
                  role="tab"
                >
                  {list.title}
                </li>
              );
>>>>>>> 28b21a0 (クリア済み)
            })}
          </ul>
          <div className="tasks">
            <div className="tasks-header">
              <h2>タスク一覧</h2>
              <Link to="/task/new">タスク新規作成</Link>
            </div>
            <div className="display-select-wrapper">
<<<<<<< HEAD
              <select onChange={handleIsDoneDisplayChange} className="display-select">
=======
              <select
                onChange={handleIsDoneDisplayChange}
                className="display-select"
              >
>>>>>>> 28b21a0 (クリア済み)
                <option value="todo">未完了</option>
                <option value="done">完了</option>
              </select>
            </div>
<<<<<<< HEAD
            <Tasks tasks={tasks} selectListId={selectListId} isDoneDisplay={isDoneDisplay} />
=======
            <Tasks
              tasks={tasks}
              selectListId={selectListId}
              isDoneDisplay={isDoneDisplay}
            />
>>>>>>> 28b21a0 (クリア済み)
          </div>
        </div>
      </main>
    </div>
<<<<<<< HEAD
  )
}

// 表示するタスク
const Tasks = (props) => {
  const { tasks, selectListId, isDoneDisplay } = props;
  if (tasks === null) return <></>

  if(isDoneDisplay == "done"){
    return (
      <ul>
        {tasks.filter((task) => {
          return task.done === true
        })
        .map((task, key) => (
          <li key={key} className="task-item">
            <Link to={`/lists/${selectListId}/tasks/${task.id}`} className="task-item-link">
              {task.title}<br />
              {task.done ? "完了" : "未完了"}
            </Link>
          </li>
        ))}
      </ul>
    )
=======
  );
};

// タスク一覧コンポーネント
const Tasks = ({ tasks, selectListId, isDoneDisplay }) => {
  const calculateRemainingTime = (deadline) => {
    if (!deadline) return null;
    const currentTime = new Date();
    const deadlineTime = new Date(deadline);
    const timeDiff = deadlineTime - currentTime;
    if (timeDiff <= 0) return "期限切れ";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}日 ${hours}時間 ${minutes}分`;
  };

  const filteredTasks = tasks.filter(
    (task) => (isDoneDisplay === "done" ? task.done : !task.done)
  );

  if (!filteredTasks.length) {
    return <p>表示するタスクがありません。</p>;
>>>>>>> 28b21a0 (クリア済み)
  }

  return (
    <ul>
<<<<<<< HEAD
      {tasks.filter((task) => {
        return task.done === false
      })
      .map((task, key) => (
        <li key={key} className="task-item">
          <Link to={`/lists/${selectListId}/tasks/${task.id}`} className="task-item-link">
            {task.title}<br />
            {task.done ? "完了" : "未完了"}
=======
      {filteredTasks.map((task) => (
        <li key={task.id} className="task-item">
          <Link
            to={`/lists/${selectListId}/tasks/${task.id}`}
            className="task-item-link"
          >
            <div>{task.title}</div>
            <div>{task.done ? "完了" : "未完了"}</div>
            {task.limit && (
              <>
                <div>期限: {new Date(task.limit).toLocaleString()}</div>
                <div>残り: {calculateRemainingTime(task.limit)}</div>
              </>
            )}
>>>>>>> 28b21a0 (クリア済み)
          </Link>
        </li>
      ))}
    </ul>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 28b21a0 (クリア済み)
