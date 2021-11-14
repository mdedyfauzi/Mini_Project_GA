import { Grid, Typography } from "@mui/material"


const DetailsSection = () => {
    return (
                <Grid item xs={6}>
                    <Typography
                        variant = 'p'
                        sx={{                            
                            fontFamily: 'Noto Sans',
                            fontWeight: 'bold',
                            fontSize: '24px'
                        }} >
                        Details
                    </Typography>
                    <Typography
                    sx={{
                        marginTop: '16px',
                        fontWeight: '400px',
                        width: '500px',
                        fontFamily: 'Noto Sans'}}  >
                        Welcome to the Parlor! Let's play English on Your Feet!™
                        <br />
                        <br />    
                        GET FEEDBACK <br />
                        GAIN CONFIDENCE <br />
                        LAYER UP YOUR ENGLISH!™
                        <br />
                        <br />
                        Everyone will have a chance to speak to the "audience" and receive feedback from the audience and our coaches. You don't need to prepare anything--just prepare to have fun and try!
                        <br />
                        <br />
                        Relax. Layer Up your English!™
                        <br />
                        <br />
                        We look forward to your participation.
                        <br />
                        <br />
                        PLEASE READ: 5 Important Notes about this Meetup
                        <br />
                        <br />
                        1) This event is not a lecture or conversation practice.
                        This is a structured activity in which all attendees are expected to actively participate.
                        <br />
                        <br />
                        2) Participation in "English on Your Feet!™ is optimal for English language learners at the intermediate level and above.
                        <br />
                        <br />
                        3) Each member-participant is allowed one guest-participant per meetup as space allows. Guest-participants may attend as guests a maximum of 2 times then must join to continue.
                        <br />
                        <br />
                        4) If your plans change, please update your RSVP. Repeated "no-shows" will be removed.
                        <br />
                        <br />
                        5) We use Google Meet. A Google or Gmail account is NOT required to use the link and join our meeting. Before the meetup, please open the link (given to you when you RSVP) and explore the following features on the same device that you will use to attend: mute/unmute, chat box, and the additional options menu. (See the PHOTO for visual instructions.)
                    
                    </Typography>
                </Grid>

    )
}

export default DetailsSection