<template>
  <div>
    <div
      class="modal"
      :class="{ 'is-active': isActive }"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          Add Note
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input
                v-model="title"
                class="input"
                type="text"
                placeholder="title"
              >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea
                v-model="body"
                class="textarea"
                placeholder="enter content"
              >
                </textarea>
            </div>
          </div>
          <button
            @click="create"
            class="button is-primary is-pulled-right"
          >Post</button>
        </section>
      </div>
      <button
        @click="toggle"
        class="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
    <button
      @click="toggle"
      class="button is-primary is-pulled-right"
    >Create Note</button>
    <br>
  </div>
</template>

<script>
import { createNote } from "../repository/repositoryFire";
export default {
  name: "CreateNoteModal",
  data() {
    return {
      title: "",
      body: "",
      isActive: false,
    };
  },
  methods: {
    async create() {
      let data = { title: this.title, body: this.body };

      const res = await createNote(data);
      this.$emit("createNote", res.note);
      this.title = this.body = "";
      this.toggle();
      /*  .then((data) => {
          console.log(data);

        })
        .catch((err) => alert(err.message)); */
    },
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/bulma.scss";
.button {
  padding: 0.1rem 1rem;
}
</style>
