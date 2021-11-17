import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, InputAdornment, FormControl, Button } from '@mui/material';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import './home.css';
import NavbarHome from '../../components/NavbarHome/NavbarHome';

const Home = () => {
  const [event, setEvent] = useState([]);
  //const [slice, setSlice] = useState([]);

  const getApi = async () => {
    await axios
      .get('https://timcevent.herokuapp.com/events/home')
      .then(function (response) {
        setEvent(response.data.dataStarted.slice(0, 4));
        console.log(event);
      })
      .catch(function (error) {
        //throw new Error(error);
        console.log(error);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="container-header">
        <div className="header">
          <NavbarHome />
          <div className="header-wrapper">
            <h1 className="header-heading">
              <span>Create</span> or <span>Find</span> interesting <span>Events</span> around The World
            </h1>
            <FormControl sx={{ marginBottom: '2em', width: '60%' }}>
              <OutlinedInput
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment>
                    <Button variant="contained" sx={{ textTransform: 'unset', backgroundColor: '#214457', borderRadius: 10 }} placeholder="Search">
                      Search
                    </Button>
                  </InputAdornment>
                }
                placeholder="Search events"
                sx={{ borderRadius: 10, backgroundColor: '#F0F0F1' }}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="container-content">
        <div className="content">
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>Attend an event starting soon</h1>
              <p>more events</p>
            </div>
            <div className="content-card">{event && event.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>Desaign events</h1>
              <p>more events</p>
            </div>
            <div className="content-card">{event && event.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
