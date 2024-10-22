document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Crear un nuevo elemento de lista
        const newTask = document.createElement('li');
        
        // Crear un checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        // Crear un span para el texto de la tarea
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        // Agregar el checkbox y el texto de la tarea al nuevo elemento de lista
        newTask.appendChild(checkbox);
        newTask.appendChild(taskText);

        // Agregar la nueva tarea a la lista
        taskList.appendChild(newTask);

        // Limpiar el campo de entrada
        taskInput.value = '';

        // Agregar evento para marcar como completada
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskText.classList.add('completed');
            } else {
                taskText.classList.remove('completed');
            }
        });
    });
});
