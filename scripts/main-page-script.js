import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const arrayList = [];

function update(){
  let HTMLList = '';
  arrayList.forEach((attribute,index) => {
    HTMLList += `
      <div class="tasks-container">
          <div class="numerotation-container">
            <p class="task-attribute num-corner">${index+1}</p>
          </div>
          <div class="task-name-container">
            <p class="task-attribute name-js">${attribute.name}</p>
          </div>
          <div class="due-date">
            <p class="task-attribute date-js">${attribute.due_date}</p>
          </div>
          <div class="status-container">
            <p class="task-attribute status-corner">${attribute.status}</p>
          </div>
          <div class="delete-buttons-container">
            <button class="delete-button" >Delete</button>
          </div>
          <div class="edit-buttons-container">
            <button class="edit-button" onclick="
              document.querySelector('.edit-task')
                .classList.add('home');
              const name = document.querySelector('.task-name-js');
              const date = document.querySelector('.task-date-js');
              name.value = document.querySelector('.name-js').innerHTML;
              date.value = document.querySelector('.date-js').innerHTML;
              curr_index = ${index};
            ">Edit</button>
          </div>
      </div>
    `;

  });
  
  document.querySelector('.task-flexbox')
    .innerHTML = HTMLList;

  document.querySelectorAll('.delete-button')
  .forEach((deleteButton, ind) => {
    deleteButton.addEventListener('click', () => {
      arrayList.splice(ind,1);
      update();
    });
  });
}


function checkDate(date){
  let sta = 'OK';
  // The status is based on the current date and the due date
  const curr_date = dayjs();
  const due_date = dayjs(date);
  const curr_date_day = Number(curr_date.format('D')),curr_date_month = Number(curr_date.format('M')),curr_date_year = Number(curr_date.format('YYYY'));
  const due_date_day = Number(due_date.format('D')),due_date_month = Number(due_date.format('M')),due_date_year = Number(due_date.format('YYYY'));

  if(curr_date_year - due_date_year > 0)
    return 'ERROR';
  if(curr_date_month - due_date_month > 0 && curr_date_year === due_date_year)
    return 'ERROR';
  if(curr_date_day - due_date_day > 0 && curr_date_month === due_date_month)
    return 'ERROR';

  if(curr_date_day === due_date_day && curr_date_month === due_date_month)
    return 'DUE SOON';

  return 'OK';
}

  document.querySelector('.add-button')
    .addEventListener('click',() => {
      document.querySelector('.add-task')
        .classList.add('home');
      const name = document.querySelector('.task-name-js');
      const date = document.querySelector('.task-date-js');
      name.value = '';
      date.value = '';
    });

  document.querySelector('.exit-button')
    .addEventListener('click',() => {
      document.querySelector('.add-task')
        .classList.remove('home');
      document.querySelector('.name-error-js')
        .innerHTML = '';
      document.querySelector('.date-error-js')
        .innerHTML = '';
      document.querySelector('.task-name-js').value = '';
      document.querySelector('.task-date-js').value = '';
    });

    document.querySelector('.exit-edit-button')
    .addEventListener('click',() => {
      document.querySelector('.edit-task')
        .classList.remove('home');
      document.querySelector('.name-error-js')
        .innerHTML = '';
      document.querySelector('.date-error-js')
        .innerHTML = '';
    });

  document.querySelector('.add-task-modal-button')
    .addEventListener('click', () => {
      // Storing in variables the task name and task due date
      const name = document.querySelector('.task-name-js');
      const date = document.querySelector('.task-date-js');
      // Checking if the inputs aren't null
      if(name.value !== '' && date.value !== ''){
        let sta = '';
        sta = checkDate(date.value);

        if(sta === 'OK' || sta === 'DUE SOON'){
          const task = {
            name: name.value,
            due_date: date.value,
            status: sta
          };
          arrayList.push(task);
          update();
          name.value = '';
          date.value = '';
          document.querySelector('.name-error-js')
            .innerHTML = '';
          document.querySelector('.date-error-js')
            .innerHTML = '';
          // Removing the opacity from the add task section
          document.querySelector('.add-task')
            .classList.remove('home');
          }else{
            document.querySelector('.date-error-js')
              .innerHTML = '*Enter a valid task date';
          }
      } else if(name.value === '' && date.value === ''){
        document.querySelector('.name-error-js')
          .innerHTML = '*Enter a task name';
        document.querySelector('.date-error-js')
          .innerHTML = '*Enter a task date';
      } else if(date.value === ''){
        document.querySelector('.date-error-js')
          .innerHTML = '*Enter a task date';
      } else if(name.value === ''){
        document.querySelector('.name-error-js')
          .innerHTML = '*Enter a task name';
      }
    });



    document.querySelector('.edit-js')
      .addEventListener('click',() => {
        // Storing in variables the task name and task due date
      const name = document.querySelector('.task-edit-name-js');
      const date = document.querySelector('.task-edit-date-js');
      // Checking if the inputs aren't null
      if(name.value !== '' && date.value !== ''){
        let sta = checkDate(date.value);
        console.log(sta);


        if(sta !== 'ERROR'){
          const task = {
            name: name.value,
            due_date: date.value,
            status: sta
          };
          arrayList[curr_index] = task;
          console.log(arrayList[curr_index]);
          update();
          name.value = '';
          date.value = '';
          document.querySelector('.name-error-js')
            .innerHTML = '';
          document.querySelector('.date-edit-error-js')
            .innerHTML = '';
          document.querySelector('.edit-task')
            .classList.remove('home');
        }else{
          document.querySelector('.date-edit-error-js')
            .innerHTML = '*Enter a valid task date'; 
        }
      } else if(name.value === '' && date.value === ''){
        document.querySelector('.name-error-js')
          .innerHTML = '*Enter a task name';
        document.querySelector('.date-error-js')
          .innerHTML = '*Enter a task date';
      } else if(date.value === ''){
        document.querySelector('.date-error-js')
          .innerHTML = '*Enter a task date';
      } else if(name.value === ''){
        document.querySelector('.name-error-js')
          .innerHTML = '*Enter a task name';
      }
      }); 

      document.querySelector('.signup-button')
        .addEventListener('click',() => {
          window.location = '../register.html';
        });