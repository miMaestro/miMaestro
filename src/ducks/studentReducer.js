//initial state

const initialState = {
  loggedIn: false,
  studentId: null,
  student: null,
  name: "",
  email: "",
  phone:'',
  img:'',
  students: []
};

//Action constants
const SET_STUDENT = "SET_STUDENT";
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";

//Action Builders

export function setStudent(student) {
  return {
    type: SET_STUDENT,
    payload: student
  };
}

export function getAllStudents(allStudents) {
  return {
    type: GET_ALL_STUDENTS,
    payload: allStudents
  };
}

// Reducer function

export default function studentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_STUDENT:
      return { ...state, ...payload };
    case GET_ALL_STUDENTS:
      return { ...state, allStudents: payload };
    default:
      return state;
  }
}
