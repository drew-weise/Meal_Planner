import "./HomePage.css";
import BottomNav from "../../components/BottomNav/BottomNav";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-center">

        <form className="chat-box">
          <input
            type="text"
            placeholder="Ask me to plan meals, build recipes, or make a grocery list..."
          />
          <button type="submit">Send</button>
        </form>
      </section>
        
        <BottomNav />
    </main>
  );
}