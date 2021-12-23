<template>
  <div class="start">
    <h3>Registeration Page</h3>
    <div>
      <form action="">
        <label for="first_name">First Name </label>
        <input type="text" name="first_name" required /><br /><br />
        <label for="last_name">Last Name </label>
        <input type="text" name="last_name" required /><br /><br />
        <label for="first_name">Email </label>
        <input type="email" name="email" required /><br /><br />
        <label for="contact_number">Contact Number </label>
        <input type="text" name="contact_number" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
}

export default defineComponent({
  setup() {
    const form = reactive<RegisterForm>({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
    });

    // Register handler
    const register = () => {
      // call to vuex/store here
    };

    return {
      form,
      register,
    };
  },
});
</script>
