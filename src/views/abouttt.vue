<template>
  <div class="about-page">
    <h1>ALATISHE</h1>
    <h1>OMOLAYO</h1>
    <P
      >Delivering Premium Web Design and Development Services to Boost Your
      Online Presence.</P
    >
    <div class="about-content">
      <div class="about-section">
        <h2>Who I Am</h2>
        <p>
          I'm a passionate web developer with expertise in creating modern,
          responsive websites and applications.
        </p>
      </div>

      <div class="about-section">
        <h2>My Skills</h2>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Experience</h2>
        <div class="experience-timeline">
          <div class="timeline-item" v-for="exp in experience" :key="exp.title">
            <h3>{{ exp.title }}</h3>
            <p class="date">{{ exp.date }}</p>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: "Web Development",
    description: "Building responsive and interactive websites",
  },
  {
    name: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces",
  },
  {
    name: "Frontend",
    description: "Expertise in modern frontend technologies",
  },
  {
    name: "Backend",
    description: "Server-side development and database management",
  },
];

const experience = [
  {
    title: "Senior Web Developer",
    date: "2020 - Present",
    description:
      "Leading development teams and creating innovative web solutions",
  },
  {
    title: "Web Developer",
    date: "2023 - 2024",
    description: "Developing and maintaining client websites and applications",
  },
  {
    title: "National Diploma",
    date: "2022 - 2024",
    description:
      "Earned my National Diploma in Computer Science from AAPOLY (Ijebu-Igbo).",
  },
  {
    title: "Cisco Get Connected Certificate",
    date: "2024",
    description:
      "Earned during my time at AAPOLY. Focused on the basics of digital skills, internet safety, communication, and productivity tools.",
  },
  {
    title: "Cisco ITE Certificate (Information Technology Essentials)",
    date: "2024",
    description:
      "Completed hands-on training in computer hardware, software, networking, and troubleshooting. Provided a strong technical foundation for IT support and system maintenance.",
  },
];
</script>

<style scoped>
.about-page {
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #0e0e0e;
  color: #edd6b6;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.about-section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: rgba(14, 14, 14, 0.5);
  border: 1px solid rgba(225, 225, 225, 0.18);
  padding: 1.5rem;
  border-radius: 5px;
}

.experience-timeline {
  margin-top: 2rem;
}

.timeline-item {
  margin-bottom: 2rem;
  padding-left: 2rem;
  border-left: 2px solid #edd6b6;
}

.timeline-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.date {
  color: #aca296;
  margin-bottom: 0.5rem;
}
</style>
