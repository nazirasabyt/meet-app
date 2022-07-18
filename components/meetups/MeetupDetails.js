import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  function joinMeetuphandler() {
    localStorage.setItem("myMeetups", JSON.stringify(props));
    alert("Meetup added to your meetups!");
  }
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <p> Date: {props.date}</p>
      <address>{props.description}</address>
      <div className={classes.actions}>
        {" "}
        <button onClick={joinMeetuphandler}>Join this meetup</button>
      </div>
    </section>
  );
}

export default MeetupDetail;
