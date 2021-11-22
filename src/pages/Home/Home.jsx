import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, InputAdornment, FormControl, Button } from '@mui/material';
import Card from '../../components/Card/Card';
import './home.css';

const Home = () => {
  const [eventNow, setEventNow] = useState([]);
  const [eventDesign, setEventDesign] = useState([]);
  const [values, setValues] = useState('');
  console.log(values)

  const getEventNow = async () => {
    await axios
      .get('https://timcevent.herokuapp.com/events/home')
      .then(resEventNow => {
        setEventNow(resEventNow.data.dataStarted.slice(0, 4));
        console.log(resEventNow);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getEventDesign = async () => {
    await axios
      .get(' https://timcevent.herokuapp.com/events/category/5')
      .then(resEventDesign => {
        setEventDesign(resEventDesign.data.events.slice(0, 4));
        console.log(resEventDesign); 
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getEventNow();
    getEventDesign();
  }, []);

  const changeValue = (e) => {
    setValues(e.target.value);
  };

  const getSeach = () => {
    localStorage.setItem("searchItem", (values));
    window.location.href = '/'
  };

  return (
    <>
      <div className="container-header">
        <div className="header">
          <div className="header-wrapper">
            <h1 className="header-heading">
              <span>Create</span> or <span>Find</span> interesting <span>Events</span> around The World
            </h1>
            <form
            style={{ 
              marginBottom: '2em', 
              width: '60%' 
              }}
            action="/" 
            method="POST" 
            onSubmit={(e) => 
            { 
              e.preventDefault(); 
              getSeach();
            }}
            >
            <FormControl fullWidth>
              <OutlinedInput
                fullWidth
                name='search'
                value={values}
                onChange={changeValue}
                startAdornment = 
                { <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                endAdornment =
                {  <InputAdornment>
                    <Button
                      type="submit"
                      variant = "contained" 
                      sx={{ 
                        textTransform: 'unset', 
                        backgroundColor: '#214457', 
                        borderRadius: 10 
                        }} 
                      placeholder = "Search">
                      Search
                    </Button>
                  </InputAdornment>
                }
                placeholder="Search events"
                sx={{ 
                  borderRadius: 10,
                  backgroundColor: '#F0F0F1' 
                }}
              />
            </FormControl>
            </form>
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
            <div className="content-card">{eventNow && eventNow.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>Desaign events</h1>
              <p>more events</p>
            </div>
            <div className="content-card">{eventDesign && eventDesign.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
