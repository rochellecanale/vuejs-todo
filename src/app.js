var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World",
        todo: null,
        editTodo: null,
        todos: []
    },
    computed: {
        todoIsValid() {
            return !!this.todo;
        },
        editTodoIsValid() {
            return !!this.editTodo;
        },
        isBeingEdited() {
            return this.todos
            .filter(todo => todo.isEdited)
            .length > 0;
        }
    },
    methods: {
        add(todo) {
            if(!this.todoIsValid) {
                return;
            }
            this.todos.push({
                content: todo,
                finished: false,
                isEdited: false
            });
            this.todo = null;
        },
        edit(todo) {
            this.editTodo = todo.content;
            todo.isEdited = true;
        },
        update(todo) {
            if(!this.editTodoIsValid) {
                return;
            }
            todo.content = this.editTodo;
            todo.isEdited = false;
        },
        remove(todo) {
            this.todos = this.todos.filter((item) => {
                return item !== todo
            })
        }
    }
})