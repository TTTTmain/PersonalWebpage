import NavBar from '../components/navbar';
import '../styles/App.css';
import '../styles/home.css';
import {Helmet} from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <style>{`body { 
          background-color: #12082C;
         }`}</style>
      </Helmet>
      <NavBar />
      {/*This section will have intro/overview and pic*/}
      <section className='about' style={{ height: "500px", outline: "red dashed 1px" }}>
        <div>
          <h1>Hi, I am Tim</h1>
        </div>
      </section>
      {/*This section will have experience(timeline), projects (cards), skills (dunno)*/}
      <section className='work' style={{ height: "500px", outline: "red dashed 1px" }}>

      </section>
      {/*This section will have link to blog*/}
      <section className='blog' style={{ height: "500px", outline: "red dashed 1px" }}>

      </section>

      <section className='contact' style={{ height: "500px", outline: "red dashed 1px" }}>

      </section>

    </>
  );
}

export default Home;