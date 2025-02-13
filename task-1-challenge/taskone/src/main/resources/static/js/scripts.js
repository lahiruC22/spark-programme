const apiBaseUrl = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;

        try {
            const response = await fetch(`/api/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, completed: false })
            });

            if (!response.ok) {
                // Handle non-successful responses (e.g., 400, 500)
                console.error('Failed to create task. Status:', response.status);
                return; // Stop further execution if request fails
            }

            if (response.ok) {
                loadTasks();
                taskForm.reset();
            }
        } catch (error) {
            console.error('Error creating task:', error);
        }
    });

    async function loadTasks() {
        try {
            const response = await fetch(`/api/tasks`);
            if (!response.ok) {
                console.error('Failed to load tasks. Status:', response.status);
                taskList.innerHTML = '<p>Failed to load tasks.</p>'; // Provide user feedback in UI
                return;
            }
            const tasks = await response.json();
            taskList.innerHTML = '';

            if (tasks.length === 0) {
                taskList.innerHTML = '<p>No tasks yet.</p>'; // Display message when no tasks are available
            } else {
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="${task.completed ? 'completed' : ''}">${task.title}: ${task.description}</span>
                        <button onclick="toggleComplete('${task.id}', ${!task.completed})">
                            ${task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onclick="deleteTask('${task.id}')">Delete</button>
                    `;
                    taskList.appendChild(li);
                });
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
            taskList.innerHTML = '<p>Error loading tasks.</p>'; // Provide user feedback in UI
        }
    }

    // Expose functions to global scope
    window.toggleComplete = async function (id, completed) {
        try {
            const response = await fetch(`/api/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed })
            });
            if (!response.ok) {
                console.error('Failed to toggle task completion. Status:', response.status);
                return;
            }
            loadTasks();
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    window.deleteTask = async function (id) {
        if (confirm('Are you sure you want to delete this task?')) { // Added confirmation dialog
            try {
                const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
                if (!response.ok) {
                    console.error('Failed to delete task. Status:', response.status);
                    return;
                }
                loadTasks();
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    loadTasks();
});