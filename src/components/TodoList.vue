<template>
  <div>
    <div class="col align-self-center">
      <h3 class="pb-5 text-left underline">Todo List</h3>
      <form class="sign-in" @submit.prevent>
        <div class="form-group todo__row">
          <input
            type="text"
            class="form-control"
            @keypress="typing = true"
            placeholder="What do you want to do?"
            v-model="title"
            @keyup.enter="addTodo()"
          />
          <small class="form-text text-muted" v-show="title.length !== 0">Hit enter to save</small>
        </div>
      </form>
    </div>

    <div v-bind:show="todos.length > 0" class="col align-self-center">
      <div class="form-row align-items-center" v-for="(todo, index) in todos" :key="index">
        <div class="col-auto my-1">
          <div class="input-group mb-3 todo__row">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <input
                  type="checkbox"
                  v-model="todo.done"
                  :checked="todo.done"
                  :value="todo.done"
                  v-on:change="updateTodo(todo)"
                  title="Mark as done?"
                />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              :class="todo.done ? 'todo__done' : ''"
              v-model="todo.title"
              @keypress="todo.editing = true"
              @keyup.enter="updateTodo(todo)"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span
                  class="input-group-addon addon-left"
                  title="Delete todo?"
                  v-on:click="deleteTodo(todo._id)"
                >X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="alert alert-primary todo__row"
        v-show="todos.length === 0"
      >Hardest worker in the room. No more todos now you can rest. ;)</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      todos: [],
    };
  },
  created: function () {
    this.fetchTodo();
  },
  methods: {
    async addTodo() {
      try {
        let todo = {
          title: this.title,
          done: false, //false by default
        };
        if (this.title) {
          console.log(todo);
          const result = await this.$http.post("/", todo);
          if (result) {
            this.clearTodo();
            this.fetchTodo();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    clearTodo() {
      this.title = "";
    },

    async fetchTodo() {
      try {
        const result = await this.$http.get("/");
        if (result) {
          this.todos = result.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async updateTodo(todo) {
      try {
        let id = todo._id;
        const result = await this.$http.put(`/${id}`, todo);
        if (result) {
          console.log("response from database", result);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTodo(id) {
      try {
        const result = await this.$http.delete(`/${id}`);
        console.log(result);
        if (result) {
          this.fetchTodo();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.underline {
  text-decoration: underline;
}

.todo__done {
  text-decoration: line-through !important;
}

.no_border_left_right {
  border-left: 0px;
  border-right: 0px;
}

.flat_form {
  border-radius: 0px;
}

.mrb-10 {
  margin-bottom: 10px;
}

.addon-left {
  background-color: none !important;
  border-left: 0px !important;
  cursor: pointer !important;
}

.addon-right {
  background-color: none !important;
  border-right: 0px !important;
}
</style>
