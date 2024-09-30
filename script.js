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
            <button class="delete-button" onclick="arrayList.splice(${index},1);update();">Delete</button>
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
      //document.querySelector('.task-name-js').value = '';
      //document.querySelector('.task-date-js').value = '';
    });

  document.querySelector('.add-task-modal-button')
    .addEventListener('click', () => {
      // Storing in variables the task name and task due date
      const name = document.querySelector('.task-name-js');
      const date = document.querySelector('.task-date-js');
      // Checking if the inputs aren't null
      if(name.value !== '' && date.value !== ''){
        // The status is based on the current date and the due date
        const curr_date = new Date(); // getting the current date
        const due = new Date(date.value); // transforming the due date from a string into a class object
        let sta = '';
        if((due.getFullYear() === curr_date.getFullYear()) && (due.getMonth() === curr_date.getMonth()) && (due.getDay()-curr_date.getDay()===1)){
          sta = 'DUE SOON';
        }else if((due.getFullYear() === curr_date.getFullYear()) && (due.getMonth() === curr_date.getMonth()) && (due.getDay()-curr_date.getDay()<=0)){
          document.querySelector('.date-error-js')
            .innerHTML = '*Enter a valid task date';
          sta = 'ERROR';
        }else{
          sta = 'OK';
        }
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
        // Removing the opacity from the add task section
        document.querySelector('.edit-task')
          .classList.remove('home');
        // The status is based on the current date and the due date
        const curr_date = new Date(); // getting the current date
        const due = new Date(date.value); // transforming the due date from a string into a class object
        let sta = '';
        if((due.getFullYear() === curr_date.getFullYear()) && (due.getMonth() === curr_date.getMonth()) && (due.getDay()-curr_date.getDay()===1))
          sta = 'DUE SOON';
        else if((due.getFullYear() === curr_date.getFullYear()) && (due.getMonth() === curr_date.getMonth()) && (due.getDay()-curr_date.getDay()<=0))
          document.querySelector('.date-error-js')
            .innerHTML = '*Enter a valid task date';
        else
          sta = 'OK';
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
        document.querySelector('.date-error-js')
          .innerHTML = '';
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
