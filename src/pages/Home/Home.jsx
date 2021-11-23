import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, InputAdornment, FormControl, Button } from '@mui/material';
import Card from '../../components/Card/Card';
import './home.css';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  const [getEvents, setGetEvents] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  useEffect(() => {
    const getApi = async () => {
      await axios
        .get('https://timcevent.herokuapp.com/events/home')
        .then(function (response) {
          setGetEvents(response.data.dataStarted.slice(0, 4));
          console.log(getEvents);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const getEvent = async () => {
      try {
        const res = await axios.get(`https://timcevent.herokuapp.com/events`);
        setFilteredData(res.data.events);
        console.log(res.data.events);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
    getEvent();
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = filteredData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  return (
    <>
      <div className="container-header">
        <div className="header">
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
                value={wordEntered}
                onChange={handleFilter}
                sx={{ borderRadius: 10, backgroundColor: '#F0F0F1' }}
              />
              {filteredData.length !== 0 && (
                <div className="dataResult">
                  {filteredData.map((value, key) => {
                    return (
                      <a className="dataItem" href="/detail" target="_blank">
                        <p>{value.title} </p>
                      </a>
                    );
                  })}
                </div>
              )}
            </FormControl>
          </div>
        </div>
      </div>
      <div className="container-content">
        <div className="content">
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>Attend an event starting soon</h1>
              <p onClick={() => history.push('/search')}>more events</p>
            </div>
            <div className="content-card">{getEvents && getEvents.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
          <div className="content-wrapper">
            <div className="content-heading">
              <h1>Design events</h1>
              <p onClick={() => history.push('/search')}>more events</p>
            </div>
            <div className="content-card">{getEvents && getEvents.map((item) => <Card image={item.photoEvent} category={item.category.name} date={item.dateStart} title={item.title} author={item.speakerName} />)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
