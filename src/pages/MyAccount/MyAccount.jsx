import ButtonSignOut from '../../components/ButtonSignOut/ButtonSignOut';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './myAccount.css';

const MyAccount = () => {
  const [myAccount, setMyAccount] = useState([]);
  const getAccount = async () => {
    await axios
      .get(
        'https://timcevent.herokuapp.com/users',
        {
          Headers: {
            token: localStorage.getItem('token'),
          },
        },
        {
          email: 'larina@gmail.com',
          password: '@larinA99',
        }
      )
      .then((response) => {
        setMyAccount(response.data.userDetail);
        console.log(myAccount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <>
      <div className="container">
        <div className="myHero">
          <div className="myHero-Id">
            <img
              src="https://s3-alpha-sig.figma.com/img/35b3/2335/854ac739a1a54b9219037b25b41868ec?Expires=1638144000&Signature=NkDy3atUTzSj1OP76quye2sL4yrEVu7b4xpvdyFM0S1FrNl1Izdr5mLEC0NSDs6wzXJ52paxirN728Ip-UzWPeEww1n6fRIZYif9Hq~mVIM7PDHGnlmKQpQZoehfzvaCdMBXY6m9SiKolQBRsqYc4RGHQZNS1wfseus1YRDrQxYj7xHwbZUKvMAhgBgDIC57EDMubRgGMXoHZXM3OIzjLpbweWfo7Gm5Bfg~rgFuKKHHFx0YLfKq1G3hrDrUb3SGzzCjx48a0sYb314XHOP8g-hPIHyWK~-VexmqAnDjsMTl7B5dqQd3IhHlutolxep5VYn4XF~Bfj~eq6cQzP~RgA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="myHero-img"
              alt="avatar-img"
            />
            <h1>Pratur Anahata Pratama</h1>
            <p>praturanhata45@gmail.com</p>
          </div>
          <ButtonSignOut />
        </div>
      </div>
    </>
  );
};

export default MyAccount;
