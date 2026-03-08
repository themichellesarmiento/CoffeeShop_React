import Hero from "../../HomeComponents/Hero";
import SectionGroup from "../../HomeComponents/SectionGroup"

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <SectionGroup imageSrc='drink_of_the_month.jpg' altText='a cup of coffee' title='Drink of the month' text='In March, we are making an exception and giving you double the treat. The cold weather is sticking around a little longer, so this month we are featuring two drinks of the month: a warming Hot Chocolate for chilly days, or an Ice Latte Caramel for those who prefer something cold.' buttonText='Menu' />
        <SectionGroup imageSrc='we_deliver.jpg' altText='coffee pouring' title='Cater with us!' text='Stack Brew cater delicious breakfast, lunch and "fika" directly to your office. Perfect for meetings, conferences or a as an appreciated pause during the work week!.' buttonText='Read more about catering' />
        <SectionGroup imageSrc='work_with_us.jpg' altText='guy pouring coffee' title='Brew your future' text="Come and work with us! We're excited to get to know you, fall in love with your story and support you in fulfilling your future plans, hope, and dreams." buttonText='Work with us' />
      </main>
    </>
  )
}

export default Home;