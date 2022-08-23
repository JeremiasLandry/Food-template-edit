import {saveTask} from './firebase.js'

window.addEventListener('DOMContentLoaded', ()=>{

})

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('agregar loader');

    const name = taskForm['task-name']
    const phone = taskForm['task-phone']
    const email = taskForm['task-email']
    const people = taskForm['task-people']
    const date = taskForm['task-date']

    saveTask(name.value, phone.value, email.value, people.value, date.value)

    taskForm.reset()
})