import usersRequest from "./request";
import { Notify } from "notiflix";
import { doc } from "prettier";
import './toIndex'

const refs = {
    form: document.querySelector('.search-form')
}
// console.log(refs.form);

refs.form.addEventListener('submit', submitHandler)

 function submitHandler(e) {
  e.preventDefault()

  // usersRequest()

  // .catch(error => console.log(error))
}

