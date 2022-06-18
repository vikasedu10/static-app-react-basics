import './App.css';
import { Homepage } from './Homepage';
import { About } from './About';
import { Contact } from './Contact';
import { AddTodo } from './AddTodo';
import { Header } from './Header';
import { Todo } from './Todo';
import { Todos } from './Todos';
import { Footer } from './Footer';

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("OnDelete pressed of ", todo);
    setTodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("Adding this todo", title, description);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodo([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>

      <Router>
        <Header title="Siksha" searchBar="true" />
        <Routes>
          <Route path="/" element={<Learn />} />

          <Route path="/todos" element={<><AddTodo /><Todos todos={todos} onDelete={onDelete} /></>} />

          <Route path="/learn" element={<Learn />}>
            <Route path='courses' element={<Courses />}>
              <Route path=':courseid' element={<CourseId />} />
            </Route>
            <Route path='bundles' element={<Bundles />} />
          </Route>
          <Route path='/courseView' element={<CourseView />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/learn" element={<Learn />} /> */}

        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

function Learn() {
  return (
    <>
      <div className='container col-sm-8 my-4'>
        <h2>
          Learning courses & bundles
        </h2>
        <hr />
        <p>We are commmited to provide free software for taking online exams</p>
        <Link className='btn btn-sm btn-primary' to="/learn/courses">Courses</Link> |
        <Link className='btn btn-sm btn-primary' to="/learn/bundles">Bundles</Link>
        <Outlet />
      </div>
    </>
  )
}

function Courses() {
  const courseList = ['Angular', 'React', 'Django']
  const randomCourse = courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <>
      <h1>Courses list</h1>
      <p>These will contain list of courses</p>

      <p>Select course from below</p>
      <h3>
        <NavLink
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "blue" : "white"
            }
          }}
          to={`/learn/courses/${randomCourse}`}>{randomCourse}
        </NavLink> |
        <NavLink to={`/learn/courses/test`} className='btn btn-sm btn-success'>Test</NavLink>
      </h3>
      <Outlet />
    </>
  )
}
function Bundles() {
  return (
    <>
      <h1>Bundles list</h1>
      <p>These will contain list of bundles</p>
    </>
  )
}
function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();
  return (
    <>
      <h1>URL Param : {courseid}</h1>
      <button
        onClick={() => {
          navigate('/courseView', { state: '399' });
        }}
        className='btn btn-outline btn-sm btn-primary'>
        View Course
      </button>
    </>
  )
}
function CourseView() {
  const location = useLocation();

  return (
    <>
      <div className='container'>

        <h1>Below is the information about the course:</h1>
        <hr />
        <p>Price: {location.state}</p>
      </div>
    </>
  )
}
export default App;
