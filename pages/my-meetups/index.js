import { MongoClient } from "mongodb";

import MeetupList from "../../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://nazirasabyt:bR7SxT9QJiraqQ5z@cluster0.9ejdnsd.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  // const storage = localStorage.getItem("myMeetups");
  // if (storage) meetups = JSON.parse(storage);

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
        date: meetup.date,
      })),
    },
    revalidate: 3600,
  };
}

export default HomePage;
