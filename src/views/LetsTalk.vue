<template>
  <div class="lets-talk-page">
    <h1>Let's Talk</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>

        <div class="contact-methods">
          <div class="contact-method">
            <h3>Email</h3>
            <p>your.email@example.com</p>
          </div>
          <div class="contact-method">
            <h3>Location</h3>
            <p>Your City, Country</p>
          </div>
        </div>

        <div class="social-links">
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>

      <div class="contact-form">
        <form
          @submit.prevent="handleSubmit"
          action="https://ayodelealatishe@gmail.com"
          method="POST"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log("Form submitted:", form.value);
  // Reset form
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
.lets-talk-page {
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #edd6b6;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.contact-methods {
  margin: 2rem 0;
}

.contact-method {
  margin-bottom: 1.5rem;
}

.contact-method h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  color: #edd6b6;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #edd6b6;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #edd6b6;
  color: #0e0e0e;
}

.contact-form {
  background: rgba(14, 14, 14, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.18);
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  background: rgba(14, 14, 14, 0.8);
  border: 1px solid rgba(225, 225, 225, 0.18);
  border-radius: 4px;
  color: #edd6b6;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background: transparent;
  color: #edd6b6;
  border: 1px solid #edd6b6;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: #edd6b6;
  color: #0e0e0e;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
