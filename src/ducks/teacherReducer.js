
//initial state

const initialState = {
  loggedIn: false,
  teacherId: null,
  teacher: null,
  name: "",
  email: "",
  phone: "",
  img: "",
  teachers: [],
  categories: [],
  categoryId: null
};

//Action Constants
const SET_TEACHER = " SET_TEACHER";
const GET_ALL_TEACHERS = "GET_ALL_TEACHERS";
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

//Action Builders

export function setTeacher(teacher) {
  return {
    type: SET_TEACHER,
    payload: teacher
  };
}

export function getAllTeachers(allTeachers) {
  return {
    type: GET_ALL_TEACHERS,
    payload: allTeachers
  };
}

export function getCategories(categories) {
  return {
    type: GET_ALL_CATEGORIES,
    payload: categories
  };
}

//Reducer Function

export default function teacherReducer(state = initialState,action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TEACHER:
      return { ...state, ...payload };
    case GET_ALL_TEACHERS:
      return { ...state, allTeachers: payload };
    case GET_ALL_CATEGORIES:
      return { ...state, categories: payload };
  }
}
