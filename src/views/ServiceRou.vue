<template>
  <div>
    <div class="service-page">
      <h1>
        Web Design <br />
        & Framer
      </h1>
      <p>
        Premium Web Design, Development, and SEO services to help your business
        stand out.
      </p>
      <div class="serv">
        <a href="#" class="di-aro"> <i class="fa-solid fa-arrow-down"></i></a>
        <h5>MY SERVICES</h5>
      </div>

      <img src="../assets/services-pc.png" alt="" />
    </div>
    <div class="serve-1">
      <div class="serve">
        <P>CLIENTS</P>
        <h2>150+</h2>
      </div>
      <div class="serve">
        <P>PROJECTS</P>
        <h2>300+</h2>
      </div>
      <div class="serve">
        <p>HAPPY CLIENTS</p>
        <h2>100%</h2>
      </div>
      <div class="serve">
        <P>FOLLOWERS</P>
        <h2>100K</h2>
      </div>
    </div>

    <!-- ===========works=============== -->
    <section class="cont">
      <div v-for="(card, index) in cards" :key="index" class="cont2">
        <div class="content">
          <p>{{ card.work }}</p>
          <h1>{{ card.title }}</h1>
          <img :src="card.image" alt="serve-img" />
          <div>
            <div class="cont1">
              <p>{{ card.div1 }}</p>
              <p>{{ card.div2 }}</p>
            </div>
            <div class="line"></div>
            <div class="cont1">
              <p>{{ card.div3 }}</p>
              <p>{{ card.div4 }}</p>
            </div>
            <div class="line"></div>
            <div class="cont1">
              <p>{{ card.div5 }}</p>
              <p>{{ card.div6 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServeImg from "../assets/workPic-1.jpg";
import ServeImg1 from "../assets/workPic-4.jpg";
import ServeImg2 from "../assets/workPic-3.jpg";
// import server from "../assets/qrcode.png";
// import { ref } from "vue";
export default {
  name: "ServiceRou",
  data() {
    return {
      cards: [
        {
          work: "WEBDESIGN",
          title: "Transforming Your Ideas into Reality",
          image: ServeImg,
          div1: "CONCEPTS",
          div2: "i take time your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality.",
          div3: "UI / UX DESIGN",
          div4: "I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience.",
          div5: "PROTOTYPE",
          div6: "With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.",
        },
        {
          work: "DEVELOPMENT",
          title: "Developing High-Performance Websites and Web Applications",
          image: ServeImg1,
          div1: "FRAMER",
          div2: "I specialize in developing web applications using Framer. From custom animations to complex interactions, I bring your web app to life.",
          div3: "CMS INTEGRATION",
          div4: "I can help you streamline your content management process by integrating a CMS into your website. Say goodbye to manual updates and hello to efficiency.",
          div5: "WEB DESIGN SYSTEM",
          div6: "I use a modular design approach to create a web design system that ensures consistency throughout your website. This results in a professional and cohesive online presence.",
        },
        {
          work: "SEO & CONTENT",
          title: "Boosting Your Website's Organic Search Traffic",
          image: ServeImg2,
          div1: "RESEARCH",
          div2: "I conduct thorough research to identify the best keywords and strategies to improve your website's search engine ranking.",
          div3: "SEO RANKING",
          div4: "My SEO services are designed to improve your website's visibility on search engines, increasing your organic traffic and driving more leads and sales.",
          div5: "SEO SUPPORT",
          div6: "With ongoing SEO support, I ensure that your website stays up-to-date with the latest SEO best practices, keeping you ahead of the competition.",
        },
      ],
    };
  },
};
// Component logic here
</script>

<style scoped>
.service-page {
  /* padding-top: 150px; */
  /* min-height: 100vh; */
  text-align: center;
  padding: 150px 48px 0px 48px;
}

.service-page h1 {
  font-size: 128px;
  font-weight: 400;
  line-height: 110%;
  color: rgb(218 197 167);
  /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}

.service-page p {
  font-size: 22px;
  line-height: 150%;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px 0px;
  font-family: "Chillax Light", "Chillax Light Placeholder", sans-serif;
  color: rgb(218 197 167);
}

.service-page img {
  width: 100%;
  height: 100%;
  display: block;
  object-position: center;
  padding-top: 22px;
}

.serv {
  display: flex;
  justify-content: center;
  gap: 0 30px;
  align-items: center;
  /* padding: 40px 0; */
}

.di-aro {
  border: solid #aca29633 1px;
  border-radius: 50%;
  /* padding: 10px; */
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.di-aro:hover {
  background-color: #23211e;
}

.fa-solid,
.fas {
  font-weight: 600;
  font-size: 18px;
}

.serv h5 {
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 100;
}

.serve-1 {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 70px 48px;
  gap: 0px 10rem;
  width: 100%;
  text-align: center;
}

.serve-1 p {
  font-size: 13px;
  font-weight: 400;
  color: rgb(218 197 167);
  line-height: 120%;
  font-family: "Satoshi Regular", "Satoshi Regular Placeholder", sans-serif;
  letter-spacing: 1.5px;
  opacity: 0.6;
}

.serve-1 h2 {
  font-size: 64px;
  font-weight: 400;
  /* background: radial-gradient(circle, red, blue); */
  color: rgb(218 197 167);
}

.cont2 {
  padding: 20px 48px;
}

.cont {
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 128px 0 50px 0;
  position: relative;
  width: 100%;
}

.content {
  width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  gap: 38px;
  height: min-content;
  border-radius: 2px;
  flex-direction: column;
  background-color: #dac5a70d;
  padding: 64px;
  border: solid 1px rgba(218, 197, 167, 0.15);
}

.content > p {
  text-align: left;
  font-size: 13px;
  line-height: 120%;
  color: rgb(218 197 167);
  font-family: "Satoshi Regular", "Satoshi Regular Placeholder", sans-serif;
  opacity: 0.6;
  letter-spacing: 1.5px;
}

.content > h1 {
  font-size: 64px;
  line-height: 110%;
  letter-spacing: 1px;
  font-weight: 400;
  color: rgb(218 197 167 / 98%);
}

.content img {
  width: 100%;
  height: 100%;
  opacity: 0.8;
  /* background-image: url(../assets/qrcode.png);
  background-size: 128px;
  background-repeat: repeat; */
}

.cont1 {
  display: flex;
  gap: 58px;
  /* align-items: center; */
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 0px;
}

.cont1 p:nth-child(1) {
  font-size: 13px;
  text-align: left;
  line-height: 120%;
  letter-spacing: 1.5px;
  opacity: 0.5;
}

.cont1 p:nth-child(2) {
  font-size: 16px;
  line-height: 160%;
  text-align: start;
  color: rgb(218 197 167);
}

.line {
  width: 100%;
  height: 1px;
  display: flex;
  flex: 1 0 0;
  background-color: rgb(218 197 167 / 17%);
}

@media (max-width: 809px) {
  .service-page p {
    /* padding: 18px 0px; */
    font-size: 18px;
  }

  .service-page h1 {
    font-size: 50px;
  }
  
  .serve-1 h2 {
    font-size: 36px;
  }

  .cont{
    padding-block: 15px;
  }

  .cont2{
    padding: 20px 20px;
  }

  .content{
    padding: 36px  !important;
  }

  .content > h1{
    font-size: 35px;
  }
}

@media (max-width: 1281px) {
  .service-page p {
    font-size: 22px;
  }

  .serve-1 {
    display: grid;
    gap: 30px;
    grid-auto-rows: minmax(0, 1fr);
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    max-width: 1400px;
  }

  .cont1{
    flex-direction: column;
    gap: 16px;
  }

  .cont1 p:nth-child(1) {
    text-align: left;
  }

  .content{
    padding: 48px;
  }
}
</style>
